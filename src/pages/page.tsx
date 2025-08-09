import { useState, useEffect, useMemo, useRef } from "react";
import RolesDisplay from "@/components/roles-display";
import StarField from "@/components/starfield";
import Footer from "@/sections/footer";
import ProjectCard from "@/components/project-card";
import About from "@/sections/about";
import Nav from "@/sections/nav";
import Slideshow from "@/components/Slideshow";
import Projects from "@/sections/projects";
import ExperienceSection from "@/sections/experience";

export default function Page() {
  // Stable roles array for RolesDisplay
  const rolesList = useMemo(() => [
    "Software Engineer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Blockchain Builder"
  ], []);
  // Images to sync with roles
  const roleImages = [
    "/res/loop+toilet.jpg",
    "/res/headshot.PNG",
    "/res/running.jpg",
    "/res/blockchain+trip.jpg"
  ];
  // Track current role index for syncing image
  const [roleIndex, setRoleIndex] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [blockOffsets, setBlockOffsets] = useState<{[key: string]: number}>({});
  const [drift, setDrift] = useState({ x: 0, y: 0 });
  // Repulse for each icon
  const [repulseArr, setRepulseArr] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [iconDrift, setIconDrift] = useState([
    { x: 0, y: 0 }, // LinkedIn
    { x: 0, y: 0 }, // Resume
    { x: 0, y: 0 }, // GitHub
    { x: 0, y: 0 }, // Email
  ]);
  // Track which icons are frozen (hovered)
  const [frozenIcons, setFrozenIcons] = useState([false, false, false, false]);
  // Track which icons are returning (unfrozen and animating back)
  const [returningIcons, setReturningIcons] = useState([
    false, false, false, false
  ]);
  // Store start and end positions for returning icons
  const returningStart = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const returningEnd = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  // Ref to always have latest frozenIcons in animation
  const frozenIconsRef = useRef(frozenIcons);
  useEffect(() => { frozenIconsRef.current = frozenIcons; }, [frozenIcons]);

  // Animate cloud drift (removed random for smoothness)
  useEffect(() => {
    let frame = 0;
    let driftX = 0;
    let driftY = 0;
    let rafId: number;
    function animate() {
      frame++;
      // Only smooth sine/cosine, no randomness
      driftX = 0;
      driftY = 0;
      setDrift({ x: driftX, y: driftY });
      rafId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Mouse tracking for per-icon repulsion
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      const socials = document.getElementById('cloud-socials');
      if (socials) {
        const iconEls = Array.from(socials.children);
        const newRepulseArr = iconEls.map((el, i) => {
          if (frozenIcons[i]) {
            // If frozen, keep previous value
            return repulseArr[i];
          }
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dx = centerX - e.clientX;
          const dy = centerY - e.clientY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // Always base direction away from mouse, then add a small unique angle offset
          let baseAngle = Math.atan2(dy, dx);
          // Unique offset per icon, but small (max ±30deg)
          const angleOffset = (i - 1.5) * (Math.PI / 12); // -1.5, -0.5, 0.5, 1.5 * 15deg
          const angle = baseAngle + angleOffset;
          if (dist < 160) {
            const factor = (160 - dist) / 160;
            const mag = factor * 36; // max 36px
            return {
              x: Math.cos(angle) * mag,
              y: Math.sin(angle) * mag,
            };
          } else {
            return { x: 0, y: 0 };
          }
        });
        setRepulseArr(newRepulseArr);
      }
      const newOffsets: {[key: string]: number} = {};
      ['about-text-1', 'about-text-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          newOffsets[id] = e.clientY - rect.top;
        }
      });
      setBlockOffsets(newOffsets);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [frozenIcons, repulseArr]);

  useEffect(() => {
    const handleEvent = (e: MouseEvent | Event) => {
      let clientY = 0;
      if ('clientY' in e) {
        clientY = e.clientY;
        setMouseY(e.clientY);
      } else {
        // For scroll event, use last mouseY
        clientY = mouseY;
      }
      const newOffsets: {[key: string]: number} = {};
      ['about-text-1', 'about-text-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          newOffsets[id] = clientY - rect.top;
        }
      });
      setBlockOffsets(newOffsets);
    };
    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('scroll', handleEvent);
    return () => {
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('scroll', handleEvent);
    };
  }, [mouseY]);

  // Persist frame across renders
  const frameRef = useRef(0);
  useEffect(() => {
    let rafId: number;
    function animate() {
      frameRef.current++;
      setIconDrift(prev => prev.map((val, i) => {
        if (frozenIconsRef.current[i] || returningIcons[i]) {
          return val;
        }
        // Animate as before
        switch (i) {
          case 0:
            return {
              x: 16 * Math.sin(frameRef.current / 180 + 0),
              y: 10 * Math.cos(frameRef.current / 220 + 0),
            };
          case 1:
            return {
              x: 14 * Math.sin(frameRef.current / 210 + 1),
              y: 14 * Math.cos(frameRef.current / 170 + 1),
            };
          case 2:
            return {
              x: 18 * Math.sin(frameRef.current / 160 + 2),
              y: 12 * Math.cos(frameRef.current / 200 + 2),
            };
          case 3:
            return {
              x: 12 * Math.sin(frameRef.current / 200 + 3),
              y: 18 * Math.cos(frameRef.current / 150 + 3),
            };
          default:
            return val;
        }
      }));
      rafId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Smoothly animate icon from frozen to animated position when unfrozen
  useEffect(() => {
    // Find which icons just transitioned from frozen to unfrozen
    let prevFrozen = frozenIconsRef.current;
    frozenIconsRef.current = frozenIcons;
    frozenIcons.forEach((isFrozen, i) => {
      if (prevFrozen[i] && !isFrozen) {
        // Just unfrozen, start return animation
        // Get current position (frozen)
        setReturningIcons(icons => {
          const arr = [...icons];
          arr[i] = true;
          return arr;
        });
        returningStart.current[i] = iconDrift[i];
        // Compute target (current animated position)
        let frame = frameRef.current;
        let target;
        switch (i) {
          case 0:
            target = {
              x: 16 * Math.sin(frame / 180 + 0),
              y: 10 * Math.cos(frame / 220 + 0),
            };
            break;
          case 1:
            target = {
              x: 14 * Math.sin(frame / 210 + 1),
              y: 14 * Math.cos(frame / 170 + 1),
            };
            break;
          case 2:
            target = {
              x: 18 * Math.sin(frame / 160 + 2),
              y: 12 * Math.cos(frame / 200 + 2),
            };
            break;
          case 3:
            target = {
              x: 12 * Math.sin(frame / 200 + 3),
              y: 18 * Math.cos(frame / 150 + 3),
            };
            break;
          default:
            target = iconDrift[i];
        }
        returningEnd.current[i] = target;
        // Animate over 500ms (slower)
        const duration = 500;
        const startTime = performance.now();
        function animateReturn(now: number) {
          const t = Math.min(1, (now - startTime) / duration);
          const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t; // easeInOut
          const sx = returningStart.current[i].x;
          const sy = returningStart.current[i].y;
          const ex = returningEnd.current[i].x;
          const ey = returningEnd.current[i].y;
          const nx = sx + (ex - sx) * ease;
          const ny = sy + (ey - sy) * ease;
          setIconDrift(prev => prev.map((val, idx) => idx === i ? { x: nx, y: ny } : val));
          if (t < 1) {
            requestAnimationFrame(animateReturn);
          } else {
            setReturningIcons(icons => {
              const arr = [...icons];
              arr[i] = false;
              return arr;
            });
          }
        }
        requestAnimationFrame(animateReturn);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frozenIcons]);

  function primaryMaskStyle(id: string) {
    const y = blockOffsets[id] ?? 0;
    return {
      WebkitMask: `linear-gradient(to bottom, black 0%, black ${Math.max(0, y)}px, transparent ${Math.max(0, y)}px, transparent 100%)`,
      mask: `linear-gradient(to bottom, black 0%, black ${Math.max(0, y)}px, transparent ${Math.max(0, y)}px, transparent 100%)`
    };
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <Nav />

      {/* Main Content */}
      <main className="pt-0">
        {/* Hero + User Icon & Socials Row */}
        <section
          className="relative flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-16 w-full min-h-screen overflow-hidden"
          style={{
            minHeight: '90vh',
            paddingTop: '12rem',
            paddingBottom: '0', // less bottom padding
            paddingLeft: '4vw',
            paddingRight: '4vw',
            zIndex: 2,
          }}
        >
          {/* Starfield background only for hero */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <StarField />
          </div>
          {/* Content above starfield */}
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-16 w-full z-10">
            <div className="max-w-4xl text-center md:text-left flex-1 mb-16 md:mb-0 px-2 flex flex-col items-center md:items-start">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Weston Clark</h1>
              <div className="text-xl md:text-2xl font-mono mb-8">
                <RolesDisplay roles={rolesList} onRoleChange={setRoleIndex} />
              </div>
              {/* CTA Buttons and other content here (preserved) */}
            </div>
            <div
              className="flex flex-col items-center justify-center flex-1 min-h-[400px] md:mt-0 mt-10"
              style={{ zIndex: 2 }}
            >
              {/* User Icon (no repulse, no drift) */}
              <div className="relative w-52 h-52 xl:w-80 xl:h-80 mb-12 flex items-center justify-center">
                {/* Even larger and more rounded hexagon-masked image, no border */}
                <svg viewBox="0 0 180 180" className="w-52 h-52 xl:w-80 xl:h-80 z-0">
                  <defs>
                    <clipPath id="hexMaskRounded" clipPathUnits="userSpaceOnUse">
                      <path d="M45,27 Q22.5,45 22.5,67.5 L22.5,112.5 Q22.5,135 45,153 L90,175.5 Q112.5,180 135,153 Q157.5,135 157.5,112.5 L157.5,67.5 Q157.5,45 135,27 L90,4.5 Q67.5,0 45,27 Z" />
                    </clipPath>
                  </defs>
                  <image
                    href={roleImages[roleIndex % roleImages.length]}
                    x="0" y="0" width="180" height="180"
                    clipPath="url(#hexMaskRounded)"
                    preserveAspectRatio="xMidYMid slice"
                    className="object-cover"
                  />
                </svg>
                {/* Social Icons at corners */}
                <div id="cloud-socials" className="pointer-events-none absolute inset-0 w-full h-full">
                  {/* Top Left */}
                  <a
                    href="https://linkedin.com/in/westonclark"
                    target="_blank"
                    rel="noopener"
                    className="cloud-glass w-10 h-10 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-all pointer-events-auto"
                    style={{
                      position: 'absolute',
                      left: '0%',
                      top: '0%',
                      transform: `translate(-30%,-30%) translate(${iconDrift[0].x + repulseArr[0].x}px, ${iconDrift[0].y + repulseArr[0].y}px)`,
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      transition: 'transform 0.2s cubic-bezier(.4,2,.3,1)',
                    }}
                    aria-label="LinkedIn"
                    onMouseEnter={() => setFrozenIcons(arr => { const copy = [...arr]; copy[0] = true; return copy; })}
                    onMouseLeave={() => setFrozenIcons(arr => { const copy = [...arr]; copy[0] = false; return copy; })}
                  >
                    <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 7.5H7v7h2.5v-7zm-1.25-2.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm9.25 2.25h-2.5v-1c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25v1h-2.5v7h2.5v-3.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25V17h2.5v-3.5c0-2.21-1.79-4-4-4z" fill="currentColor"/></svg>
                  </a>
                  {/* Top Right */}
                  <a
                    href="res/resume.pdf"
                    className="cloud-glass w-10 h-10 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-all pointer-events-auto"
                    style={{
                      position: 'absolute',
                      right: '0%',
                      top: '0%',
                      transform: `translate(30%,-30%) translate(${iconDrift[1].x + repulseArr[1].x}px, ${iconDrift[1].y + repulseArr[1].y}px)`,
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      transition: 'transform 0.2s cubic-bezier(.4,2,.3,1)',
                    }}
                    aria-label="Resume"
                    onMouseEnter={() => setFrozenIcons(arr => { const copy = [...arr]; copy[1] = true; return copy; })}
                    onMouseLeave={() => setFrozenIcons(arr => { const copy = [...arr]; copy[1] = false; return copy; })}
                  >
                    <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5V8h5.5L13 3.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" fill="currentColor"/></svg>
                  </a>
                  {/* Bottom Left */}
                  <a
                    href="https://github.com/westonclark"
                    target="_blank"
                    rel="noopener"
                    className="cloud-glass w-10 h-10 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-all pointer-events-auto"
                    style={{
                      position: 'absolute',
                      left: '0%',
                      bottom: '0%',
                      transform: `translate(-30%,30%) translate(${iconDrift[2].x + repulseArr[2].x}px, ${iconDrift[2].y + repulseArr[2].y}px)`,
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      transition: 'transform 0.2s cubic-bezier(.4,2,.3,1)',
                    }}
                    aria-label="GitHub"
                    onMouseEnter={() => setFrozenIcons(arr => { const copy = [...arr]; copy[2] = true; return copy; })}
                    onMouseLeave={() => setFrozenIcons(arr => { const copy = [...arr]; copy[2] = false; return copy; })}
                  >
                    <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.07c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.003 10.003 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="currentColor"/></svg>
                  </a>
                  {/* Bottom Right */}
                  <a
                    href="mailto:wc123@cornell.edu"
                    className="cloud-glass w-10 h-10 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-all pointer-events-auto"
                    style={{
                      position: 'absolute',
                      right: '0%',
                      bottom: '0%',
                      transform: `translate(30%,30%) translate(${iconDrift[3].x + repulseArr[3].x}px, ${iconDrift[3].y + repulseArr[3].y}px)`,
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
                      border: '1px solid rgba(255,255,255,0.10)',
                      transition: 'transform 0.2s cubic-bezier(.4,2,.3,1)',
                    }}
                    aria-label="Email"
                    onMouseEnter={() => setFrozenIcons(arr => { const copy = [...arr]; copy[3] = true; return copy; })}
                    onMouseLeave={() => setFrozenIcons(arr => { const copy = [...arr]; copy[3] = false; return copy; })}
                  >
                    <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 2.24l7.88 6.99a2 2 0 0 0 2.24 0L20 8.24V18H4V8.24z" fill="currentColor"/></svg>
                  </a>
                </div>
            </div>
            </div>
          </div>
        </section>


        {/* About Section */}
        <section className="container mx-auto px-16 flex flex-col md:flex-row md:space-x-16 items-start py-16 border-t border-border">
          <div className="flex-1 flex justify-start mt-16 md:mt-0">
            {/* Slideshow next to About */}
            <div className="w-full max-w-xs md:max-w-md lg:max-w-lg mb-12">
              <Slideshow
                images={["/res/Cornell+Blockchain.png", "/res/Cornell+Hyperloop.png", "/res/ROPlace.png", "/res/Luraph.png"]}
                altTexts={["Cornell Blockchain", "Cornell Hyperloop", "ROPlace", "Luraph"]}
                labels={["Blockchain", "Hyperloop", "ROPlace", "Luraph"]}
              />
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <About maskStyle={primaryMaskStyle} />
          </div>
        </section>

        {/* Selected Work */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase animate-slide-up">
            Selected Software Projects
          </h2>
          
          { /* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Project 2 */}
            <ProjectCard
              href="/projects/dataviz-engine/page"
              gradient="from-green-600 to-teal-600"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              }
              title="DataViz Engine"
              role="02 | BACKEND DEVELOPER"
              description="A Python-based data visualization engine with machine learning capabilities. Processes large datasets and generates interactive charts."
            />

            {/* Project 3 */}
            <ProjectCard
              href="/projects/taskflow-ai/page"
              gradient="from-orange-600 to-red-600"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              }
              title="TaskFlow AI"
              role="03 | AI DEVELOPER"
              description="An intelligent task management system using natural language processing to automatically categorize and prioritize tasks."
            />

            {/* Project 4 */}
            <ProjectCard
              href="/projects/ecotracker/page"
              gradient="from-purple-600 to-pink-600"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              }
              title="EcoTracker"
              role="04 | MOBILE DEVELOPER"
              description="A React Native app that tracks personal carbon footprint with gamification elements to encourage sustainable behavior."
            />

            {/* Project 5 */}
            <ProjectCard
              href="/projects/algoviz/page"
              gradient="from-indigo-600 to-blue-600"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9zm2-7v2H4v2h1v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8h1V6H4V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z"/>
                </svg>
              }
              title="AlgoViz"
              role="05 | SOFTWARE ENGINEER"
              description="An interactive algorithm visualization tool built with D3.js and TypeScript to help students understand sorting and graph algorithms."
            />
          </div>
        </section>

        {/* Experience Section */}
        <ExperienceSection forceDark={true} />

        {/* Contact Footer */}
        <Footer />
      </main>
    </div>
  );
}
