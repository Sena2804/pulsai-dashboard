"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Clock, ArrowRight, ShieldAlert } from 'lucide-react';

const PurchaseIssues = ({ issues }) => {
  const [showAll, setShowAll] = useState(false);
  const limit = 2;
  const hasMore = issues.length > limit;
  const visibleIssues = showAll ? issues : issues.slice(0, limit);

  return (
    <div className="bg-white rounded-[32px] border border-red-100 shadow-sm overflow-hidden">
      <div className="p-5 bg-red-50/30 border-b border-red-50 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
            <ShieldAlert size={20} />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className="text-sm font-bold text-gray-800">Incidents liés à l'achat d'un ticket</h3>
            <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
              {issues.length} détectés ces dernières 24h
            </p>
          </div>
        </div>
        <div className="hidden sm:block">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-red-50">
                Surveillance Live
            </span>
        </div>
      </div>

      <div className="divide-y divide-gray-50">
        <AnimatePresence mode="popLayout">
          {visibleIssues.length > 0 ? (
            visibleIssues.map((issue, idx) => (
              <motion.div 
                key={issue.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-red-50/20 transition-colors group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="mt-1">
                    <AlertCircle size={16} className="text-red-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black text-gray-400">{issue.id}</span>
                      <h4 className="text-sm font-bold text-gray-800">
                        {issue.message}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {issue.time}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="flex cursor-pointer tracking-[2px] items-center gap-2 text-[10px] font-black uppercase hover:text-red-500 transition-colors">
                  Gérer <ArrowRight size={14} />
                </button>
              </motion.div>
            ))
          ) : (
            <div className="p-10 text-center">
              <p className="text-sm italic">Aucun incident détecté lors des dernières 24 heures.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="p-4 bg-gray-50/50 text-center border-t border-gray-50">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-[11px] cursor-pointer font-bold hover:text-black text-gray-500 transition-all uppercase tracking-widest"
          >
            {showAll ? "Réduire la liste" : `Voir l'historique complet (${issues.length - limit} de plus)`}
          </button>
        </div>
      )}
    </div>
  );
};

export default PurchaseIssues;