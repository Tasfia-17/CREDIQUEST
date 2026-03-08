'use client';

import { useState } from 'react';

export default function CreateCirclePage() {
  const [formData, setFormData] = useState({
    contributionAmount: '',
    cycleDuration: '7',
    maxMembers: '8',
    payoutMode: '0'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating circle:', formData);
    // TODO: Call smart contract
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* SVG Background - River */}
      <svg className="fixed inset-0 w-full h-full opacity-10 -z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="river" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#river)" />
        <path d="M0,200 Q400,150 800,200 T1600,200" stroke="#06B6D4" strokeWidth="50" fill="none" opacity="0.3" />
        <path d="M0,400 Q300,350 600,400 T1200,400" stroke="#14B8A6" strokeWidth="40" fill="none" opacity="0.2" />
      </svg>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-game text-creditcoin-orange mb-8">Create Circle</h1>
        
        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Contribution Amount (CTC)</label>
            <input
              type="number"
              step="0.01"
              value={formData.contributionAmount}
              onChange={(e) => setFormData({ ...formData, contributionAmount: e.target.value })}
              className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 focus:border-creditcoin-orange focus:outline-none"
              placeholder="0.1"
              required
            />
            <p className="text-xs text-gray-400 mt-1">Amount each member contributes per cycle</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Cycle Duration (days)</label>
            <select
              value={formData.cycleDuration}
              onChange={(e) => setFormData({ ...formData, cycleDuration: e.target.value })}
              className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 focus:border-creditcoin-orange focus:outline-none"
            >
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Maximum Members</label>
            <select
              value={formData.maxMembers}
              onChange={(e) => setFormData({ ...formData, maxMembers: e.target.value })}
              className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 focus:border-creditcoin-orange focus:outline-none"
            >
              <option value="4">4 members</option>
              <option value="6">6 members</option>
              <option value="8">8 members</option>
              <option value="10">10 members</option>
              <option value="12">12 members</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Payout Mode</label>
            <select
              value={formData.payoutMode}
              onChange={(e) => setFormData({ ...formData, payoutMode: e.target.value })}
              className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 focus:border-creditcoin-orange focus:outline-none"
            >
              <option value="0">Rotation (First-come, first-served)</option>
              <option value="1">Auction (Highest bidder)</option>
              <option value="2">Lottery (Random selection)</option>
              <option value="3">Credit Score (Highest score wins)</option>
            </select>
          </div>

          <div className="glass p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
            <h4 className="font-semibold mb-2">📊 Circle Summary</h4>
            <div className="space-y-1 text-sm">
              <p>Total Pool per Cycle: <span className="text-creditcoin-orange font-semibold">
                {formData.contributionAmount && formData.maxMembers 
                  ? `${(parseFloat(formData.contributionAmount) * parseInt(formData.maxMembers)).toFixed(2)} CTC`
                  : '0 CTC'}
              </span></p>
              <p>Total Cycles: <span className="font-semibold">{formData.maxMembers}</span></p>
              <p>Duration: <span className="font-semibold">
                {formData.cycleDuration && formData.maxMembers
                  ? `${parseInt(formData.cycleDuration) * parseInt(formData.maxMembers)} days`
                  : '0 days'}
              </span></p>
            </div>
          </div>

          <button type="submit" className="w-full btn-primary py-4 text-lg">
            Create Circle
          </button>
        </form>
      </div>
    </div>
  );
}
