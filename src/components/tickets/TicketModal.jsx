"use client";
import { X } from 'lucide-react';
import StatBar from '@/components/ia/StatBar';
import { useEffect } from 'react';

export default function TicketModal({ isOpen, onClose, event }) {
  useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Types de Billets</h3>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">{event.name}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X/></button>
        </div>

        <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {event.tickets.map((t, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{t.type}</h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">{t.price}€ / Unité</p>
                </div>
                <span className="text-xs font-black text-gray-700">{t.sold} / {t.total}</span>
              </div>
              <StatBar value={Math.round((t.sold/t.total)*100)} color={t.type === 'Premium' ? '#BAF09D' : '#3590E3'} showPercentage={true} />
            </div>
          ))}
        </div>
        
        <div className="p-6 bg-gray-50 flex justify-end">
            <button onClick={onClose} className='bg-[#1F2937] hover:bg-[#3590E3] text-white tracking-[2px] px-8 py-2 mr-3 rounded-md font-bold uppercase cursor-pointer transition-all group'>Fermer</button>
        </div>
      </div>
    </div>
  );
}