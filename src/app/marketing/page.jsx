"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, TrendingUp, Megaphone, History } from 'lucide-react';
import CampaignTask from '@/components/campaingns/CampaignTask';

export default function MarketingPage() {
  const tasks = [
    {
      id: 1,
      type: "Publication",
      channel: "Instagram",
      title: "Annonce Line-up Officiel",
      content: "Découvrez les artistes qui feront vibrer la plage de Fidjrossè cette année...",
      schedule: "Demain à 18:00",
      audience: "Tous les abonnés",
      date: "2026-01-20T00:00:00",
    },
    {
      id: 2,
      type: "Relance",
      channel: "WhatsApp",
      title: "Relance Panier Inachevé",
      content: "Salut ! On a remarqué que tu n'as pas terminé ton achat. Besoin d'aide ?",
      schedule: "Automatique (H+2)",
      audience: "14 prospects",
      date: "2026-01-20T10:00:00",
    },
    {
      id: 3,
      type: "Diffusion",
      channel: "Facebook",
      title: "Alerte Billets VIP",
      content: "Dernières 50 places disponibles pour le carré Gold ! Ne ratez pas l'occasion.",
      schedule: "Envoyé ce matin",
      audience: "2.5k contacts",
      date: "2026-02-05T18:00:00",
    }
  ];

  const now = new Date();
  const upcomingTasks = tasks.filter(task => new Date(task.date) >= now);
  const pastTasks = tasks.filter(task => new Date(task.date) < now);

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-800 font-unbounded"
          >
            Automatisations Marketing
          </motion.h2>
          <p className="text-gray-500 text-sm">Créez des scénarios qui vendent pendant que vous dormez.</p>
        </div>

        <button className="bg-[#3590E3] cursor-pointer text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-100 hover:scale-105 transition-all">
          <Plus size={18} /> Nouvelle Action
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-[32px] text-black relative overflow-hidden shadow-xl shadow-blue-100">
          <TrendingUp className="absolute right-[-10px] bottom-[-10px] w-32 h-32 opacity-10" />
          <p className="text-xs font-bold uppercase opacity-80 mb-1">Revenu Total Généré</p>
          <h4 className="text-3xl font-black font-unbounded">+900.000 FCFA</h4>
          <p className="text-[11px] mt-4 flex items-center gap-1 font-bold bg-white/20 w-fit px-2 py-1 rounded-full">
            +15% ce mois-ci
          </p>
        </div>
        <div className="bg-white p-6 rounded-[32px] border border-gray-100 flex flex-col justify-center shadow-xl shadow-blue-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Taux de conversion moyen</p>
          <h4 className="text-3xl font-black text-gray-800">24.8%</h4>
        </div>
        <div className="bg-white p-6 rounded-[32px] border border-gray-100 flex flex-col justify-center shadow-xl shadow-blue-100 shadow-sm">
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Messages envoyés</p>
          <h4 className="text-3xl font-black text-gray-800">18.2k</h4>
        </div>
      </div>

      <section className="space-y-6">
            <div className="flex items-center gap-2 px-2 mt-15 mb-10">
                <Megaphone size={18} className="text-[#3590E3]" />
                <h3 className="text-sm font-black text-gray-600 uppercase tracking-[3px]">Actions de campagnes marketing</h3>
            </div>

            {upcomingTasks.length > 0 && (
                <section className="space-y-6 ml-5">
                    <div className="flex items-center gap-2 px-2 border-l-4 border-[#3590E3] ml-2">
                        <h3 className="text-sm font-black text-gray-700 uppercase tracking-[3px]">Programmées</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingTasks.map(task => (
                        <CampaignTask key={task.id} task={task} isPast={false} />
                        ))}
                    </div>
                </section>
            )}

            {pastTasks.length > 0 && (
                <section className="space-y-6 ml-5">
                    <div className="flex items-center gap-2 px-2 border-l-4 border-gray-300 ml-2">
                        <History size={18} className="text-gray-400" />
                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-[3px]">Passées</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pastTasks.map(task => (
                        <CampaignTask key={task.id} task={task} isPast={true} />
                        ))}
                    </div>
                </section>
            )}
      </section>
    </div>
  );
}