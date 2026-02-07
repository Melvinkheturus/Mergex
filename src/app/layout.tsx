import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout";
import Footer from "@/components/Footer";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mergex.com'),
  title: {
    default: "Mergex | Architecting the Future of Tech",
    template: "%s | Mergex"
  },
  description: "We build ecosystems, not just software. Bridging the gap between concept and scalable reality with AI-driven development and strategic innovation.",
  keywords: ["software development", "AI automation", "SaaS", "tech ecosystem", "digital transformation", "enterprise software", "innovation labs"],
  authors: [{ name: "Mergex Ecosystems Inc." }],
  creator: "Mergex Ecosystems Inc.",
  publisher: "Mergex Ecosystems Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Mergex | Architecting the Future of Tech",
    description: "We build ecosystems, not just software. Bridging the gap between concept and scalable reality.",
    url: 'https://mergex.com',
    siteName: 'Mergex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://mergex.com/og-image.jpg', // Ensure this image exists in public/
        width: 1200,
        height: 630,
        alt: 'Mergex Ecosystems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mergex | Architecting the Future of Tech",
    description: "We build ecosystems, not just software. Bridging the gap between concept and scalable reality.",
    images: ['https://mergex.com/twitter-image.jpg'], // Ensure this image exists in public/
    creator: '@mergex_inc',
  },
  alternates: {
    canonical: 'https://mergex.com',
  },
};
import LayoutContent from "@/components/LayoutContent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
