'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918980811800?text=Hello,%20I'm%20interested%20in%20your%20products%20and%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <MessageCircle size={28} fill="white" />
      </motion.div>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </motion.a>
  );
}
