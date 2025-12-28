'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Heart, Clock, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Integrity First',
    description:
      'Transparent business practices and ethical sourcing are at the core of everything we do.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Standards',
    description:
      'Rigorous quality control processes ensure only the best products reach our partners.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description:
      'Reliable logistics and efficient supply chains guarantee on-time deliveries every time.',
  },
  {
    icon: Heart,
    title: 'Customer-Centric',
    description:
      'Your success is our priority. We tailor solutions to meet your specific requirements.',
  },
];

export default function WhyChooseUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Why Choose NestRaw"
              subtitle="Building lasting partnerships through commitment, quality, and reliability"
              centered={false}
            />

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center group-hover:bg-navy-900 group-hover:text-gold-500 transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900">
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-6xl md:text-7xl font-bold text-gold-500 mb-4"
                  >
                    3+
                  </motion.div>
                  <p className="text-xl text-gray-300 mb-2">Years of Excellence</p>
                  <p className="text-sm text-gray-400 max-w-xs mx-auto">
                    Building trust and delivering quality since our inception
                  </p>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/10 rounded-tr-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
