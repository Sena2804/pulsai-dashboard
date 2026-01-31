"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Tickets, Zap, Activity } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import GraphicsRealTime from '@/components/dashboard/GraphicsRealTime';
import AutomaticsStats from '@/components/dashboard/AutomaticsStats';

export default function Home() {
  return (
    <div>
      <header className="mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-800 font-unbounded"
        >
          Bonjour, Admin
        </motion.h2>
        <p className="text-gray-500 text-sm">Voici l'état actuel de l'écosystème PulsAI.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Tickets" 
          value="1,284" 
          icon={Tickets} 
          trend="+12%" 
          color="bg-[#3590E3]/30" 
        />
        <StatCard 
          title="Clients Actifs" 
          value="892" 
          icon={Users} 
          trend="+5%" 
          isNegative="true"
          color="bg-[#BAF09D]/40" 
        />
        <StatCard 
          title="Réponses IA" 
          value="95%" 
          icon={Zap} 
          trend="-2%" 
          color="bg-purple-100" 
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Activity className="text-[#3590E3]" size={20} />
              <h3 className="font-bold text-gray-800">Performance des Campagnes</h3>
            </div>
            <select className="text-sm bg-gray-50 border-none rounded-lg px-3 py-2 outline-none text-gray-600 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
              <option>7 derniers jours</option>
              <option>30 derniers jours</option>
            </select>
          </div>
          <div className="w-full h-[350px]">
            <GraphicsRealTime />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <h3 className="font-bold text-gray-800 mb-6">Dernières Actions IA</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#BAF09D]" />
                <div>
                  <p className="text-sm text-gray-800 font-medium">Réponse sur la demande des détails de l'évènement #00054</p>
                  <p className="text-xs text-gray-400">Il y a {i * 5} minutes</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-semibold text-[#3590E3] bg-blue-50 cursor-pointer rounded-xl hover:bg-blue-100 transition-colors">
            Voir tout l'historique
          </button>
        </motion.div>
      </div>

      <AutomaticsStats/>
    </div>
  );
}