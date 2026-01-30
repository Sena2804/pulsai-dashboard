"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target } from 'lucide-react';

export default function AIStats() {
  return (
    <aside className="lg:col-span-3 space-y-6">
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase text-xs tracking-widest">
          <Target size={16} className="text-[#3590E3]" /> Performance
        </h3>
        <div className="space-y-6">
          <StatProgress label="Précision NLU" value={94} color="#3590E3" />
          <StatProgress label="Résolution Auto" value={82} color="#BAF09D" />
        </div>
      </div>
      
      <div className="bg-[#1F2937] text-white p-6 rounded-3xl shadow-xl border border-gray-800 relative overflow-hidden group">
        <Zap size={24} className="text-[#BAF09D] mb-4 group-hover:rotate-12 transition-transform" />
        <h4 className="text-sm font-bold mb-2">IA Insight</h4>
        <p className="text-xs text-gray-400 leading-relaxed italic">
          "Le volume de messages sur 'Livraison' est anormalement élevé (+15%). Suggérer une réponse groupée ?"
        </p>
      </div>
    </aside>
  );
}

function StatProgress({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] font-bold mb-2 text-gray-500">
        <span>{label}</span>
        <span style={{ color }}>{value}%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className="h-full rounded-full shadow-sm"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}