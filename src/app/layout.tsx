import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, WhatsAppButton } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NestRaw Merchants Pvt Ltd | Global Trade, Local Trust",
    template: "%s | NestRaw Merchants",
  },
  description:
    "NestRaw Merchants Pvt Ltd is a leading multi-vertical trading and export company specializing in agricultural products, toiletries, and industrial chemicals. Partner with us for quality and reliability.",
  keywords: [
    "agricultural exports",
    "makhana export",
    "fox nuts",
    "toiletries trading",
    "industrial chemicals",
    "B2B trading",
    "export company India",
    "international trade",
  ],
  authors: [{ name: "NestRaw Merchants Pvt Ltd" }],
  icons: {
    icon: "/nestraw_logo_final.svg",
    shortcut: "/nestraw_logo_final.svg",
    apple: "/nestraw_logo_final.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nestrawmerchants.com",
    siteName: "NestRaw Merchants",
    title: "NestRaw Merchants Pvt Ltd | Global Trade, Local Trust",
    description:
      "Your trusted partner for agricultural exports, toiletries, and industrial chemicals trading worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NestRaw Merchants Pvt Ltd",
    description:
      "Global Trade, Local Trust - Leading export company from India",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
