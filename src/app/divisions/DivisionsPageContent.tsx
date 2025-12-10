'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Leaf, Sparkles, FlaskConical, Check } from 'lucide-react';
import { SectionHeading, Card } from '@/components/ui';

// Division data
const divisions = [
  {
    id: 'agricultural',
    icon: Leaf,
    title: 'Agricultural Exports',
    shortTitle: 'Agriculture',
    color: 'green',
    description:
      'Premium agricultural products sourced directly from trusted farmers and processors across India. Our agricultural division specializes in export-quality produce that meets international standards.',
    categories: [
      {
        name: 'Makhana (Fox Nuts)',
        description:
          'Premium quality Makhana in various grades, sourced from Bihar - the heartland of Makhana cultivation.',
        products: [
          'Raw Makhana',
          'Popped Makhana',
          '16mm Grade',
          '18mm Grade',
          '20mm Grade',
          '22mm Grade',
          '24mm+ Grade',
        ],
      },
      {
        name: 'Dehydrated & Powdered Products',
        description:
          'High-quality dehydrated vegetables and powders for food processing industries worldwide.',
        products: [
          'Onion Powder',
          'Dehydrated Onion Flakes',
          'Dehydrated Garlic Flakes',
          'Garlic Powder',
        ],
      },
      {
        name: 'Other Agro Products',
        description: 'A variety of Indian agricultural products available on request.',
        products: ['Pulses (Various)', 'Rice (Basmati & Non-Basmati)', 'Spices'],
      },
    ],
    features: [
      'FSSAI Compliant',
      'Export Quality',
      'Custom Packaging',
      'Bulk Orders Available',
    ],
  },
  {
    id: 'toiletries',
    icon: Sparkles,
    title: 'Toiletries & Hygiene Products',
    shortTitle: 'Toiletries',
    color: 'blue',
    description:
      'International quality hygiene products manufactured under strict quality control. We supply a comprehensive range of wipes, tissues, and personal care products for both retail and institutional buyers.',
    categories: [
      {
        name: 'Wet Wipes',
        description:
          'A complete range of wet wipes for various applications, manufactured to international hygiene standards.',
        products: [
          'Baby Wipes',
          'Facial Wipes',
          'Refreshing Wipes',
          'Antibacterial Wipes',
          'Makeup Remover Wipes',
          'Hand Sanitizer Wipes',
        ],
      },
      {
        name: 'Tissue Products',
        description:
          'Soft, absorbent tissue products for home and commercial use.',
        products: [
          'Pocket Tissues',
          'Facial Tissues',
          'Toilet Tissue Rolls',
          'Paper Napkins',
          'Kitchen Towels',
        ],
      },
    ],
    features: [
      'Dermatologically Tested',
      'International Standards',
      'Private Labeling',
      'Eco-Friendly Options',
    ],
  },
  {
    id: 'chemicals',
    icon: FlaskConical,
    title: 'Industrial Chemicals',
    shortTitle: 'Chemicals',
    color: 'purple',
    description:
      'Reliable supply of industrial-grade chemicals for manufacturing sectors. Our chemicals division serves industries including plastics, rubber, coatings, cosmetics, and pharmaceuticals with consistent quality products.',
    categories: [
      {
        name: 'Metal Oxides',
        description:
          'High-purity metal oxides for various industrial applications.',
        products: [
          'Zinc Oxide (Industrial Grade)',
          'Zinc Oxide (Pharmaceutical Grade)',
          'Titanium Dioxide (Rutile)',
          'Titanium Dioxide (Anatase)',
        ],
      },
      {
        name: 'Metallic Stearates',
        description:
          'Premium stearates for plastic, rubber, and coating industries.',
        products: [
          'Calcium Stearate',
          'Zinc Stearate',
          'Magnesium Stearate',
          'Aluminium Stearate',
        ],
      },
    ],
    applications: [
      'Manufacturing',
      'Coatings & Paints',
      'Plastics & Polymers',
      'Rubber Industry',
      'Cosmetics',
      'Pharmaceuticals',
    ],
    features: [
      'Technical Support',
      'Bulk Supply',
      'Consistent Quality',
      'Timely Delivery',
    ],
  },
];

// Color mappings
const colorClasses = {
  green: {
    bg: 'bg-green-600',
    bgLight: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-600',
    gradient: 'from-green-600 to-green-800',
  },
  blue: {
    bg: 'bg-blue-600',
    bgLight: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-600',
    gradient: 'from-blue-600 to-blue-800',
  },
  purple: {
    bg: 'bg-purple-600',
    bgLight: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-600',
    gradient: 'from-purple-600 to-purple-800',
  },
};

export default function DivisionsPage() {
  const [activeTab, setActiveTab] = useState('agricultural');
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' });

  // Handle hash navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && divisions.find((d) => d.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const activeDivision = divisions.find((d) => d.id === activeTab) || divisions[0];
  const colors = colorClasses[activeDivision.color as keyof typeof colorClasses];
  const Icon = activeDivision.icon;

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
              Our Divisions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What We Trade
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Three specialized verticals covering agricultural exports, hygiene
              products, and industrial chemicals.
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto px-4 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-2"
          >
            <div className="grid grid-cols-3 gap-2">
              {divisions.map((division) => {
                const DivIcon = division.icon;
                const isActive = activeTab === division.id;
                return (
                  <button
                    key={division.id}
                    onClick={() => setActiveTab(division.id)}
                    className={`relative px-4 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                      isActive
                        ? 'bg-white text-navy-900 shadow-lg'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <DivIcon size={20} />
                    <span className="hidden sm:inline">{division.shortTitle}</span>
                    {isActive && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60V20C480 -6.667 960 -6.667 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Division Content */}
      <section ref={contentRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Division Header */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white flex items-center justify-center`}
              >
                <Icon size={32} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                  {activeDivision.title}
                </h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
              {activeDivision.description}
            </p>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            key={`categories-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionHeading
              title="Product Categories"
              subtitle="Explore our comprehensive range of products"
              centered={false}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {activeDivision.categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      {category.products.map((product) => (
                        <div
                          key={product}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check
                            size={16}
                            className={`${colors.text} flex-shrink-0`}
                          />
                          <span className="text-gray-700">{product}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Applications (for Chemicals division) */}
          {activeDivision.applications && (
            <motion.div
              key={`applications-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Industry Applications
              </h3>
              <div className="flex flex-wrap gap-3">
                {activeDivision.applications.map((app) => (
                  <span
                    key={app}
                    className={`px-4 py-2 rounded-full ${colors.bgLight} ${colors.text} font-medium text-sm`}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features */}
          <motion.div
            key={`features-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`p-8 rounded-2xl bg-gradient-to-br ${colors.gradient} text-white`}
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Our {activeDivision.shortTitle} Division</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeDivision.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
