"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Sparkles, Send, UserCheck } from 'lucide-react';

export default function ChatWindow({ activeConv, onSendMessage }) {
  const [text, setText] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeConv.messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSendMessage(text);
    setText('');
  };

  return (
    <div className="lg:col-span-6 flex flex-col bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[650px]">
      <div className="p-4 border-b flex justify-between items-center bg-gray-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3590E3] rounded-full flex items-center justify-center text-white shadow-inner">
            <Bot size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">{activeConv.customer}</p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] text-gray-500 font-medium tracking-wide">IA SUPERVISÉE</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 p-6 space-y-6 overflow-y-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
        <AnimatePresence mode="popLayout">
          {activeConv.messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`relative max-w-[80%] p-4 rounded-2xl text-sm shadow-sm ${
                msg.role === 'ai' ? 'bg-[#3590E3] text-white rounded-tr-none' : 
                msg.role === 'admin' ? 'bg-gray-800 text-white rounded-tr-none border-2 border-gray-700' : 
                'bg-white border border-gray-100 text-gray-700 rounded-tl-none'
              }`}>
                {msg.role === 'ai' && (
                  <div className="absolute -top-3 right-0 bg-white text-[#3590E3] text-[9px] px-2 py-0.5 rounded-full font-bold border shadow-sm flex items-center gap-1">
                    <Sparkles size={10} /> {msg.confidence}%
                  </div>
                )}
                {msg.role === 'admin' && (
                  <div className="absolute -top-3 right-0 bg-amber-400 text-gray-900 text-[9px] px-2 py-0.5 rounded-full font-bold border shadow-sm flex items-center gap-1">
                    <UserCheck size={10} /> ADMIN
                  </div>
                )}
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t bg-white flex gap-2">
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tapez votre réponse d'expert..."
          className="flex-1 bg-gray-50 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-[#3590E3] transition-all outline-none"
        />
        <button type="submit" className="bg-[#3590E3] text-white p-3 rounded-2xl hover:bg-[#2a75ba] transition-all flex items-center justify-center shadow-lg shadow-blue-100">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}