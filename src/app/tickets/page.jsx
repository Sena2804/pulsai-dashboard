"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Inbox, Filter, ChevronDown, CheckCircle2 } from 'lucide-react';
import StatBar from '@/components/ia/StatBar';
import TicketRow from '@/components/tickets/TicketRow';

export default function TicketsPage() {
  const tickets = [
    { id: 'TK-102', subject: "Erreur lors du paiement Stripe", user: "Jean Dupont", priority: "Haute", category: "Facturation", time: "Il y a 12m" },
    { id: 'TK-105', subject: "Demande d'exportation de données CSV", user: "Marie Curie", priority: "Moyenne", category: "Technique", time: "Il y a 45m" },
    { id: 'TK-108', subject: "Bug affichage sur mobile (Safari)", user: "Marc Lévy", priority: "Basse", category: "Interface", time: "Il y a 2h" },
  ];

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-800 font-unbounded"
        >
          Gestion des Tickets
        </motion.h2>
        <p className="text-gray-500 text-sm">Centralisez les demandes et les problèmes des clients par rapport aux tickets</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="space-y-6">
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xs font-black text-gray-400 uppercase mb-4 flex items-center gap-2 tracking-widest">
              <Filter size={14} /> Filtres
            </h3>
            <div className="space-y-2">
              {['Tous les tickets', 'Assignés à moi', 'Urgents', 'En attente'].map((f, i) => (
                <div key={i} className={`p-3 rounded-xl text-sm font-bold cursor-pointer transition-colors ${i === 0 ? 'bg-blue-50 text-pulsai-blue' : 'text-gray-500 hover:bg-gray-50'}`}>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xs font-black text-gray-400 uppercase mb-4 tracking-widest">Charge Équipe</h3>
            <StatBar label="Capacité actuelle" value={68} color="#3590E3" />
            <div className="mt-4">
               <p className="text-[10px] text-gray-400 italic font-medium leading-relaxed">
                 L'IA traite actuellement 85% des demandes simples.
               </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50/30 flex justify-between items-center text-xs font-bold text-gray-400">
              <div className="flex items-center gap-4">
                <Inbox size={16} />
                <span>3 Tickets ouverts</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
                Trier par : Plus récents <ChevronDown size={14} />
              </div>
            </div>
            
            <div className="flex flex-col">
              {tickets.map((t) => (
                <TicketRow key={t.id} ticket={t} />
              ))}
            </div>

            <div className="p-4 bg-gray-50/50 text-center">
              <button className="text-xs font-bold text-gray-400 hover:text-pulsai-blue transition-colors">
                Charger les tickets archivés
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}