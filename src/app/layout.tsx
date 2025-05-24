import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const antonSC = Anton_SC({
  variable: "--font-anton-sc",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Thomson Roofers | Expert Roofing Services in the UK",
  description:
    "Thomson Roofers offers high-quality roof repairs, replacements, and installations for homes and businesses across the UK. Trusted roofing experts you can rely on.",
  keywords: [
    "roofing services UK",
    "roof repair",
    "roof installation",
    "Thomson Roofers",
    "residential roofing",
    "commercial roofing",
    "roofing company UK",
  ],
  authors: [{ name: "Thomson Roofers", url: "https://thomsonroofers.com" }],
  creator: "Thomson Roofers",
  openGraph: {
    title: "Thomson Roofers | Reliable Roofing Services",
    description:
      "Top-rated roofing contractors offering affordable roof repairs and installations across the UK.",
    url: "https://thomsonroofers.com",
    siteName: "Thomson Roofers",
    images: [
      {
        url: "https://thomsonroofers.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thomson Roofers - Roofing Contractors UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomson Roofers",
    description:
      "Affordable and professional roofing services for homes and businesses across the UK.",
    images: ["https://thomsonroofers.com/twitter-image.jpg"],
  },
  metadataBase: new URL("https://thomsonroofers.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonSC.variable} ${antonSC.variable} antialiased bg-white`}
      >
        <Toaster />
        <div className="fixed top-0 left-0 z-50 w-full ">
          <Navbar />
        </div>
        <HeroCarousel />

        {children}
        <Footer />
      </body>
    </html>
  );
}
