"use client";
import React from 'react';
import { Tag, AlertCircle, Clock } from 'lucide-react';

const TicketRow = ({ ticket }) => {
  const priorityColor = {
    Haute: "text-red-500 bg-red-50",
    Moyenne: "text-amber-500 bg-amber-50",
    Basse: "text-blue-500 bg-blue-50"
  };

  return (
    <div className="group flex items-center justify-between p-4 bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-xl ${priorityColor[ticket.priority]}`}>
          <AlertCircle size={18} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-800 group-hover:text-pulsai-blue transition-colors">
            {ticket.subject}
          </h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">#{ticket.id}</span>
            <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded text-gray-500 font-bold uppercase">{ticket.category}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end">
          <div className="flex items-center gap-1 text-gray-400">
            <Clock size={12} />
            <span className="text-[10px] font-medium">{ticket.time}</span>
          </div>
          <span className="text-[10px] font-bold text-gray-800">{ticket.user}</span>
        </div>
        <div className="w-24 px-3 py-1 rounded-full border text-center text-[10px] font-black uppercase tracking-tighter border-gray-200 text-gray-400 group-hover:border-pulsai-blue group-hover:text-pulsai-blue transition-all">
          Détails
        </div>
      </div>
    </div>
  );
};

export default TicketRow;