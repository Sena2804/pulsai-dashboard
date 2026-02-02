"use client";
import React from 'react';
import { Instagram, MessageCircle, Send, Clock, Users, Facebook, CheckCircle2 } from 'lucide-react';

const CampaignTask = ({ task, isPast }) => {
  const getChannel = (channel) => {
    if (isPast) return { icon: <CheckCircle2 size={18} />, color: 'bg-gray-100 text-gray-400' };

    switch (channel) {
      case 'Instagram': return { icon: <Instagram size={18} />, color: 'bg-pink-50 text-pink-600' };
      case 'WhatsApp': return { icon: <MessageCircle size={18} />, color: 'bg-green-50 text-green-600' };
      case 'Facebook' : return {icon: <Facebook size={18}/>, color: 'bg-blue-50 text-white'};
      default: return { icon: <Send size={18} />, color: 'bg-blue-50 text-blue-600' };
    }
  };

  const config = getChannel(task.channel);

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl ${config.color}`}>
            {config.icon}
          </div>
          <div className="flex flex-col -space-y-0.5">
             <span className="text-[10px] font-black uppercase tracking-widest">
                {task.type} - {task.channel}
             </span>
             {isPast && <span className="text-[9px] font-bold text-green-600 uppercase">Terminé</span>}
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <h3 className="text-sm font-bold text-gray-800 leading-tight group-hover:text-[#3590E3] transition-colors">
          {task.title}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-2 italic font-medium">
          "{task.content}"
        </p>
      </div>

      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock size={13} className="text-gray-300" />
          <span className="text-[10px] font-bold text-gray-500">{task.schedule}</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
          <Users size={12} /> {task.audience}
        </div>
      </div>
    </div>
  );
};

export default CampaignTask;