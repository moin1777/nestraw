'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Globe, Handshake } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Every product undergoes rigorous quality checks to ensure it meets international standards and exceeds customer expectations.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With established networks across 15+ countries, we connect suppliers with buyers seamlessly across continents.',
  },
  {
    icon: Handshake,
    title: 'Trusted Partnerships',
    description:
      'Built on transparency and reliability, our long-term partnerships are the foundation of our success.',
  },
];

export default function ValuePropositionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Why Partner With Us"
            subtitle="Three pillars that define our commitment to excellence in international trade"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative p-8 bg-gray-50 rounded-2xl transition-all duration-300 group-hover:bg-navy-900 group-hover:shadow-2xl">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-navy-900 group-hover:bg-gold-500 text-gold-500 group-hover:text-navy-900 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-white mb-4 transition-colors duration-300">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gold-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
