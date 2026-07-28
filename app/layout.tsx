import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F8F5EF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://theleathercareco.com"),

  title: {
    default: "The Leather Care Co. | Luxury Leather Restoration",
    template: "%s | The Leather Care Co.",
  },

  description:
    "Expert restoration and care for luxury leather bags, shoes, wallets, jackets and accessories across India.",

  keywords: [
    "Luxury Leather Restoration",
    "Leather Repair India",
    "Luxury Bag Repair",
    "Louis Vuitton Repair",
    "Hermes Repair",
    "Chanel Repair",
    "Luxury Shoe Restoration",
    "Leather Spa",
    "Bag Colour Restoration",
    "Leather Care Products",
  ],

  authors: [{ name: "The Leather Care Co." }],
  creator: "The Leather Care Co.",
  publisher: "The Leather Care Co.",
  category: "Luxury Leather Restoration",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "The Leather Care Co.",
    title: "The Leather Care Co. | Luxury Leather Restoration",
    description:
      "Pamper. Protect. Preserve. Expert restoration for luxury leather bags, shoes and accessories.",
    images: [
      {
        url: "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg",
        width: 1200,
        height: 630,
        alt: "The Leather Care Co. luxury leather restoration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Leather Care Co.",
    description:
      "Luxury leather restoration and care for exceptional pieces.",
    images: [
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} bg-[#F8F5EF] text-[#181818] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}