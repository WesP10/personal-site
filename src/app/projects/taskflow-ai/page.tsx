import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function TaskFlowAIProject() {
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
              <span className="text-sm font-medium text-primary">03 | AI DEVELOPER</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              TaskFlow AI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              An intelligent task management system using natural language processing to automatically
              categorize, prioritize, and suggest optimal workflows for enhanced productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/westonclark/taskflow-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                href="https://taskflow-ai-demo.netlify.app"
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
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-lg mb-6 mx-auto flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">AI-Powered Interface</h3>
                  <p className="text-lg opacity-80">Smart task categorization and prioritization</p>
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
                <h3 className="text-xl font-semibold mb-4">AI & ML Stack</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• OpenAI GPT-4 API integration</li>
                  <li>• Hugging Face Transformers</li>
                  <li>• spaCy for NLP preprocessing</li>
                  <li>• scikit-learn for classification</li>
                  <li>• LangChain for prompt engineering</li>
                  <li>• Vector embeddings with Pinecone</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Application Stack</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React 18 with TypeScript</li>
                  <li>• Next.js 14 for full-stack</li>
                  <li>• tRPC for type-safe APIs</li>
                  <li>• Prisma with PostgreSQL</li>
                  <li>• NextAuth.js authentication</li>
                  <li>• Vercel deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">AI-Powered Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Categorization</h3>
                <p className="text-sm text-muted-foreground">
                  Natural language understanding to automatically categorize tasks by project, urgency, and context.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Dynamic Prioritization</h3>
                <p className="text-sm text-muted-foreground">
                  ML algorithms analyze deadlines, dependencies, and importance to suggest optimal task ordering.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Workflow Suggestions</h3>
                <p className="text-sm text-muted-foreground">
                  AI-generated recommendations for task sequences and time blocking based on productivity patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Implementation */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">AI Implementation Details</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Natural Language Processing Pipeline</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TaskFlow AI uses a multi-stage NLP pipeline to understand task descriptions, extract key entities,
                  and determine context. The system employs named entity recognition (NER) to identify deadlines,
                  project names, and priority indicators from natural language input.
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Processing Steps:</strong> Text preprocessing → Tokenization → Entity recognition →
                    Sentiment analysis → Category prediction → Priority scoring → Workflow generation
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Machine Learning Models</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Classification Model</h4>
                    <p className="text-sm text-muted-foreground">
                      Fine-tuned BERT model for task categorization with 94% accuracy across 15 categories.
                      Trained on 50K+ labeled task descriptions with active learning for continuous improvement.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Priority Prediction</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensemble model combining gradient boosting and neural networks to predict task urgency
                      based on deadline proximity, dependencies, and historical completion patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Performance & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <div className="text-sm text-muted-foreground">Classification Accuracy</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Productivity Increase</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">200ms</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
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
                <h3 className="text-lg font-semibold mb-3">Context Understanding</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Challenge:</strong> Understanding ambiguous task descriptions and maintaining context across conversations.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Implemented conversation memory using vector embeddings and context windows,
                  allowing the AI to reference previous tasks and maintain user-specific understanding.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Real-time Performance</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>Challenge:</strong> Providing instant AI responses while processing complex NLP operations.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Solution:</strong> Implemented model caching, prediction precomputation, and optimized inference
                  pipelines reducing response time from 2s to 200ms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link
                href="/projects/dataviz-engine"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: DataViz Engine
              </Link>
              <Link
                href="/projects/ecotracker"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Next: EcoTracker
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
