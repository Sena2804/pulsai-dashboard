"use client";
import React from 'react';
import { Calendar, MapPin, Ticket, ChevronRight } from 'lucide-react';
import StatBar from '@/components/ia/StatBar';

export default function TicketCard({ event, onOpenDetails }) {
  const totalSold = event.tickets.reduce((acc, t) => acc + t.sold, 0);
  const totalCapacity = event.tickets.reduce((acc, t) => acc + t.total, 0);
  const globalProgress = Math.round((totalSold / totalCapacity) * 100);

  return (
    <div className="bg-white rounded-[32px] max-w-[400px] border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
      <div className="flex flex-col ">
        <div className="h-48 w-full relative">
            <img 
            src={event.image} 
            alt={event.name} 
            className="w-full h-full object-cover" 
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm">
             Live • {event.date}
            </div>
        </div>

        <div className=" p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 font-unbounded mb-2">{event.name}</h3>
            <div className="flex flex-wrap gap-4 text-gray-500 text-xs mb-6">
              <span className="flex items-center gap-1"><MapPin size={14}/> {event.location}</span>
              <span className="flex items-center gap-1"><Calendar size={14}/> {event.time}</span>
            </div>
          </div>

          <div className="space-y-4">
            <StatBar label="Vente Globale" value={globalProgress} color="#3590E3" />
            
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Vendus</p>
                  <p className="text-lg font-black text-gray-800">{totalSold}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Restants</p>
                  <p className="text-lg font-black text-gray-400">{totalCapacity - totalSold}</p>
                </div>
              </div>
              
              <button 
                onClick={onOpenDetails}
                className="flex items-center cursor-pointer gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-2xl font-bold text-xs hover:bg-[#3590E3] transition-all group"
              >
                Gérer les tickets
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}