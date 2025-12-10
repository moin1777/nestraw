'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Building2,
  Warehouse,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { SectionHeading, Card, Button } from '@/components/ui';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const WorldMap = dynamic(() => import('@/components/sections/contact/WorldMap'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  message: string;
}

const contactInfo = {
  offices: [
    {
      type: 'Corporate Office',
      icon: Building2,
      address:
        '9/164, Alpha Bazar, Venus Atlantis, Prahladnagar, Ahmedabad, Gujarat, India - 380015',
    },
    {
      type: 'Warehouse',
      icon: Warehouse,
      address:
        'Shop No. 8, Shubh Darshan Apartment, B/H Jyoti Kalash Society, Jodhpur Tekra, Satellite, Ahmedabad, Gujarat, India - 380015',
    },
  ],
  phone: '+91 8980 811 800',
  emails: [
    { label: 'General Inquiries', email: 'Info@NestRawMerchants.com' },
    { label: 'Export Inquiries', email: 'Export@NestRawMerchants.com' },
    { label: 'Purchasing', email: 'Purchase@NestRawMerchants.com' },
    { label: 'Sales', email: 'Sales@NestRawMerchants.com' },
  ],
};

const productOptions = [
  'Agricultural Products - Makhana',
  'Agricultural Products - Dehydrated Vegetables',
  'Agricultural Products - Other',
  'Toiletries - Wet Wipes',
  'Toiletries - Tissues',
  'Industrial Chemicals - Metal Oxides',
  'Industrial Chemicals - Metallic Stearates',
  'Multiple Products',
  'Other',
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true, margin: '-100px' });
  const isMapInView = useInView(mapRef, { once: true, margin: '-100px' });
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('loading');
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setFormStatus('success');
    reset();
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gold-500 text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Connect
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your trading requirements? Reach out to us and
              let&apos;s explore how we can partner together.
            </p>
          </motion.div>
        </div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 60V20C480 -6.667 960 -6.667 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={contactRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Get in Touch"
              subtitle="Multiple ways to reach us for your convenience"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Offices */}
            {contactInfo.offices.map((office, index) => {
              const Icon = office.icon;
              return (
                <motion.div
                  key={office.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center flex-shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy-900 mb-2">
                          {office.type}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 hover:text-navy-900 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Email Addresses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail size={24} className="text-gold-600" />
              <h3 className="text-xl font-bold text-navy-900">Email Us</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.emails.map((item) => (
                <div key={item.email}>
                  <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-navy-900 hover:text-gold-600 transition-colors font-medium text-sm"
                  >
                    {item.email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* World Map Section */}
      <section ref={mapRef} className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="Our Global Presence"
              subtitle="Exporting from India to partners worldwide"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isMapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WorldMap />
          </motion.div>

          {/* Export Destinations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMapInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe size={24} className="text-gold-600" />
              <h3 className="text-xl font-bold text-navy-900">
                Export Destinations
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                'USA',
                'Germany',
                'United Kingdom',
                'France',
                'Netherlands',
                'Brazil',
                'Mexico',
                'Nepal',
                'Sri Lanka',
              ].map((country) => (
                <span
                  key={country}
                  className="px-4 py-2 rounded-full bg-white shadow-sm text-navy-900 font-medium text-sm"
                >
                  {country}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Form Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill out the form below and our team will get back to you within
                24 hours. For urgent inquiries, please reach out via WhatsApp or
                phone.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <CheckCircle size={20} className="text-green-500" />
                  <span>Quick response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <CheckCircle size={20} className="text-green-500" />
                  <span>Free product consultation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <CheckCircle size={20} className="text-green-500" />
                  <span>Custom quotes for bulk orders</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                {formStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register('name', { required: 'Name is required' })}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                          placeholder="+1 234 567 8900"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Country *
                        </label>
                        <input
                          type="text"
                          id="country"
                          {...register('country', {
                            required: 'Country is required',
                          })}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.country ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all`}
                          placeholder="Your country"
                        />
                        {errors.country && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="productInterest"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Product Interest *
                      </label>
                      <select
                        id="productInterest"
                        {...register('productInterest', {
                          required: 'Please select a product',
                        })}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.productInterest
                            ? 'border-red-500'
                            : 'border-gray-300'
                        } focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all`}
                      >
                        <option value="">Select a product category</option>
                        {productOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.productInterest && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.productInterest.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message', {
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                          },
                        })}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none`}
                        placeholder="Tell us about your requirements..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      isLoading={formStatus === 'loading'}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        Send Message
                      </span>
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
