import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mergex",
  description: "Mergex — launching soon.",
  icons: {
    icon: [
      { url: "/favicon_io (2)/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io (2)/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io (2)/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon_io (2)/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon_io (2)/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
