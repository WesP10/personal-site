import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function CornellConnectProject() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-medium">
              Weston Clark
            </Link>
            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-sm font-medium text-primary">01 | FULL-STACK DEVELOPER</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              CornellConnect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              A comprehensive social networking platform built for Cornell students with real-time messaging,
              event management, and study group coordination.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/westonclark/cornellconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                href="https://cornellconnect-demo.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </section>

        {/* Project Screenshot */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-lg mb-6 mx-auto flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">CornellConnect Dashboard</h3>
                  <p className="text-lg opacity-80">Real-time social platform interface</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Technical Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React 18 with TypeScript</li>
                  <li>• Next.js 14 for SSR and routing</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Socket.io-client for real-time features</li>
                  <li>• React Query for state management</li>
                  <li>• Framer Motion for animations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node.js with Express.js</li>
                  <li>• PostgreSQL database</li>
                  <li>• Prisma ORM</li>
                  <li>• Socket.io for real-time communication</li>
                  <li>• JWT authentication</li>
                  <li>• AWS S3 for file storage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Messaging</h3>
                <p className="text-sm text-muted-foreground">
                  Instant messaging with typing indicators, read receipts, and emoji reactions using Socket.io.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Event Management</h3>
                <p className="text-sm text-muted-foreground">
                  Create, manage, and RSVP to campus events with calendar integration and notification system.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4H4zM1 14h2v4H1v-4zM8 14h2v4H8v-4zM11 14h2v4h-2v-4zM14 14h2v4h-2v-4zM17 14h2v4h-2v-4zM20 14h2v4h-2v-4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Study Groups</h3>
                <p className="text-sm text-muted-foreground">
                  Form study groups by course, schedule sessions, and share resources with collaborative tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Challenges */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Architecture & Challenges</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CornellConnect follows a modern microservices architecture with a React frontend, Node.js backend,
                  and PostgreSQL database. The application uses Socket.io for real-time features and implements
                  a RESTful API design with JWT-based authentication.
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Database Design:</strong> Implemented a normalized PostgreSQL schema with optimized
                    indexing for user relationships, message threading, and event queries. Used Prisma ORM for
                    type-safe database operations and automated migrations.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Challenges</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Real-time Scalability</h4>
                    <p className="text-sm text-muted-foreground">
                      Challenge: Managing Socket.io connections for 1000+ concurrent users.
                      <br />
                      Solution: Implemented Redis adapter for horizontal scaling and connection pooling
                      with room-based message broadcasting.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Challenge: Loading large message histories and event feeds efficiently.
                      <br />
                      Solution: Implemented infinite scrolling with React Query, message pagination,
                      and aggressive caching strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href="/projects/algoviz"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: AlgoViz
              </Link>
              <Link
                href="/projects/dataviz-engine"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Next: DataViz Engine
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
