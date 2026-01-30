"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function ConversationList({ conversations, activeId, onSelect }) {
  return (
    <aside className="lg:col-span-3 flex flex-col gap-4">
      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 flex items-center gap-2">
        <MessageSquare size={14} /> Flux en direct
      </h3>
      <div className="space-y-3 overflow-y-auto pr-2 max-h-[600px]">
        {Object.entries(conversations).map(([id, conv]) => (
          <motion.div 
            key={id}
            onClick={() => onSelect(id)}
            whileHover={{ x: 5 }}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              activeId === id 
              ? 'bg-white border-[#3590E3] shadow-md ring-1 ring-[#3590E3]' 
              : 'bg-white/50 border-gray-100 hover:border-gray-300'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-sm text-gray-800">{id}</span>
              <span className="text-[10px] text-gray-400">{conv.minutes}</span>
            </div>
            <p className="text-xs text-gray-500 truncate italic">
              {conv.messages[conv.messages.length - 1].content}
            </p>
          </motion.div>
        ))}
      </div>
    </aside>
  );
}