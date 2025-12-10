'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how we can support your business needs with our
            quality products and reliable service.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                <span className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight size={20} />
                </span>
              </Button>
            </Link>
            <a
              href="https://wa.me/918980811800?text=Hello,%20I'm%20interested%20in%20your%20products%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-green-500 hover:border-green-500"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={20} />
                  WhatsApp Us
                </span>
              </Button>
            </a>
          </motion.div>

          {/* Email Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:Info@NestRawMerchants.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors"
            >
              <Mail size={18} />
              <span>Info@NestRawMerchants.com</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
