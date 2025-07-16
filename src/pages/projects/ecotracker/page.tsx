import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function EcoTrackerProject() {
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
              <span className="text-sm font-medium text-primary">04 | MOBILE DEVELOPER</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              EcoTracker
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              A React Native app that tracks personal carbon footprint with gamification elements
              to encourage sustainable behavior and environmental awareness.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/westonclark/ecotracker-mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                href="https://apps.apple.com/app/ecotracker-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                App Store
              </a>
            </div>
          </div>
        </section>

        {/* Project Screenshot */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-lg mb-6 mx-auto flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">Mobile Interface</h3>
                  <p className="text-lg opacity-80">Gamified carbon tracking experience</p>
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
                <h3 className="text-xl font-semibold mb-4">Mobile Stack</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React Native 0.73</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Expo SDK for development</li>
                  <li>• React Navigation 6</li>
                  <li>• React Query for state management</li>
                  <li>• React Native Reanimated</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend & Services</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Node.js with Express</li>
                  <li>• MongoDB with Mongoose</li>
                  <li>• Firebase for authentication</li>
                  <li>• Carbon emission APIs</li>
                  <li>• Push notifications</li>
                  <li>• Analytics with Mixpanel</li>
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
                <div className="w-12 h-12 bg-green-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Carbon Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Automatic tracking of transportation, energy usage, and consumption with real-time carbon calculations.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Gamification</h3>
                <p className="text-sm text-muted-foreground">
                  Achievement system, leaderboards, and challenges to motivate sustainable behavior changes.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                    <circle cx="8.5" cy="7" r="4"/>
                    <path d="m17 11 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Social features for sharing progress, joining challenges, and learning from eco-friendly community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Development */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Mobile Development Highlights</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Cross-Platform Architecture</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built with React Native to support both iOS and Android platforms from a single codebase.
                  Utilized platform-specific optimizations while maintaining 95% code sharing between platforms.
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Performance:</strong> Optimized bundle size using Metro bundler, implemented
                    lazy loading for screens, and used React Native's Hermes JavaScript engine for
                    faster startup times and reduced memory usage.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Real-time Data Integration</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Location Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Integrated GPS tracking with privacy-first approach, using background location
                      services to automatically detect transportation methods and calculate emissions.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">API Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Connected to multiple carbon emission databases and real-time energy grid data
                      to provide accurate footprint calculations based on geographic location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gamification System */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Gamification & User Engagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Achievement System</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Progressive achievement system with 50+ badges for various eco-friendly actions.
                  Includes daily streaks, milestone rewards, and seasonal challenges.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-600/10 text-green-600 px-2 py-1 rounded text-xs">Eco Warrior</span>
                  <span className="bg-blue-600/10 text-blue-600 px-2 py-1 rounded text-xs">Green Streak</span>
                  <span className="bg-purple-600/10 text-purple-600 px-2 py-1 rounded text-xs">Carbon Saver</span>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Social Competition</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Friend leaderboards, team challenges, and global rankings to foster healthy
                  competition around sustainable practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-600/10 text-orange-600 px-2 py-1 rounded text-xs">Leaderboards</span>
                  <span className="bg-pink-600/10 text-pink-600 px-2 py-1 rounded text-xs">Team Challenges</span>
                  <span className="bg-indigo-600/10 text-indigo-600 px-2 py-1 rounded text-xs">Global Ranks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Technical Challenges</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Battery Optimization</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Challenge:</strong> Continuous location tracking and data sync while minimizing battery drain.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Implemented intelligent tracking intervals, background task optimization,
                  and selective GPS usage based on movement patterns, reducing battery usage by 60%.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Offline Functionality</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Challenge:</strong> Ensuring app functionality without internet connectivity for tracking.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Implemented local SQLite storage with sync queue, offline-first architecture,
                  and background synchronization when connectivity returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Carbon Reduction</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.7★</div>
                <div className="text-sm text-muted-foreground">App Store Rating</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">User Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href="/projects/taskflow-ai"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: TaskFlow AI
              </Link>
              <Link
                href="/projects/algoviz"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Next: AlgoViz
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
