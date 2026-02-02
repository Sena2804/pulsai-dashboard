"use client";
import React, { useState } from 'react';
import { User, Mail, Camera, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "Admin PulsAI",
    email: "contact@pulsai.bj"
  });

  const [roleInfo] = useState({
    role: "Administrateur Principal",
    since: "Membre depuis Janvier 2026"
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      
      setTimeout(() => setIsSaved(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-10">
      
      <div className="bg-white rounded-[35px] p-8 border border-gray-100 shadow-sm flex flex-col items-center md:items-start md:flex-row gap-6">
        <div className="relative group">
          <div className="w-24 h-24 bg-gray-50 rounded-[28px] flex items-center justify-center text-[#3590E3] border border-gray-100 shadow-inner">
            <User size={40} />
          </div>
          <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-lg border border-gray-50 text-gray-400 hover:text-[#3590E3] cursor-pointer">
            <Camera size={16} />
          </button>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black text-gray-800 font-unbounded">{formData.name}</h2>
          <p className="text-[#3590E3] text-xs font-bold flex items-center justify-center md:justify-start gap-1.5 mt-1">
            <ShieldCheck size={14} /> {roleInfo.role}
          </p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-3 font-bold">
            {roleInfo.since}
          </p>
        </div>
      </div>

      <section className="bg-white rounded-[35px] p-8 border border-gray-100 shadow-sm relative overflow-hidden">
        
        {isSaved && (
          <div className="absolute top-0 left-0 right-0 bg-green-500 text-white py-2 flex items-center justify-center gap-2 animate-in slide-in-from-top duration-300">
            <CheckCircle2 size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Profil mis à jour avec succès !</span>
          </div>
        )}

        <h3 className="text-[10px] font-black text-gray-300 uppercase tracking-[2px] mb-8 mt-4">Paramètres du compte</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Nom complet</label>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-transparent focus-within:border-[#3590E3]/20 transition-all">
              <User size={18} className="text-gray-300" />
              <input 
                type="text" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-transparent outline-none text-sm font-bold w-full text-gray-700" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Adresse Email</label>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-transparent focus-within:border-[#3590E3]/20 transition-all">
              <Mail size={18} className="text-gray-300" />
              <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-transparent outline-none text-sm font-bold w-full text-gray-700" 
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-[#3590E3] text-white px-10 py-4 rounded-2xl font-bold text-xs hover:shadow-lg hover:shadow-blue-100 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isSaving ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sauvegarde...
              </>
            ) : "Mettre à jour le profil"}
          </button>
        </div>
      </section>
    </div>
  );
}