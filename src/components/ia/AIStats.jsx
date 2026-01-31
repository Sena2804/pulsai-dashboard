"use client";
import React from 'react';
import { Zap, Target } from 'lucide-react';
import StatBar from './StatBar';

export default function AIStats() {
  return (
    <aside className="lg:col-span-3 space-y-6">
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase text-xs tracking-widest">
          <Target size={16} className="text-[#3590E3]" /> Performance
        </h3>
        <div className="space-y-6">
          <StatBar label="Précision NLU" value={94} color="#3590E3" />
          <StatBar label="Résolution Auto" value={82} color="#BAF09D" />
        </div>
      </div>
      
      <div className="bg-[#1F2937] text-white p-6 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden group">
        <Zap size={24} className="text-[#BAF09D] mb-4 group-hover:rotate-12 transition-transform" />
        <h4 className="text-sm font-bold mb-2">IA Insight</h4>
        <p className="text-xs text-gray-400 leading-relaxed italic">
          "Beaucoup de clients sont mécontents des services proposés..."
        </p>
      </div>
    </aside>
  );
}