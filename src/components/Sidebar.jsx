"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Megaphone, 
  Settings, 
  LogOut, 
  Sparkles,
  ChevronRight,
  Stone
} from 'lucide-react';
import { useState } from "react";
import { motion } from 'framer-motion';
import { usePathname } from "next/navigation";

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Tableau de bord', href: '/' },
  { id: 'chat', icon: MessageSquare, label: 'IA Conversationnelle', href: '/chat' },
  { id: 'tickets', icon: Users, label: 'Gestion Tickets', href: '/tickets' },
  { id: 'marketing', icon: Megaphone, label: 'Campagnes', href: '/marketing' },
];

export default function Sidebar(){
    const pathname = usePathname();
    return(
        <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col shadow-xl">
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
    )
}