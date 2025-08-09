import React from 'react';
import { ExperiencePanel } from './experience-panel';

// Extended to include optional location, skills (for badges), and companyUrl
type ExperienceItem = {
  company: string;
  role: string;
  duration: string; // maps to dates
  details: string[]; // maps to bullets
  location?: string;
  skills?: string[]; // badge labels
  companyUrl?: string;
  forceDark?: boolean;
};

const experiences: ExperienceItem[] = [
  {
    company: 'Pickleball.com',
    role: 'Software Engineer',
    duration: 'Jan 2024 – Present',
    details: [
      'Developed a full-stack enterprise application using React and Next.js.',
      'Led the frontend development team: planning approaches, coding, and reviews.',
    ],
    location: 'Remote',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'AWS'],
    companyUrl: 'https://www.pickleball.com',
  },
  {
    company: 'Bosnia & Herzegovina Futures Foundation',
    role: 'Junior → Senior → Alumni',
    duration: 'Sep 2021 – Present',
    details: [
      'Mentored high school students in soft skills and career planning.',
      'Created fls.ba info site with the web team.',
    ],
    location: 'Bosnia & Herzegovina (Remote)',
    skills: ['Mentorship', 'Leadership', 'Web Dev'],
    companyUrl: 'https://bhfuturesfoundation.org/',
  },
  {
    company: 'Atlantbh',
    role: 'Junior Software Engineer',
    duration: 'Jun 2022 – Jan 2024',
    details: [
      'Built full-stack apps with React, PostgreSQL, Docker.',
      'Code reviews and team collaboration.',
      'Mentored two IT college students.',
    ],
    location: 'Sarajevo, BiH',
    skills: ['React', 'PostgreSQL', 'Docker', 'Agile'],
    companyUrl: 'https://www.atlantbh.com/',
  },
  {
    company: 'Atlantbh (Internship)',
    role: 'Full Stack Developer',
    duration: 'Feb 2022 – May 2022',
    details: [
      'Used React.js + Spring Boot for full-stack apps.',
      'GitHub, Maven, JUnit, and design patterns (MVC).',
    ],
    location: 'Sarajevo, BiH',
    skills: ['React', 'Spring Boot', 'JUnit', 'MVC'],
    companyUrl: 'https://www.atlantbh.com/',
  },
];

// Scroll progress bar component
const ScrollProgressBar: React.FC<{ targetRef: React.RefObject<HTMLElement>; }> = ({ targetRef }) => {
  const [progress, setProgress] = React.useState(0); // 0..1 position within content
  const [animating, setAnimating] = React.useState(false);
  const animTimeout = React.useRef<number | null>(null);

  const recalc = React.useCallback(() => {
    const el = targetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const sectionHeight = el.offsetHeight || 1;
    const viewportMid = window.scrollY + window.innerHeight / 2;
    let raw = (viewportMid - sectionTop) / sectionHeight; // 0 at top, 1 at bottom
    raw = Math.min(1, Math.max(0, raw));
    setProgress(prev => {
      if (Math.abs(prev - raw) > 0.005) {
        setAnimating(true);
        if (animTimeout.current) window.clearTimeout(animTimeout.current);
        animTimeout.current = window.setTimeout(() => setAnimating(false), 450);
      }
      return raw;
    });
  }, [targetRef]);

  React.useEffect(() => {
    recalc();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { recalc(); ticking = false; });
        ticking = true;
      }
    };
    const onResize = () => recalc();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // Observe size changes (panel collapse/expand)
    let ro: ResizeObserver | null = null;
    if ('ResizeObserver' in window && targetRef.current) {
      ro = new ResizeObserver(() => recalc());
      ro.observe(targetRef.current);
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (ro) ro.disconnect();
      if (animTimeout.current) window.clearTimeout(animTimeout.current);
    };
  }, [recalc, targetRef]);

  const dotOffset = progress * 100;

  return (
    <div className="relative dark w-8" aria-hidden="true" style={{ minHeight: '300px', height: '500px' }}>
      {/* Make bar fill parent height using absolute positioning */}
      <div className="absolute top-0 left-0 w-full h-full flex items-stretch">
        <div className="relative w-full flex justify-center h-full">
          {/* Base track always fills parent */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full flex justify-center">
            <div className="relative w-full h-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full overflow-visible" />
            {/* Animated gradient aura emanating from the dot when scrolling */}
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${animating ? 'opacity-100' : 'opacity-0'}`}
              style={{ ['--p' as any]: `${progress * 100}%` }}
            >
              {/* Light mode gradient */}
              <div
                className="absolute inset-0 block dark:hidden"
                style={{
                  background: 'radial-gradient(circle at 50% var(--p), rgba(59,130,246,0.9) 0%, rgba(139,92,246,0.6) 35%, rgba(236,72,153,0.4) 60%, rgba(236,72,153,0) 75%)'
                }}
              />
              {/* Dark mode gradient */}
              <div
                className="absolute inset-0 hidden dark:block"
                style={{
                  background: 'radial-gradient(circle at 50% var(--p), rgba(96,165,250,1) 0%, rgba(168,85,247,0.8) 35%, rgba(244,114,182,0.6) 60%, rgba(244,114,182,0) 78%)'
                }}
              />
            </div>
          </div>
          {/* Dot positioned relative to full track */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow ring-2 ring-white dark:ring-neutral-800 transition-transform"
            style={{ top: `calc(${dotOffset}% - 6px)` }}
          />
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const listRef = React.useRef<HTMLDivElement>(null);
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-50">Experience</h2>
      <p className="text-sm mb-6 text-neutral-600 dark:text-neutral-300">A snapshot of roles, impact, and technologies.</p>
      <div className="flex items-start gap-8">
        <aside className="hidden md:block" aria-label="Scroll progress timeline">
          <ScrollProgressBar targetRef={listRef} />
        </aside>
        <div ref={listRef} className="flex flex-col items-center flex-1">
          {experiences.map((exp, idx) => (
            <ExperiencePanel
              key={idx}
              role={exp.role}
              company={exp.company}
              location={exp.location || '—'}
              dates={exp.duration}
              bullets={exp.details}
              companyUrl={exp.companyUrl}
              forceDark={false}
              collapsible={true}
              defaultCollapsed={true}
              skills={(exp.skills || []).map(name => ({ name }))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

// To force dark mode, add className="dark" to a parent element (e.g. <body> or your main layout)