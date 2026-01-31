"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';


const StatCard = ({ title, value, icon: Icon, trend, isNegative = false, color }) => {

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 `} />
        </div>

        <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
          isNegative 
            ? 'text-red-500 bg-red-50' 
            : 'text-[#5cb85c] bg-[#BAF09D]/30 bg-opacity-20'
        }`}>
          {trend} 
          {isNegative ? (
            <ArrowDownRight size={12} className="ml-1" />
          ) : (
            <ArrowUpRight size={12} className="ml-1" />
          )}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-gray-400 text-sm font-medium mb-1 uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-3xl font-bold text-gray-900 tracking-tight">
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default StatCard;