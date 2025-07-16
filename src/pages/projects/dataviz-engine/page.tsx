import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function DataVizEngineProject() {
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
              <span className="text-sm font-medium text-primary">02 | BACKEND DEVELOPER</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              DataViz Engine
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              A Python-based data visualization engine with machine learning capabilities that processes
              large datasets and generates interactive charts with intelligent insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/westonclark/dataviz-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                href="https://dataviz-engine-docs.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Documentation
              </a>
            </div>
          </div>
        </section>

        {/* Project Screenshot */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-lg aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-lg mb-6 mx-auto flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">Interactive Dashboard</h3>
                  <p className="text-lg opacity-80">ML-powered data visualization interface</p>
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
                <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Python 3.11 with FastAPI</li>
                  <li>• Pandas & NumPy for data processing</li>
                  <li>• Plotly & Matplotlib for visualization</li>
                  <li>• Scikit-learn for ML algorithms</li>
                  <li>• Apache Kafka for data streaming</li>
                  <li>• Redis for caching</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Docker containerization</li>
                  <li>• Kubernetes orchestration</li>
                  <li>• Apache Spark for big data</li>
                  <li>• MinIO for object storage</li>
                  <li>• Prometheus monitoring</li>
                  <li>• Grafana dashboards</li>
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Automated pattern detection and anomaly identification using unsupervised learning algorithms.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Stream processing capabilities handling 10K+ events per second with sub-second latency.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Interactive Charts</h3>
                <p className="text-sm text-muted-foreground">
                  Dynamic visualizations with zoom, filter, and drill-down capabilities using D3.js integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture & Performance */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Architecture & Performance</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Microservices Architecture</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The engine follows a microservices pattern with separate services for data ingestion,
                  processing, ML inference, and visualization generation. Each service is containerized
                  and can scale independently based on workload demands.
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Data Pipeline:</strong> Implements ETL processes using Apache Airflow for
                    orchestration, with data quality checks and automated retry mechanisms. Supports
                    multiple data sources including CSV, JSON, Parquet, and real-time streams.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Performance Optimizations</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Distributed Computing</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilizes Apache Spark for parallel processing of large datasets (100GB+),
                      with automatic partitioning and optimized join strategies reducing processing
                      time by 75%.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold mb-2">Intelligent Caching</h4>
                    <p className="text-sm text-muted-foreground">
                      Multi-level caching strategy using Redis for frequently accessed data and
                      computation results, with cache invalidation based on data freshness and usage patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Machine Learning Features */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-8">Machine Learning Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Anomaly Detection</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Implements Isolation Forest and One-Class SVM algorithms to automatically detect
                  outliers in time series data with 95%+ accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Isolation Forest</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">One-Class SVM</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">LOF</span>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Time series forecasting using LSTM networks and ARIMA models, providing
                  trend predictions with confidence intervals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">LSTM</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">ARIMA</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Prophet</span>
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
                href="/projects/cornellconnect"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: CornellConnect
              </Link>
              <Link
                href="/projects/taskflow-ai"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Next: TaskFlow AI
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
