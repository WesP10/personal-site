import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-medium">
              Weston Clark
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
              Weston Clark
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Building the future through code and innovation.
            </p>
          </div>
        </section>

        {/* Latest Work */}
        <section id="work" className="container mx-auto px-6 py-16">
          <h2 className="text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase">
            Latest Work
          </h2>

          <div className="space-y-16">
            {/* Featured Project */}
            <div className="project-card group cursor-pointer">
              <Link href="/projects/cornellconnect" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-lg mb-4 mx-auto flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold">CornellConnect</h3>
                        <p className="text-sm opacity-80">Full-Stack Social Platform</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-primary">01 | FULL-STACK DEVELOPER</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">CornellConnect</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A comprehensive social networking platform built for Cornell students. Features real-time messaging,
                      event management, and study group coordination. Built with React, Node.js, and PostgreSQL.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase">
            Selected Software Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 2 */}
            <div className="project-card group cursor-pointer">
              <Link href="/projects/dataviz-engine" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-teal-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">DataViz Engine</h4>
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
            <div className="project-card group cursor-pointer">
              <Link href="/projects/taskflow-ai" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">TaskFlow AI</h4>
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
            <div className="project-card group cursor-pointer">
              <Link href="/projects/ecotracker" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">EcoTracker</h4>
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
            <div className="project-card group cursor-pointer">
              <Link href="/projects/algoviz" className="block">
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-600 to-blue-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg mb-3 mx-auto flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 11H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9zm2-7v2H4v2h1v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8h1V6H4V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold">AlgoViz</h4>
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

        {/* About Section */}
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-sm font-medium text-muted-foreground mb-8 tracking-wider uppercase">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a Computer Science student at Cornell Engineering with a passion for building
                innovative software solutions. My interests span full-stack development, machine learning,
                and distributed systems.
              </p>
              <p>
                Currently seeking summer 2025 internship opportunities where I can contribute to
                meaningful projects and continue learning from experienced engineers. I enjoy
                tackling complex problems and translating ideas into clean, efficient code.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <footer id="contact" className="container mx-auto px-6 py-16 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div>
              <h3 className="text-2xl font-light mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                Thanks for stopping by! Here's more about me if you're interested.
              </p>
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="https://linkedin.com/in/westonclark" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/westonclark" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="mailto:wc123@cornell.edu" className="text-muted-foreground hover:text-foreground transition-colors">
                Email
              </a>
              <a href="/resume.pdf" className="text-muted-foreground hover:text-foreground transition-colors">
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
