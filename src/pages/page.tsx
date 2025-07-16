import { useState, useEffect } from "react";
import About from "@/sections/about";
import Nav from "@/sections/nav";
import Link from "next/link";

import Slideshow from "@/components/Slideshow";

export default function Home() {
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
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newOffsets: {[key: string]: number} = {};
      ['about-text-1', 'about-text-2'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          newOffsets[id] = e.clientY - rect.top;
        }
      });
      setBlockOffsets(newOffsets);
      setMouseY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let frame = 0;
    let rafId: number;
    function animate() {
      frame++;
      setIconDrift([
        {
          x: 16 * Math.sin(frame / 180 + 0),
          y: 10 * Math.cos(frame / 220 + 0),
        },
        {
          x: 14 * Math.sin(frame / 210 + 1),
          y: 14 * Math.cos(frame / 170 + 1),
        },
        {
          x: 18 * Math.sin(frame / 160 + 2),
          y: 12 * Math.cos(frame / 200 + 2),
        },
        {
          x: 12 * Math.sin(frame / 200 + 3),
          y: 18 * Math.cos(frame / 150 + 3),
        },
      ]);
      rafId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  function primaryMaskStyle(id: string) {
    const y = blockOffsets[id] ?? 0;
    return {
      WebkitMask: `linear-gradient(to bottom, black 0%, black ${Math.max(0, y)}px, transparent ${Math.max(0, y)}px, transparent 100%)`,
      mask: `linear-gradient(to bottom, black 0%, black ${Math.max(0, y)}px, transparent ${Math.max(0, y)}px, transparent 100%)`
    };
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Nav />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero + User Icon & Socials Row */}
        <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-8">
            <div className="max-w-4xl text-center md:text-left flex-1 mb-8 md:mb-0">
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight animate-fade-in">
              Weston Clark
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-slide-up">
              A Devoted Software Engineer.
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center flex-1 min-h-[260px] md:mt-0 mt-4"
            style={{
              zIndex: 2,
            }}
          >
            {/* User Icon (no repulse, no drift) */}
            <div
              className="w-20 h-20 xl:w-28 xl:h-28 rounded-full bg-white/40 backdrop-blur-2xl border border-primary/40 shadow-2xl flex items-center justify-center mb-8"
              style={{
                boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.22)',
                border: '1.5px solid rgba(110,193,228,0.4)',
                filter: 'blur(0.5px)',
              }}
            >
              <span
                className="text-4xl xl:text-6xl font-bold text-primary select-none"
                style={{
                  filter: 'blur(0.2px)',
                  color: '#6ec1e4',
                }}
              >
                WC
              </span>
            </div>
            {/* Social Icons (drift + repulse) */}
            <div id="cloud-socials" className="flex space-x-6 xl:space-x-8 xl:pb-8">
            {[
              {
                href: "https://linkedin.com/in/westonclark",
                label: "LinkedIn",
                icon: (
                  <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 7.5H7v7h2.5v-7zm-1.25-2.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm9.25 2.25h-2.5v-1c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25v1h-2.5v7h2.5v-3.5c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25V17h2.5v-3.5c0-2.21-1.79-4-4-4z" fill="currentColor"/></svg>
                ),
              },
              {
                href: "res/resume.pdf",
                label: "Resume",
                icon: (
                  <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5V8h5.5L13 3.5zM8 13h8v2H8v-2zm0 4h8v2H8v-2z" fill="currentColor"/></svg>
                ),
              },
              {
                href: "https://github.com/westonclark",
                label: "GitHub",
                icon: (
                  <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.07c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.003 10.003 0 0 0 22 12c0-5.52-4.48-10-10-10z" fill="currentColor"/></svg>
                ),
              },
              {
                href: "mailto:wc123@cornell.edu",
                label: "Email",
                icon: (
                  <svg width="24" height="24" className="text-primary xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 2.24l7.88 6.99a2 2 0 0 0 2.24 0L20 8.24V18H4V8.24z" fill="currentColor"/></svg>
                ),
              },
            ].map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener" : undefined}
                className="cloud-glass w-10 h-10 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center hover:bg-primary/10 transition-all"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  // Combine drift and unique repulse for each icon
                  transform: `translate(${iconDrift[i].x + repulseArr[i].x}px, ${iconDrift[i].y + repulseArr[i].y}px)`,
                  transition: 'transform 0.2s cubic-bezier(.4,2,.3,1)',
                }}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
            </div>
          </div>
        </section>


        <section className="container mx-auto px-6 flex flex-col md:flex-row md:space-x-12 items-start py-8">
          <div className="flex-1">
            <About maskStyle={primaryMaskStyle} />
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
            {/* Slideshow next to About */}
            <div className="w-full max-w-xs">
              <Slideshow
                images={["/res/headshot.PNG", "/res/headshot.PNG", "/res/headshot.PNG"]}
                altTexts={["Weston Clark Headshot", "Weston Clark Headshot 2", "Weston Clark Headshot 3"]}
              />
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase animate-slide-up">
            Selected Software Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 2 */}
            <div className="project-card group cursor-pointer hover:scale-95 transition-transform duration-300">
              <Link href="/projects/dataviz-engine/page" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-green-600 to-teal-600 relative group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">DataViz Engine</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-primary">02 | BACKEND DEVELOPER</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">DataViz Engine</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A Python-based data visualization engine with machine learning capabilities.
                      Processes large datasets and generates interactive charts.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Project 3 */}
            <div className="project-card group cursor-pointer hover:scale-95 transition-transform duration-300">
              <Link href="/projects/taskflow-ai/page" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-600 relative group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">TaskFlow AI</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-primary">03 | AI DEVELOPER</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">TaskFlow AI</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      An intelligent task management system using natural language processing
                      to automatically categorize and prioritize tasks.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Project 4 */}
            <div className="project-card group cursor-pointer hover:scale-95 transition-transform duration-300">
              <Link href="/projects/ecotracker/page" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">EcoTracker</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-primary">04 | MOBILE DEVELOPER</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">EcoTracker</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A React Native app that tracks personal carbon footprint with
                      gamification elements to encourage sustainable behavior.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Project 5 */}
            <div className="project-card group cursor-pointer hover:scale-95 transition-transform duration-300">
              <Link href="/projects/algoviz/page" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-indigo-600 to-blue-600 relative group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 11H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9zm2-7v2H4v2h1v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8h1V6H4V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z"/>
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">AlgoViz</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-primary">05 | SOFTWARE ENGINEER</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">AlgoViz</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      An interactive algorithm visualization tool built with D3.js and TypeScript
                      to help students understand sorting and graph algorithms.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="container mx-auto px-6 py-16 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div>
              <h3 className="text-2xl font-light mb-4 animate-fade-in">Let's Connect</h3>
              <p className="text-muted-foreground">
                Thanks for stopping by! Here's more about me if you're interested.
              </p>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="https://linkedin.com/in/westonclark" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://github.com/westonclark" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                GitHub
              </a>
              <a href="mailto:wc123@cornell.edu" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Email
              </a>
              <a href="res/resume.pdf" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Resume
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Weston Clark. Cornell Engineering Computer Science Student.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
