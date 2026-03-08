'use client';

import { useState } from 'react';

export default function CirclesPage() {
  const [circles] = useState([
    { id: 1, creator: '0x1234...5678', contribution: '0.1 CTC', members: 8, maxMembers: 12, cycle: 3, state: 'Active' },
    { id: 2, creator: '0xabcd...ef01', contribution: '0.5 CTC', members: 4, maxMembers: 8, cycle: 1, state: 'Active' },
    { id: 3, creator: '0x9876...5432', contribution: '1.0 CTC', members: 12, maxMembers: 12, cycle: 7, state: 'InProgress' },
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* SVG Background - Autumn Forest */}
      <svg className="fixed inset-0 w-full h-full opacity-10 -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="forest" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="50%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#2F4F2F" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#forest)" />
        <ellipse cx="20%" cy="80%" rx="100" ry="150" fill="#8B4513" opacity="0.3" />
        <ellipse cx="80%" cy="75%" rx="120" ry="180" fill="#8B4513" opacity="0.3" />
        <circle cx="50%" cy="90%" r="200" fill="#2F4F2F" opacity="0.4" />
      </svg>

      <div className="flex justify-between items-center mb-12">
        <h1 className="text-5xl font-game text-creditcoin-orange">Savings Circles</h1>
        <a href="/circles/create" className="btn-primary">Create Circle</a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {circles.map((circle) => (
          <CircleCard key={circle.id} circle={circle} />
        ))}
      </div>
    </div>
  );
}

function CircleCard({ circle }: { circle: any }) {
  const progress = (circle.members / circle.maxMembers) * 100;

  return (
    <div className="glass p-6 rounded-xl hover:bg-white/10 transition cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Circle #{circle.id}</h3>
          <p className="text-sm text-gray-400">{circle.creator}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs ${
          circle.state === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {circle.state}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Contribution</span>
          <span className="font-semibold text-creditcoin-orange">{circle.contribution}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Members</span>
          <span className="font-semibold">{circle.members}/{circle.maxMembers}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Current Cycle</span>
          <span className="font-semibold">{circle.cycle}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-creditcoin-orange transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">{progress.toFixed(0)}% filled</p>
      </div>

      <button className="w-full btn-primary">Join Circle</button>
    </div>
  );
}
