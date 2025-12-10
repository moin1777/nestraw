'use client';

import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-24 bg-gold-500 rounded-full ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
