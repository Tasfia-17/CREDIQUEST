export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with SVG Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="autumn" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#FF8C42" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#autumn)" />
          <circle cx="10%" cy="20%" r="150" fill="#FFB347" opacity="0.3" />
          <circle cx="90%" cy="80%" r="200" fill="#FF6B00" opacity="0.2" />
          <path d="M0,400 Q400,300 800,400 T1600,400" stroke="#FF6B00" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-game text-creditcoin-orange mb-6">
            CrediQuest
          </h1>
          <p className="text-2xl md:text-3xl mb-8">Play. Save. Build Credit.</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Join gamified savings circles, compete in skill-based tournaments, and build your on-chain credit score
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/circles" className="btn-primary">Browse Circles</a>
            <a href="/tournaments" className="btn-secondary">Enter Tournament</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-game text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Join Circles"
              description="Create or join rotating savings circles with friends. Contribute regularly and take turns receiving pooled funds."
              icon="💰"
            />
            <FeatureCard
              title="Play Tournaments"
              description="Compete in skill-based minigames. Winners take prize pools and boost their credit scores."
              icon="🎮"
            />
            <FeatureCard
              title="Build Credit"
              description="Your on-chain reputation grows with every contribution and victory, unlocking real DeFi opportunities."
              icon="📈"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 glass">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard label="Active Circles" value="127" />
            <StatCard label="Total Saved" value="$45K" />
            <StatCard label="Tournaments" value="89" />
            <StatCard label="Players" value="1.2K" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="glass p-8 rounded-xl hover:bg-white/10 transition">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-5xl font-game text-creditcoin-orange mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}
