"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Megaphone, 
  ChevronRight,
  Stone,
  Tickets,
  Menu,
  X,
  UserCircle,
  LogOut
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Tableau de bord', href: '/' },
  { id: 'chat', icon: MessageSquare, label: 'IA Conversationnelle', href: '/ia' },
  { id: 'tickets', icon: Tickets, label: 'Gestion Tickets', href: '/tickets' },
  { id: 'marketing', icon: Megaphone, label: 'Campagnes', href: '/marketing' },
];

export default function Sidebar(){
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    return(
        <>
            <div className="fixed top-0 left-0 right-0 h-16 flex items-center pl-4 z-50 md:hidden bg-white/80 backdrop-blur-md border-b border-gray-100">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 cursor-pointer bg-gray-50 rounded-xl text-[#3590E3]">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                />
                )}
            </AnimatePresence>

            <aside className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 w-64 md:translate-x-0 shadow-xl flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="p-8 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3590E3] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                        <Stone className="w-6 h-6"/>
                    </div>
                    <div>
                        <h1 className="text-[24px] text-black font-black tracking-tighter font-unbounded">PulsAI</h1>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.id} href={item.href} passHref>
                                <motion.div
                                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all group mb-1 ${
                                        isActive ? 'bg-[#3590E3] text-white shadow-lg shadow-blue-100' : 'hover:bg-gray-100 text-gray-700 hover:text-black'
                                    }`}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                        <span className={`text-sm ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
                                    </div>
                                    {isActive && <ChevronRight size={14} strokeWidth={3} />}
                                </motion.div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-50 space-y-2">
                    <Link href="/profile">
                        <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 cursor-pointer group transition-colors">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#3590E3]/10 group-hover:text-[#3590E3] transition-colors">
                                <UserCircle size={24} />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-black text-gray-800 uppercase tracking-tight">Admin PulsAI</p>
                                <p className="text-[10px] text-gray-400 font-bold">Voir mon profil</p>
                            </div>
                        </div>
                    </Link>

                    <button 
                        onClick={() => alert('Déconnexion...')} 
                        className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all cursor-pointer"
                    >
                        <LogOut size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest text-[10px]">Déconnexion</span>
                    </button>
                </div>
            </aside>
        </>
    )
}