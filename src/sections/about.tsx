import React from 'react';

interface AboutProps {
  maskStyle?: (id: string) => React.CSSProperties;
}

const About: React.FC<AboutProps> = ({ maskStyle }) => {
  return (
    <section id="about" className="container mx-auto px-6 py-16">
      <div className="max-w-3xl ml-auto text-right">
        <h2 className="text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase text-left animate-slide-up">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-left text-muted-foreground">
          <p className="relative" id="about-text-1">
            <span className="text-muted-foreground">
              I'm a Computer Science student at Cornell Engineering with a passion for building
              innovative software solutions. My interests span full-stack development, machine learning,
              and distributed systems.
            </span>
            <span 
              className="absolute inset-0 text-primary pointer-events-none"
              style={maskStyle ? maskStyle('about-text-1') : undefined}
            >
              I'm a Computer Science student at Cornell Engineering with a passion for building
              innovative software solutions. My interests span full-stack development, machine learning,
              and distributed systems.
            </span>
          </p>
          <p className="relative" id="about-text-2">
            <span className="text-muted-foreground">
              Currently seeking summer 2025 internship opportunities where I can contribute to
              meaningful projects and continue learning from experienced engineers. I enjoy
              tackling complex problems and translating ideas into clean, efficient code.
            </span>
            <span 
              className="absolute inset-0 text-primary pointer-events-none"
              style={maskStyle ? maskStyle('about-text-2') : undefined}
            >
              Currently seeking summer 2025 internship opportunities where I can contribute to
              meaningful projects and continue learning from experienced engineers. I enjoy
              tackling complex problems and translating ideas into clean, efficient code.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;