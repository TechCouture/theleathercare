"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Slide {
  desktop: string;
  mobile: string;
  alt: string;
  cta: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}

const slides: Slide[] = [
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885166/1_2_o1jqgg.jpg",
    alt: "Luxury Louis Vuitton Collection – Black LV and Red LV handbags",
    cta: {
      primary: { text: "Book Free Assessment", href: "https://wa.me/918076959966?text=I'd%20like%20a%20free%20assessment" },
      secondary: { text: "WhatsApp Us", href: "https://wa.me/918076959966?text=Hello%2C%20I'd%20like%20to%20know%20more" },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885169/2_1_oan6qw.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885166/2_2_undbay.jpg",
    alt: "Professional luxury shoe restoration",
    cta: {
      primary: { text: "Book Restoration", href: "https://wa.me/918076959966?text=I'd%20like%20to%20book%20a%20restoration" },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885169/3_1_ca5q4f.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885167/3_2_jgmi7g.jpg",
    alt: "Hermès Kelly – Expert leather care for luxury treasures",
    cta: {
      primary: { text: "Explore Services", href: "#services" },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/4_1_quzd9o.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885167/4_2_oophxb.jpg",
    alt: "Birkin with model – The Leather Care Co. brand story",
    cta: {
      primary: { text: "Discover Our Story", href: "#about" },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/5_1_jgpped.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885166/5_2_ldnumb.jpg",
    alt: "The Essential Leather Care Kit",
    cta: {
      primary: { text: "Order Now", href: "https://wa.me/918076959966?text=I'd%20like%20to%20order%20the%20leather%20care%20kit" },
      secondary: { text: "Learn More", href: "#care-kit" },
    },
  },
];

const SLIDE_DURATION = 7000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tick = 50;
    const step = (tick / SLIDE_DURATION) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        return next >= 100 ? 100 : next;
      });
    }, tick);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-[#181818]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1.4s] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Mobile image – full width, object‑contain so nothing is cut off */}
            <Image
              src={slide.mobile}
              alt={slide.alt}
              fill
              className="object-contain md:hidden"
              sizes="100vw"
              priority={index === 0}
            />
            {/* Desktop image */}
            <Image
              src={slide.desktop}
              alt={slide.alt}
              fill
              className="object-contain hidden md:block"
              sizes="100vw"
              priority={index === 0}
            />
          </div>

          {/* CTA Buttons – same as before, positioned above the image bottom */}
          {index === current && (
            <div className="absolute bottom-12 md:bottom-20 left-0 right-0 z-20 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 animate-[fadeInUp_1s_ease-out_0.3s_both]">
              <a
                href={slide.cta.primary.href}
                className="inline-block bg-[#181818] text-white h-14 px-10 text-sm uppercase tracking-[0.2em] hover:bg-[#2a2a2a] hover:-translate-y-0.5 transition-all duration-400 ease-out flex items-center justify-center font-[family-name:var(--font-inter)]"
              >
                {slide.cta.primary.text}
              </a>
              {slide.cta.secondary && (
                <a
                  href={slide.cta.secondary.href}
                  className="inline-block border border-white/60 text-white h-14 px-10 text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-400 ease-out flex items-center justify-center font-[family-name:var(--font-inter)]"
                >
                  {slide.cta.secondary.text}
                </a>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Progress indicators – unchanged */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="group relative h-[2px] w-10 md:w-16 overflow-hidden bg-white/30"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className="absolute inset-0 bg-white transition-all duration-75 ease-linear"
              style={{ width: index === current ? `${progress}%` : "0%" }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}