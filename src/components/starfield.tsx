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
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0, isActive: false })

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
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

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
          connectionRadius: Math.random() * 50 + 100 // Variable connection distance
        })
      }

      starsRef.current = stars
    }

    generateStars()

    // Calculate distance between two points
    const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }

    // Draw dynamic connections
    const drawConnections = () => {
      const mouse = mouseRef.current

      starsRef.current.forEach((star, i) => {
        // Mouse interaction - subtle attraction/repulsion
        if (mouse.isActive) {
          const distanceToMouse = getDistance(star.x, star.y, mouse.x, mouse.y)
          const interactionRadius = 120

          if (distanceToMouse < interactionRadius) {
            // Draw line to mouse with opacity based on distance
            const lineOpacity = (1 - distanceToMouse / interactionRadius) * 0.5
            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }

        // Connect to nearby stars with dynamic opacity
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const otherStar = starsRef.current[j]
          const distance = getDistance(star.x, star.y, otherStar.x, otherStar.y)
          const maxDistance = (star.connectionRadius + otherStar.connectionRadius) / 2

          if (distance < maxDistance) {
            // Dynamic opacity based on distance and time
            const baseOpacity = (1 - distance / maxDistance) * 0.4
            const timeOpacity = Math.sin(Date.now() * 0.001 + i + j) * 0.1 + 0.9
            const finalOpacity = baseOpacity * timeOpacity

            ctx.beginPath()
            ctx.moveTo(star.x, star.y)
            ctx.lineTo(otherStar.x, otherStar.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${finalOpacity})`
            ctx.lineWidth = 0.8
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

      // Update stars with continuous movement and mouse interaction
      starsRef.current.forEach((star, index) => {
        // Continuous movement
        star.x += star.vx
        star.y += star.vy

        // Subtle mouse interaction
        if (mouse.isActive) {
          const distanceToMouse = getDistance(star.x, star.y, mouse.x, mouse.y)
          const influenceRadius = 150

          if (distanceToMouse < influenceRadius) {
            const force = (influenceRadius - distanceToMouse) / influenceRadius
            const angle = Math.atan2(star.y - mouse.y, star.x - mouse.x)

            // Subtle push away from mouse
            star.vx += Math.cos(angle) * force * 0.02
            star.vy += Math.sin(angle) * force * 0.02
          }
        }

        // Add some randomness to movement
        star.vx += (Math.random() - 0.5) * 0.005
        star.vy += (Math.random() - 0.5) * 0.005

        // Limit velocity
        const maxVelocity = 1.2
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

        // Dynamic twinkling
        const twinkle = Math.sin(time * star.twinkleSpeed + index) * 0.3 + 0.7
        const finalOpacity = star.opacity * twinkle

        // Draw star with glow effect
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`
        ctx.fill()

        // Add subtle glow
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * 0.1})`
        ctx.fill()
      })

      // Draw dynamic connections
      drawConnections()

      // Draw subtle mouse cursor when active
      if (mouse.isActive) {
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.fill()

        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  )
}
