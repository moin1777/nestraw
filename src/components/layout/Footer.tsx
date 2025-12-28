import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/divisions', label: 'Our Divisions' },
  { href: '/contact', label: 'Contact Us' },
];

const divisions = [
  { href: '/divisions#agricultural', label: 'Agricultural Exports' },
  { href: '/divisions#toiletries', label: 'Toiletries & Hygiene' },
  { href: '/divisions#chemicals', label: 'Industrial Chemicals' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight">
                Nest<span className="text-gold-500">Raw</span>
              </span>
              <span className="block text-xs tracking-widest uppercase text-gray-400">
                Merchants Pvt Ltd
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Global Trade, Local Trust. Your trusted partner for agricultural
              exports, toiletries, and industrial chemicals trading worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/nestraw-merchants-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a> */}
              <a
                href="mailto:Info@NestRawMerchants.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-gold-500 hover:text-navy-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Divisions</h3>
            <ul className="space-y-3">
              {divisions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  9/164, Alpha Bazar, Venus Atlantis, Prahladnagar, Ahmedabad,
                  Gujarat, India - 380015
                </span>
              </li>
              <li>
                <a
                  href="tel:+918980811800"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Phone size={20} className="text-gold-500 flex-shrink-0" />
                  <span>+91 8980 811 800</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@NestRawMerchants.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Mail size={20} className="text-gold-500 flex-shrink-0" />
                  <span className="text-sm">Info@NestRawMerchants.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} NestRaw Merchants Pvt Ltd. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-sm">Designed & Developed by <Link href="https://x.com/moinmalek1777" className="text-gold-500 hover:underline" target='_blank'>Moin Malek</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
