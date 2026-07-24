import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Leather Care Co.",
  description:
    "Expert restoration for luxury leather bags, shoes, wallets, and jackets. Serving India with over 20 years of craftsmanship.",
  openGraph: {
    title: "The Leather Care Co. – Premium Leather Restoration",
    description:
      "Restore your luxury leather items. Free pick‑up, expert repair, and hand‑finished quality.",
    images: ["/images/hero.jpg"], // you can change to a dedicated OG image
    url: "https://theleathercareco.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Leather Care Co. — Luxury Leather Restoration",
  description:
    "Expert restoration for luxury leather bags, shoes, and accessories. Trusted by owners of Louis Vuitton, Hermès, Chanel, and more across India.",
  openGraph: {
    title: "The Leather Care Co. — Luxury Leather Restoration",
    description:
      "Pamper. Protect. Preserve. Premium leather restoration services for your most cherished pieces.",
    images: ["https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg"],
    url: "https://theleathercareco.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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