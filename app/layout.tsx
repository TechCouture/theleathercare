import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "The Leather Care Co. | Luxury Leather Restoration",
  description:
    "Expert restoration for luxury leather bags, shoes, wallets, jackets and accessories. Trusted restoration specialists across India.",

  keywords: [
    "Leather Repair",
    "Bag Restoration",
    "Luxury Bag Repair",
    "Luxury Shoe Repair",
    "Leather Spa",
    "Leather Care",
    "Louis Vuitton Repair",
    "Hermès Repair",
    "Chanel Repair",
    "Gucci Repair",
    "Luxury Restoration",
  ],

  metadataBase: new URL("https://theleathercareco.com"),

  openGraph: {
    title: "The Leather Care Co. | Luxury Leather Restoration",
    description:
      "Pamper. Protect. Preserve. Premium restoration services for luxury leather bags, shoes and accessories.",
    url: "https://theleathercareco.com",
    siteName: "The Leather Care Co.",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg",
        width: 1200,
        height: 630,
        alt: "The Leather Care Co.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Leather Care Co.",
    description:
      "Luxury Leather Repair & Restoration Specialists.",
    images: [
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
        className={`${cormorant.variable} ${inter.variable} font-sans bg-[#F8F5EF] text-[#181818] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}