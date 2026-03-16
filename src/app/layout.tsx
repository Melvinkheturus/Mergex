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
  metadataBase: new URL("https://mergex.in"),
  title: {
    default: "Mergex — One System. Zero Friction.",
    template: "%s | Mergex",
  },
  description:
    "Mergex builds the systems behind modern businesses — integrating software, automation, AI, and growth infrastructure into one scalable foundation. One system. Zero friction.",
  keywords: [
    "Mergex",
    "business systems",
    "workflow automation",
    "AI infrastructure",
    "scalable foundation",
    "unified systems",
    "software development",
    "growth infrastructure",
    "AI automation",
    "startup systems",
    "MVP development",
    "business architecture",
  ],
  authors: [{ name: "Mergex" }],
  creator: "Mergex",
  publisher: "Mergex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mergex — One System. Zero Friction.",
    description:
      "Mergex builds the systems behind modern businesses — integrating software, automation, AI, and growth infrastructure into one scalable foundation.",
    url: "https://mergex.in",
    siteName: "Mergex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mergex.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mergex — One System. Zero Friction.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mergex — One System. Zero Friction.",
    description:
      "Mergex builds the systems behind modern businesses — integrating software, automation, AI, and growth infrastructure into one scalable foundation.",
    images: ["https://mergex.in/twitter-image.jpg"],
    creator: "@mergexco",
  },
  alternates: {
    canonical: "https://mergex.in",
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
        {/* Preconnect to font sources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://api.fontshare.com" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* Clash Display — primary display font */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />

        {/* Space Grotesk — modern geometric sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* JetBrains Mono — technical labels */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org — Organization */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mergex",
              url: "https://mergex.in",
              logo: "https://mergex.in/logo/mergex-logo.png",
              description:
                "Mergex builds the systems behind modern businesses by integrating software, automation, AI, and growth infrastructure into one scalable foundation.",
              email: "hello@mergex.in",
              areaServed: "Worldwide",
              foundingLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
              },
              sameAs: ["https://twitter.com/mergexco"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Mergex Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mergex Systems",
                      description:
                        "Business infrastructure, software platforms, workflow automation, and AI integrations.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mergex Labs",
                      description:
                        "AI-powered creative production — ads, visual assets, video content, and digital media.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>

      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
