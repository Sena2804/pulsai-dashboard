"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const AutomaticsStats = () => {
  const campagnes = [
    { name: "Relance Panier Abandonné", type: "Email & WhatsApp", reach: "85%", color: "#358fe3a1" },
    { name: "Accueil De Nouveaux Clients", type: "WhatsApp & Site Web", reach: "92%", color: "#BAF09D" },
    { name: "Promotion Saint-Valentin", type: "Tous les canaux", reach: "45%", color: "#a561e6a2" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-8 bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Zap className="text-[#BAF09D]" size={20} />
          <h3 className="font-bold text-gray-800">Automatisations Actives</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campagnes.map((campagne, idx) => (
          <div key={idx} className="p-4 rounded-2xl border border-gray-50 bg-gray-50/50 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-bold text-gray-800 mb-2">{campagne.name}</p>
                <p className="text-xs text-gray-500 mb-2">{campagne.type}</p>
              </div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: campagne.reach }}
                transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                className="h-full"
                style={{ backgroundColor: campagne.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AutomaticsStats;