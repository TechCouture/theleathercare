"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  desktop: string;
  mobile: string;
  alt: string;
  cta: {
    primary: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
};

const SLIDE_DURATION = 7000;
const TRANSITION_DURATION = 850;

const slides: Slide[] = [
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885166/1_2_o1jqgg.jpg",
    alt: "Luxury Louis Vuitton handbag restoration by The Leather Care Co.",
    cta: {
      primary: {
        text: "Book Free Assessment",
        href: "https://wa.me/918076959966?text=I'd%20like%20a%20free%20assessment",
      },
      secondary: {
        text: "WhatsApp Us",
        href: "https://wa.me/918076959966?text=Hello%2C%20I'd%20like%20to%20know%20more",
      },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885169/2_1_oan6qw.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885166/2_2_undbay.jpg",
    alt: "Professional luxury shoe restoration.",
    cta: {
      primary: {
        text: "Book Restoration",
        href: "https://wa.me/918076959966?text=I'd%20like%20to%20book%20a%20restoration",
      },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885169/3_1_ca5q4f.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885167/3_2_jgmi7g.jpg",
    alt: "Hermes Kelly luxury leather restoration.",
    cta: {
      primary: {
        text: "Explore Services",
        href: "#services",
      },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/4_1_quzd9o.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885167/4_2_oophxb.jpg",
    alt: "The Leather Care Co. brand story.",
    cta: {
      primary: {
        text: "Discover Our Story",
        href: "#about",
      },
    },
  },
  {
    desktop:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/5_1_jgpped.jpg",
    mobile:
      "https://res.cloudinary.com/auvmsf0q/image/upload/v1784885166/5_2_ldnumb.jpg",
    alt: "The Essential Leather Care Kit.",
    cta: {
      primary: {
        text: "Order Now",
        href: "https://wa.me/918076959966?text=I'd%20like%20to%20order%20the%20leather%20care%20kit",
      },
      secondary: {
        text: "Learn More",
        href: "#care-kit",
      },
    },
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leavingSlide, setLeavingSlide] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 30);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const goToSlide = useCallback(
    (nextSlide: number) => {
      if (nextSlide === currentSlide) return;

      setLeavingSlide(currentSlide);
      setCurrentSlide(nextSlide);
    },
    [currentSlide]
  );

  useEffect(() => {
    if (leavingSlide === null) return;

    const timeout = window.setTimeout(() => {
      setLeavingSlide(null);
    }, TRANSITION_DURATION);

    return () => window.clearTimeout(timeout);
  }, [leavingSlide]);

  useEffect(() => {
    if (isPaused) return;

    const timeout = window.setTimeout(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timeout);
  }, [currentSlide, goToSlide, isPaused]);

  const visibleSlides = Array.from(
    new Set(
      [leavingSlide, currentSlide].filter(
        (slide): slide is number => slide !== null
      )
    )
  );

  const headerIsLight = isScrolled || mobileMenuOpen;

  return (
    <section
      id="top"
      className="relative h-[90svh] min-h-[560px] w-full overflow-hidden bg-[#181818] md:h-screen md:min-h-[650px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <style jsx global>{`
        @keyframes tlcc-image-zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.025);
          }
        }

        /* Desktop receives a more restrained, premium zoom. */
        @media (min-width: 768px) {
          @keyframes tlcc-image-zoom {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.012);
            }
          }
        }

        @keyframes tlcc-cta-enter {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes tlcc-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 1ms !important;
          }
        }
      `}</style>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          headerIsLight
            ? "border-[#EAE3D8] bg-[#F8F5EF]/95 text-[#181818] shadow-[0_2px_18px_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "border-white/20 bg-gradient-to-b from-black/35 to-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10 lg:px-14">
          <a
            href="#top"
            aria-label="The Leather Care Co. home"
            className="relative z-[60] grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-[#181818]/10 bg-[#F8F5EF] shadow-[0_2px_12px_rgba(0,0,0,0.16)] md:h-12 md:w-12"
          >
            <Image
              src="https://res.cloudinary.com/auvmsf0q/image/upload/v1784375294/logo_kqemjd.png"
              alt="The Leather Care Co."
              fill
              priority
              sizes="48px"
              className="object-cover"
            />
          </a>

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary navigation"
          >
            {[
              ["Home", "#top"],
              ["Services", "#services"],
              ["Restoration", "#restoration"],
              ["Before & After", "#before-after"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[10px] font-medium uppercase tracking-[0.15em] transition-opacity hover:opacity-60"
              >
                {label}
              </a>
            ))}

            <a
              href="https://wa.me/918076959966?text=I'd%20like%20a%20free%20assessment"
              className={`ml-2 inline-flex h-11 items-center justify-center px-5 text-[10px] font-medium uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${
                headerIsLight
                  ? "bg-[#181818] text-white hover:bg-[#B38A4A]"
                  : "bg-white text-[#181818] hover:bg-[#F8F5EF]"
              }`}
            >
              Book Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="text-[10px] font-medium uppercase tracking-[0.18em] md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-[#EAE3D8] bg-[#F8F5EF] px-5 pb-7 pt-3 text-[#181818] md:hidden"
            aria-label="Mobile navigation"
          >
            {[
              ["Home", "#top"],
              ["Services", "#services"],
              ["Restoration", "#restoration"],
              ["Before & After", "#before-after"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b border-[#EAE3D8] py-4 font-[family-name:var(--font-cormorant)] text-2xl"
              >
                {label}
              </a>
            ))}

            <a
              href="https://wa.me/918076959966?text=I'd%20like%20a%20free%20assessment"
              className="mt-6 flex h-14 items-center justify-center bg-[#181818] px-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white"
            >
              Book Free Assessment
            </a>
          </nav>
        )}
      </header>

      {isDesktop !== null &&
        visibleSlides.map((slideIndex) => {
          const slide = slides[slideIndex];
          const isActive = slideIndex === currentSlide;

          return (
            <div
              key={slide.desktop}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-[850ms] ease-out ${
                isActive
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 overflow-hidden"
                style={
                  isActive
                    ? {
                        animation: `tlcc-image-zoom ${SLIDE_DURATION}ms ease-out forwards`,
                      }
                    : undefined
                }
              >
                <Image
                  src={isDesktop ? slide.desktop : slide.mobile}
                  alt={isActive ? slide.alt : ""}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              {isActive && (
                <div
                  className="absolute inset-x-4 bottom-16 z-20 flex flex-col gap-2 sm:inset-x-auto sm:left-1/2 sm:flex-row sm:-translate-x-1/2 sm:gap-3 md:bottom-14"
                  style={{
                    animation:
                      "tlcc-cta-enter 650ms cubic-bezier(.22,.61,.36,1) 180ms both",
                  }}
                >
                  <a
                    href={slide.cta.primary.href}
                    className="flex h-14 items-center justify-center bg-[#181818] px-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A] sm:px-8"
                  >
                    {slide.cta.primary.text}
                  </a>

                  {slide.cta.secondary && (
                    <a
                      href={slide.cta.secondary.href}
                      className="flex h-14 items-center justify-center border border-white/75 bg-black/10 px-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-[2px] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#181818] sm:px-8"
                    >
                      {slide.cta.secondary.text}
                    </a>
                  )}
                </div>
              )}
            </div>
          );
        })}

      <div className="absolute inset-x-0 bottom-5 z-30 flex justify-center gap-2 px-5 md:bottom-7 md:justify-end md:px-10 lg:px-14">
        {slides.map((slide, index) => (
          <button
            key={slide.desktop}
            type="button"
            onClick={() => goToSlide(index)}
            className="relative h-5 w-9 md:w-12"
            aria-label={`Show hero campaign ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
          >
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/45" />

            {index === currentSlide && (
              <span
                key={currentSlide}
                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white"
                style={{
                  animation: `tlcc-progress ${SLIDE_DURATION}ms linear forwards`,
                  animationPlayState: isPaused ? "paused" : "running",
                  transformOrigin: "left",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}