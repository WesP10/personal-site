'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  vx: number // velocity x
  vy: number // velocity y
  baseSpeed: number
  connectionRadius: number
  isInGravityWell: boolean
  gravityWellTime: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0, isActive: false, clickTime: 0, isClicked: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      mouseRef.current.isActive = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false
      mouseRef.current.isClicked = false
    }

    // Mouse click handler for gravity wells
    const handleMouseDown = () => {
      mouseRef.current.isClicked = true
      mouseRef.current.clickTime = Date.now()
    }

    const handleMouseUp = () => {
      mouseRef.current.isClicked = false
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mouseup', handleMouseUp)

    // Generate stars with continuous movement
    const generateStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((canvas.width * canvas.height) / 15000) // Optimal density for connections

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.6 + 0.4,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          vx: (Math.random() - 0.5) * 0.8, // Continuous velocity
          vy: (Math.random() - 0.5) * 0.8,
          baseSpeed: Math.random() * 0.3 + 0.1,
          connectionRadius: Math.random() * 50 + 100, // Variable connection distance
          isInGravityWell: false,
          gravityWellTime: 0
        })
      }

      starsRef.current = stars
    }

    generateStars()

    // Calculate distance between two points
    const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }

    // Draw dynamic connections with gravity well effects
    const drawConnections = () => {
      const mouse = mouseRef.current

      starsRef.current.forEach((star, i) => {
        // Enhanced mouse interaction - dramatic connections with gravity well coloring
        if (mouse.isActive) {
          const distanceToMouse = getDistance(star.x, star.y, mouse.x, mouse.y)
          const interactionRadius = 300 // Dramatically increased from 120

          if (distanceToMouse < interactionRadius) {
            // Color changes based on gravity well state
            const lineOpacity = (1 - distanceToMouse / interactionRadius) * 0.9
            const isInWell = star.isInGravityWell || mouse.isClicked
            const lineColor = isInWell ?
              `rgba(100, 200, 255, ${lineOpacity})` : // Blue for gravity well
              `rgba(255, 255, 255, ${lineOpacity})`   // White for normal

            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = Math.max(1, (1 - distanceToMouse / interactionRadius) * 3)
            ctx.stroke()
          }
        }

        // Connect to nearby stars with enhanced clustering effects
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const otherStar = starsRef.current[j]
          const distance = getDistance(star.x, star.y, otherStar.x, otherStar.y)
          const maxDistance = (star.connectionRadius + otherStar.connectionRadius) / 2

          if (distance < maxDistance) {
            // Enhanced connections for clustered stars
            const baseOpacity = (1 - distance / maxDistance) * 0.4
            const timeOpacity = Math.sin(Date.now() * 0.001 + i + j) * 0.1 + 0.9
            const clusterBoost = (star.isInGravityWell && otherStar.isInGravityWell) ? 1.5 : 1.0
            const finalOpacity = baseOpacity * timeOpacity * clusterBoost

            // Color shift for clustered connections
            const isCluster = star.isInGravityWell || otherStar.isInGravityWell
            const strokeColor = isCluster ?
              `rgba(150, 220, 255, ${finalOpacity})` : // Light blue for clusters
              `rgba(255, 255, 255, ${finalOpacity})`   // White for normal

            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(otherStar.x, otherStar.y)
            ctx.strokeStyle = strokeColor
            ctx.lineWidth = isCluster ? 1.2 : 0.8
            ctx.stroke()
          }
        }
      })
    }

    // Animation loop
    let time = 0
    const animate = () => {
      time += 1

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const currentTime = Date.now()

      // Update stars with gravity well clustering behavior
      starsRef.current.forEach((star, index) => {
        // Continuous movement
        star.x += star.vx
        star.y += star.vy

        // Gravity well mechanics
        if (mouse.isActive) {
          const distanceToMouse = getDistance(star.x, star.y, mouse.x, mouse.y)
          const gravityWellRadius = 180 // Radius for gravity well effect
          const repulsionRadius = 60   // Inner radius for repulsion

          // Determine if star should be in gravity well
          const shouldBeInWell = mouse.isClicked && distanceToMouse < gravityWellRadius

          if (shouldBeInWell) {
            star.isInGravityWell = true
            star.gravityWellTime = currentTime

            if (distanceToMouse > repulsionRadius) {
              // Gravitational attraction - pull towards mouse
              const attractionForce = Math.pow((gravityWellRadius - distanceToMouse) / gravityWellRadius, 2) * 0.08
              const angle = Math.atan2(mouse.y - star.y, mouse.x - star.x)

              star.vx += Math.cos(angle) * attractionForce
              star.vy += Math.sin(angle) * attractionForce

              // Add orbital velocity for clustering effect
              const perpAngle = angle + Math.PI / 2
              const orbitalForce = attractionForce * 0.3
              star.vx += Math.cos(perpAngle) * orbitalForce
              star.vy += Math.sin(perpAngle) * orbitalForce
            } else {
              // Strong repulsion at very close range to prevent collapse
              const repulsionForce = (repulsionRadius - distanceToMouse) / repulsionRadius * 0.2
              const angle = Math.atan2(star.y - mouse.y, star.x - mouse.x)

              star.vx += Math.cos(angle) * repulsionForce
              star.vy += Math.sin(angle) * repulsionForce
            }
          } else {
            // Check if star should exit gravity well (timeout or distance)
            const timeSinceWell = currentTime - star.gravityWellTime
            if (star.isInGravityWell && (timeSinceWell > 2000 || distanceToMouse > gravityWellRadius * 1.5)) {
              star.isInGravityWell = false
            }

            // Normal repulsion behavior when not in gravity well
            if (!star.isInGravityWell && distanceToMouse < 250) {
              const force = (250 - distanceToMouse) / 250
              const angle = Math.atan2(star.y - mouse.y, star.x - mouse.x)

              const pushForce = force * 0.15
              star.vx += Math.cos(angle) * pushForce
              star.vy += Math.sin(angle) * pushForce
            }
          }
        } else {
          // Gradually exit gravity wells when mouse is not active
          if (star.isInGravityWell) {
            const timeSinceWell = currentTime - star.gravityWellTime
            if (timeSinceWell > 1000) {
              star.isInGravityWell = false
            }
          }
        }

        // Add some randomness to movement
        star.vx += (Math.random() - 0.5) * 0.005
        star.vy += (Math.random() - 0.5) * 0.005

        // Limit velocity with higher maximum for more dramatic movement
        const maxVelocity = star.isInGravityWell ? 3.5 : 2.5 // Higher velocity in gravity wells
        const currentVelocity = Math.sqrt(star.vx * star.vx + star.vy * star.vy)
        if (currentVelocity > maxVelocity) {
          star.vx = (star.vx / currentVelocity) * maxVelocity
          star.vy = (star.vy / currentVelocity) * maxVelocity
        }

        // Wrap around edges
        if (star.x < 0) {
          star.x = canvas.width
        } else if (star.x > canvas.width) {
          star.x = 0
        }

        if (star.y < 0) {
          star.y = canvas.height
        } else if (star.y > canvas.height) {
          star.y = 0
        }

        // Enhanced twinkling for gravity well stars
        const twinkle = Math.sin(time * star.twinkleSpeed + index) * 0.3 + 0.7
        const wellBoost = star.isInGravityWell ? 1.3 : 1.0
        const finalOpacity = star.opacity * twinkle * wellBoost

        // Draw star with enhanced glow for gravity well stars
        const starColor = star.isInGravityWell ?
          `rgba(200, 230, 255, ${finalOpacity})` : // Light blue for clustered stars
          `rgba(255, 255, 255, ${finalOpacity})`   // White for normal stars

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * (star.isInGravityWell ? 1.2 : 1), 0, Math.PI * 2)
        ctx.fillStyle = starColor
        ctx.fill()

        // Enhanced glow for gravity well stars
        const glowRadius = star.size * (star.isInGravityWell ? 3 : 2)
        const glowOpacity = finalOpacity * (star.isInGravityWell ? 0.2 : 0.1)
        ctx.beginPath()
        ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = star.isInGravityWell ?
          `rgba(150, 200, 255, ${glowOpacity})` :
          `rgba(255, 255, 255, ${glowOpacity})`
        ctx.fill()
      })

      // Draw dynamic connections
      drawConnections()

      // Draw enhanced mouse cursor with gravity well indicator
      if (mouse.isActive) {
        // Gravity well visualization when clicked
        if (mouse.isClicked) {
          // Gravity well boundary
          ctx.beginPath()
          ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(100, 200, 255, ${0.3 * Math.sin(time * 0.05)})`
          ctx.lineWidth = 2
          ctx.setLineDash([5, 5])
          ctx.stroke()
          ctx.setLineDash([])

          // Inner repulsion zone
          ctx.beginPath()
          ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 100, 100, ${0.2 * Math.sin(time * 0.08)})`
          ctx.lineWidth = 1
          ctx.setLineDash([3, 3])
          ctx.stroke()
          ctx.setLineDash([])
        }

        // Enhanced cursor layers
        const cursorColor = mouse.isClicked ?
          'rgba(100, 200, 255, ' : // Blue when creating gravity wells
          'rgba(255, 255, 255, '   // White normally

        // Large outer glow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2)
        ctx.fillStyle = cursorColor + '0.1)'
        ctx.fill()

        // Medium glow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2)
        ctx.fillStyle = cursorColor + '0.2)'
        ctx.fill()

        // Inner glow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2)
        ctx.fillStyle = cursorColor + '0.4)'
        ctx.fill()

        // Bright center
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = cursorColor + '0.9)'
        ctx.fill()

        // Pulsing ring effect
        const pulseRadius = 30 + Math.sin(time * 0.1) * 10
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, pulseRadius, 0, Math.PI * 2)
        ctx.strokeStyle = cursorColor + `${0.3 * Math.sin(time * 0.1)})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mouseup', handleMouseUp)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-none"
      style={{ zIndex: 1 }}
    />
  )
}
