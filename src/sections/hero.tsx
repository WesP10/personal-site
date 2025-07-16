import React from 'react';

interface HeroProps {
  iconDrift: { x: number; y: number }[];
  repulseArr: { x: number; y: number }[];
}

const Hero: React.FC<HeroProps> = ({ iconDrift, repulseArr }) => {
  return (
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
  );
}

export default Hero;