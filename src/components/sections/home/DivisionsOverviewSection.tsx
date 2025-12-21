'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Sparkles, FlaskConical, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui';

const divisions = [
  {
    icon: Leaf,
    title: 'Agricultural Exports',
    description:
      'Premium agricultural products including Makhana (Fox Nuts), dehydrated vegetables, and select pulses exported to markets worldwide.',
    href: '/divisions#agricultural',
    image: '/agricultural_card.png',
    color: 'from-green-600 to-green-800',
  },
  {
    icon: Sparkles,
    title: 'Toiletries & Hygiene',
    description:
      'Quality hygiene products including wet wipes, tissues, and personal care items meeting international health standards.',
    href: '/divisions#toiletries',
    image: '/toiletries_card.png',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: FlaskConical,
    title: 'Industrial Chemicals',
    description:
      'Reliable supply of metal oxides, metallic stearates, and specialty chemicals for manufacturing industries.',
    href: '/divisions#chemicals',
    image: '/chemicals_card.png',
    color: 'from-purple-600 to-purple-800',
  },
];

export default function DivisionsOverviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Our Divisions"
            subtitle="Three specialized verticals delivering excellence across diverse product categories"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Link href={division.href} className="block group h-full">
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={division.image}
                        alt={division.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                        {division.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {division.description}
                      </p>
                      <div className="flex items-center text-navy-900 font-semibold group-hover:text-gold-600 transition-colors duration-300">
                        <span>Learn More</span>
                        <ArrowRight
                          size={18}
                          className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
