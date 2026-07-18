import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Leather Care Co. – Premium Leather Restoration",
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