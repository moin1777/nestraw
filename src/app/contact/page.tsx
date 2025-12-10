import { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NestRaw Merchants Pvt Ltd. Located in Ahmedabad, India, we export quality products worldwide. Contact us for inquiries and quotes.',
  openGraph: {
    title: 'Contact NestRaw Merchants',
    description:
      'Reach out to us for product inquiries, quotes, and partnership opportunities.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
