'use client';

export default function ProfilePage() {
  const profile = {
    address: '0x1234...5678',
    tier: 'Gold',
    totalScore: 687,
    savingsScore: 720,
    skillScore: 650,
    socialScore: 690,
    achievements: ['First Circle', '10-Cycle Streak', 'Tournament Winner'],
    stats: {
      circlesJoined: 5,
      circlesCompleted: 3,
      tournamentsEntered: 12,
      tournamentsWon: 3,
      totalSaved: '5.2 CTC',
      totalWinnings: '2.8 CTC',
    }
  };

  const tierColors: Record<string, string> = {
    Bronze: 'text-orange-700',
    Silver: 'text-gray-400',
    Gold: 'text-yellow-400',
    Platinum: 'text-cyan-400',
    Diamond: 'text-blue-400',
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* SVG Background - Sky with Clouds */}
      <svg className="fixed inset-0 w-full h-full opacity-10 -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#sky)" />
        <ellipse cx="20%" cy="30%" rx="150" ry="80" fill="#FFFFFF" opacity="0.2" />
        <ellipse cx="70%" cy="50%" rx="200" ry="100" fill="#FFFFFF" opacity="0.15" />
        <ellipse cx="50%" cy="70%" rx="180" ry="90" fill="#FFFFFF" opacity="0.18" />
      </svg>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-game text-creditcoin-orange mb-12">Player Profile</h1>

        {/* Credit Score Card */}
        <div className="glass p-8 rounded-xl mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Credit Score</h2>
              <p className="text-gray-400">{profile.address}</p>
            </div>
            <div className="text-right">
              <div className={`text-5xl font-game ${tierColors[profile.tier]} mb-2`}>
                {profile.totalScore}
              </div>
              <div className={`text-xl ${tierColors[profile.tier]}`}>
                {profile.tier} Tier
              </div>
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="grid md:grid-cols-3 gap-6">
            <ScoreBar label="Savings" score={profile.savingsScore} color="bg-green-500" />
            <ScoreBar label="Skill" score={profile.skillScore} color="bg-blue-500" />
            <ScoreBar label="Social" score={profile.socialScore} color="bg-purple-500" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">ROSCA Stats</h3>
            <div className="space-y-3">
              <StatRow label="Circles Joined" value={profile.stats.circlesJoined} />
              <StatRow label="Circles Completed" value={profile.stats.circlesCompleted} />
              <StatRow label="Total Saved" value={profile.stats.totalSaved} />
            </div>
          </div>

          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Tournament Stats</h3>
            <div className="space-y-3">
              <StatRow label="Tournaments Entered" value={profile.stats.tournamentsEntered} />
              <StatRow label="Tournaments Won" value={profile.stats.tournamentsWon} />
              <StatRow label="Total Winnings" value={profile.stats.totalWinnings} />
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Achievements</h3>
          <div className="flex flex-wrap gap-3">
            {profile.achievements.map((achievement, i) => (
              <div key={i} className="bg-creditcoin-orange/20 border border-creditcoin-orange px-4 py-2 rounded-lg">
                <span className="text-sm">🏆 {achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm font-semibold">{score}/1000</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${(score / 1000) * 100}%` }}
        />
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
