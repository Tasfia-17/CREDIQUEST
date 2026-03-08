'use client';

import { useState } from 'react';

export default function TournamentsPage() {
  const [tournaments] = useState([
    { id: 1, name: 'Credit Dash Championship', entryFee: '0.05 CTC', players: 16, maxPlayers: 32, prize: '1.5 CTC', startTime: '2h', gameType: 'Reaction' },
    { id: 2, name: 'Memory Masters', entryFee: '0.1 CTC', players: 8, maxPlayers: 16, prize: '1.2 CTC', startTime: '30m', gameType: 'Memory' },
    { id: 3, name: 'Market Maker Pro', entryFee: '0.2 CTC', players: 4, maxPlayers: 8, prize: '1.4 CTC', startTime: '1h', gameType: 'Strategy' },
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* SVG Background - Ocean Waves */}
      <svg className="fixed inset-0 w-full h-full opacity-10 -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ocean" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ocean)" />
        <path d="M0,300 Q200,250 400,300 T800,300 T1200,300 T1600,300" stroke="#3B82F6" strokeWidth="3" fill="none" opacity="0.3" />
        <path d="M0,400 Q250,350 500,400 T1000,400 T1500,400" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.4" />
        <circle cx="85%" cy="15%" r="80" fill="#FBBF24" opacity="0.3" />
      </svg>

      <div className="mb-12">
        <h1 className="text-5xl font-game text-creditcoin-orange mb-4">Tournaments</h1>
        <p className="text-gray-300">Compete in skill-based games. Winners take prize pools and boost credit scores.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}

function TournamentCard({ tournament }: { tournament: any }) {
  const gameTypeColors: Record<string, string> = {
    Reaction: 'bg-red-500/20 text-red-400',
    Memory: 'bg-blue-500/20 text-blue-400',
    Strategy: 'bg-purple-500/20 text-purple-400',
  };

  return (
    <div className="glass p-6 rounded-xl hover:bg-white/10 transition">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{tournament.name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs ${gameTypeColors[tournament.gameType]}`}>
          {tournament.gameType}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Entry Fee</span>
          <span className="font-semibold text-creditcoin-orange">{tournament.entryFee}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Prize Pool</span>
          <span className="font-semibold text-green-400">{tournament.prize}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Players</span>
          <span className="font-semibold">{tournament.players}/{tournament.maxPlayers}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Starts In</span>
          <span className="font-semibold">{tournament.startTime}</span>
        </div>
      </div>

      {/* Bracket Preview */}
      <div className="mb-4 p-3 bg-black/30 rounded-lg">
        <div className="text-xs text-gray-400 mb-2">Bracket Preview</div>
        <div className="flex justify-between items-center">
          <div className="text-xs">Round 1</div>
          <div className="text-xs">→</div>
          <div className="text-xs">Finals</div>
          <div className="text-xs">→</div>
          <div className="text-xs">🏆</div>
        </div>
      </div>

      <button className="w-full btn-primary">Enter Tournament</button>
    </div>
  );
}
