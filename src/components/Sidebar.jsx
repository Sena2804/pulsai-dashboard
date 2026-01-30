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
  X
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
            <div className="fixed top-0 left-0 right-0 h-16 flex items-center pl-2 z-50 md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}className="p-2 hover:bg-gray-300 cursor-pointer bg-gray-200 rounded-lg">
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
            <aside className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform duration-300 w-64 md:translate-x-0 shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#3590E3] rounded-xl flex items-center justify-center">
                        <Stone className=" w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-[30px] text-black font-bold tracking-tight font-unbounded">PulsAI</h1>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link key={item.id} href={item.href} passHref>
                                <motion.div
                                    className={`w-full flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors group mb-2 ${
                                        isActive ? 'bg-[#3590E3] text-white' : 'hover:bg-gray-100 text-black'
                                    }`}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon size={20} />
                                        <span className="font-medium text-sm">{item.label}</span>
                                    </div>
                                    
                                    {isActive && (
                                        <motion.div layoutId="indicator">
                                            <ChevronRight size={16} />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    )
}