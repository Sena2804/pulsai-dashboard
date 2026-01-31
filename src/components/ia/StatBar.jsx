"use client";
import React from 'react';
import { motion } from 'framer-motion';

const StatBar = ({ label, value, color = "#3590E3", showPercentage = true }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between text-[11px] font-bold mb-2 text-gray-500 uppercase tracking-tight">
        <span>{label}</span>
        {showPercentage && <span style={{ color }}>{value}%</span>}
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default StatBar;