import { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about NestRaw Merchants Pvt Ltd - a trusted name in international trade delivering excellence across agricultural, hygiene, and chemical product verticals.',
  openGraph: {
    title: 'About NestRaw Merchants Pvt Ltd',
    description:
      'Learn about our journey, vision, and commitment to quality in international trade.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
