'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Target, Eye, Award, Users, Lightbulb, Heart, CheckCircle } from 'lucide-react';
import { SectionHeading, Card } from '@/components/ui';

export const approaches = [
  {
    icon: CheckCircle,
    title: 'Quality Commitment',
    description:
      'Every product we source and supply undergoes stringent quality checks to meet and exceed international standards.',
  },
  {
    icon: Heart,
    title: 'Ethical Sourcing',
    description:
      'We partner only with suppliers who share our values of fair trade, sustainability, and ethical business practices.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description:
      'We view every client as a long-term partner, working closely to understand and fulfill their unique requirements.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Growth',
    description:
      'Continuously evolving our processes and expanding our product range to serve our partners better.',
  },
];

const certifications = [
  { name: 'ISO', placeholder: 'ISO Certified' },
  { name: 'FSSAI', placeholder: 'FSSAI Registered' },
  { name: 'APEDA', placeholder: 'APEDA Recognized' },
  { name: 'IEC', placeholder: 'IEC Holder' },
  { name: 'MSME', placeholder: 'MSME Registered' },
  { name: 'Startup India', placeholder: 'Startup India' },
];

export default function AboutPage() {
  const companyRef = useRef(null);
  const visionRef = useRef(null);
  const approachRef = useRef(null);
  const certRef = useRef(null);

  const isCompanyInView = useInView(companyRef, { once: true, margin: '-100px' });
  const isVisionInView = useInView(visionRef, { once: true, margin: '-100px' });
  const isApproachInView = useInView(approachRef, { once: true, margin: '-100px' });
  const isCertInView = useInView(certRef, { once: true, margin: '-100px' });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gold-500 text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              A trusted name in international trade, delivering excellence across
              agricultural, hygiene, and chemical product verticals.
            </p>
          </motion.div>
        </div>
        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 100V0C360 66.667 720 100 1080 100C1200 100 1320 88.889 1440 66.667V100H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Company Introduction */}
      <section ref={companyRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCompanyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                NestRaw Merchants Pvt Ltd
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established with a vision to bridge global markets with quality
                  Indian products, NestRaw Merchants has grown to become a trusted
                  name in international trade. Our journey began with a simple
                  commitment: to deliver excellence in every transaction.
                </p>
                <p>
                  Today, we operate across three distinct verticals—Agricultural
                  Exports, Toiletries & Hygiene Products, and Industrial
                  Chemicals—serving partners in over 15 countries across North
                  America, Europe, and Asia.
                </p>
                <p>
                  Our headquarters in Ahmedabad, Gujarat, strategically positions
                  us to leverage India&apos;s rich agricultural heritage and robust
                  manufacturing capabilities, ensuring our partners receive the
                  finest quality products at competitive prices.
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isCompanyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-2xl bg-linear-to-br overflow-hidden flex items-center justify-center p-8">
                <Image
                  src="/nestraw_logo_final_removebg2.png"
                  alt="NestRaw Merchants Logo"
                  width={600}
                  height={450}
                  className="object-contain max-h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={visionRef} className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Our Vision & Mission"
              subtitle="Guided by purpose, driven by excellence"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-500 flex items-center justify-center">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To become a globally recognized trading partner known for
                  quality, reliability, and ethical business practices. We envision
                  a world where Indian products are synonymous with excellence in
                  every international market we serve.
                </p>
              </Card>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 md:p-10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-500 flex items-center justify-center">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To deliver superior quality products through sustainable
                  sourcing, efficient logistics, and exceptional customer service.
                  We are committed to building lasting partnerships that create
                  mutual value and contribute to global trade prosperity.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={approachRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Our Approach"
              subtitle="Four pillars that guide our business philosophy"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isApproachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 h-full text-center">
                    <div className="w-14 h-14 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} />
                    </div>
                    <h4 className="text-lg font-bold text-navy-900 mb-3">
                      {approach.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {approach.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={certRef} className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCertInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Certifications & Registrations"
              subtitle="Recognized and certified for quality and compliance"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isCertInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center h-full flex flex-col items-center justify-center">
                  <Award size={32} className="text-gold-500 mb-3" />
                  <p className="text-sm font-semibold text-navy-900">
                    {cert.placeholder}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={isCertInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            * Certification logos to be added
          </motion.p> */}
        </div>
      </section>
    </>
  );
}
