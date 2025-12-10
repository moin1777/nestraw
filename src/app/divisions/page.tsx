import { Metadata } from 'next';
import DivisionsPageContent from './DivisionsPageContent';

export const metadata: Metadata = {
  title: 'Our Divisions',
  description:
    'Explore our three specialized verticals: Agricultural Exports, Toiletries & Hygiene Products, and Industrial Chemicals. Quality products for global markets.',
  openGraph: {
    title: 'Our Divisions | NestRaw Merchants',
    description:
      'Agricultural exports, toiletries, and industrial chemicals - explore our product range.',
  },
};

export default function DivisionsPage() {
  return <DivisionsPageContent />;
}
