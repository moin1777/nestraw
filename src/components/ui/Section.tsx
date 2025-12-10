'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'navy' | 'gradient';
  delay?: number;
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-navy-900 text-white',
  gradient: 'bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white',
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
  delay = 0,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
