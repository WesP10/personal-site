import '@/styles/RadialWave.css';

export default function About() {
  return (
    <section className="min-h-screen flex items-center bg-background text-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-3xl">
        {/* Left Column: Short Bio */}
        <div className="flex-1 text-center md:text-left md:max-w-md">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm Weston, a passionate software developer with a love for creating
            innovative solutions and learning new technologies. Currently enrolled at
            Cornell University as a computer science student. Welcome to my personal site!
          </p>

          {/* Rectangular Icons */}
          <div className="flex space-x-4">
            <a
              href="mailto:weston@example.com"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Column: Headshot with Radial Effect */}
        <div className="relative flex justify-center items-center">
          {/* Wrapper for Circular Effect */}
          <div className="relative w-64 h-64 flex-shrink-0">
            {/* Animated SVG ring */}
            <svg
              className="absolute animate-spin-slow"
              width="256"
              height="256"
              viewBox="0 0 256 256"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <defs>
                <radialGradient id="waveGradient" r="80%" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#00f" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#00f" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="8"
                strokeDasharray="10 10"
              />
            </svg>

            {/* Circular Image */}
            <img
              src="../res/headshot.PNG"
              alt="Headshot"
              className="absolute w-32 h-32 rounded-full object-cover shadow-lg border-2 border-grey z-10"
              loading="lazy"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Orbiting Language Elements */}
            {['JavaScript', 'TypeScript', 'Python', 'C++', 'Java'].map((language, index) => (
              <div
                key={index}
                className="absolute text-sm font-medium bg-white text-black px-2 py-1 rounded-full shadow-md"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${index * 72}deg) translate(120px) rotate(-${index * 72}deg)`,
                }}
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}