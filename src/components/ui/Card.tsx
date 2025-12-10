'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' } : undefined}
      className={`
        bg-white rounded-xl shadow-md
        transition-all duration-300 ease-in-out
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
