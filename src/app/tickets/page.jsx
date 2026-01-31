"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TicketCard from '@/components/tickets/TicketCard';
import TicketModal from '@/components/tickets/TicketModal';
import PurchaseIssues from '@/components/tickets/PurchaseIssues';

export default function BilletteriePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    name: "Summer Festival Cotonou",
    location: "Plage de Fidjrossè",
    date: "15 Août 2026",
    time: "18:00 - 06:00",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop",
    tickets: [
      { type: "Standard", sold: 1200, total: 2000, price: 10 },
      { type: "Premium", sold: 280, total: 300, price: 50 },
      { type: "VIP", sold: 15, total: 20, price: 250 },
    ]
  };

  const issues = [
    { id: "ERR-01", message: "Échec de paiement (Solde insuffisant) - Client #94", time: "À l'instant" },
    { id: "ERR-02", message: "QR Code non généré après achat - Client #102", time: "Il y a 10m" },
    { id: "ERR-03", message: "QR Code non généré après achat - Client #102", time: "Il y a 10m" },
  ];

  return (
    <div className="space-y-8">
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <TicketCard event={eventData} onOpenDetails={() => setIsModalOpen(true)} />
        <TicketCard event={eventData} onOpenDetails={() => setIsModalOpen(true)} />
        <TicketCard event={eventData} onOpenDetails={() => setIsModalOpen(true)} />
        <TicketCard event={eventData} onOpenDetails={() => setIsModalOpen(true)} />
        <TicketCard event={eventData} onOpenDetails={() => setIsModalOpen(true)} />
        <TicketCard event={eventData} onOpenDetails={() => setIsModalOpen(true)} />

        <TicketModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          event={eventData} 
        />
      </div>

      <section>
        <PurchaseIssues issues={issues} />
      </section>
    </div>
  );
}