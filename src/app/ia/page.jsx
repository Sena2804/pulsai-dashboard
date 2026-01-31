"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChatWindow from '@/components/ia/ChatWindow';
import AIStats from '@/components/ia/AIStats';
import ConversationList from '@/components/ia/ConversationLists';

export default function IAConsultation() {
  const [activeId, setActiveId] = useState('#8294');
  const [data, setData] = useState({
    '#8294': {
      customer: 'Client #8294',
      minutes: '2m',
      messages: [
        { role: 'user', content: 'Bonjour, je voudrais savoir si ma commande #450 arrive bientôt ?' },
        { role: 'ai', content: 'Bonjour ! J\'ai vérifié votre commande #450. Elle est actuellement en transit.', confidence: 98 }
      ]
    },
    '#8291': {
      customer: 'Client #8291',
      minutes: '12m',
      messages: [
        { role: 'user', content: 'Mon code promo ne s\'applique pas au panier.' },
        { role: 'ai', content: 'Je suis navré. Pourriez-vous me donner le code utilisé ?', confidence: 92 }
      ]
    },
    '#8288': {
        customer: 'Client #8288',
        minutes: '45m',
        messages: [
          { role: 'user', content: 'L\'IA a été impolie avec moi !' },
        ]
      }
  });

  const handleSendMessage = (text) => {
    const newMessage = { role: 'admin', content: text };
    
    setData(prev => ({
      ...prev,
      [activeId]: {
        ...prev[activeId],
        messages: [...prev[activeId].messages, newMessage]
      }
    }));
  };

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-800 font-unbounded"
        >
          IA Conversationnelle
        </motion.h2>
        <p className="text-gray-500 text-sm">Supervisez et intervenez sur les discussions pilotées par PulsAI</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <ConversationList 
          conversations={data} 
          activeId={activeId} 
          onSelect={setActiveId} 
        />
        
        <ChatWindow 
          activeConv={data[activeId]} 
          onSendMessage={handleSendMessage} 
        />
        
        <AIStats />
      </div>
    </div>
  );
}