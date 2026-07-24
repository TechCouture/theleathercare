import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ====== HERO SLIDER ====== */}
      <HeroSlider />

      {/* ====== OUR SERVICES ====== */}
      <section id="services" className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-16 font-[family-name:var(--font-cormorant)]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Bag Restoration",
                desc: "Complete leather repair, colour restoration, and spa treatments for luxury handbags.",
              },
              {
                title: "Shoe Repair",
                desc: "Expert sole replacement, stitching, and refinishing for designer footwear.",
              },
              {
                title: "Leather Spa",
                desc: "Deep cleaning, conditioning, and protection for all your leather treasures.",
              },
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="h-[1px] w-12 bg-[#B38A4A] mb-6 transition-all duration-500 group-hover:w-20" />
                <h3 className="text-xl md:text-2xl font-light mb-3 font-[family-name:var(--font-cormorant)]">
                  {service.title}
                </h3>
                <p className="text-[#6E6E6E] leading-relaxed font-[family-name:var(--font-inter)] font-light">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="py-24 md:py-32 px-4 bg-[#FCFAF8]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
            Why The Leather Care Co.
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-16 font-[family-name:var(--font-cormorant)]">
            Craftsmanship You Can Trust
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Years Experience" },
              { value: "5,000+", label: "Restorations" },
              { value: "50+", label: "Luxury Brands" },
              { value: "100%", label: "Hand Finished" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-light text-[#B38A4A] mb-2 font-[family-name:var(--font-cormorant)]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#6E6E6E] uppercase tracking-[0.15em] font-[family-name:var(--font-inter)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LUXURY BRANDS WE RESTORE ====== */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
            Trusted By Owners Of
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-16 font-[family-name:var(--font-cormorant)]">
            Luxury Brands We Restore
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-lg md:text-xl text-[#6E6E6E] font-light font-[family-name:var(--font-cormorant)]">
            {[
              "Louis Vuitton",
              "Hermès",
              "Chanel",
              "Gucci",
              "Dior",
              "Prada",
              "YSL",
              "Fendi",
              "Burberry",
              "Bottega Veneta",
              "Coach",
              "Balenciaga",
            ].map((brand) => (
              <span
                key={brand}
                className="hover:text-[#B38A4A] transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BEFORE & AFTER GALLERY ====== */}
      <section id="before-after" className="py-24 md:py-32 px-4 bg-[#FCFAF8]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
            The Transformation
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-16 font-[family-name:var(--font-cormorant)]">
            Before & After
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 md:h-[28rem] overflow-hidden group">
              <Image
                src="https://res.cloudinary.com/auvmsf0q/image/upload/v1784885169/3_1_ca5q4f.jpg"
                alt="Before restoration"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute top-4 left-4 bg-[#181818] text-white text-xs px-3 py-1.5 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                Before
              </span>
            </div>
            <div className="relative h-80 md:h-[28rem] overflow-hidden group">
              <Image
                src="https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/1_1_ptz7hy.jpg"
                alt="After restoration"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute top-4 left-4 bg-[#B38A4A] text-white text-xs px-3 py-1.5 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                After
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== LEATHER CARE KIT ====== */}
      <section id="care-kit" className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="relative h-80 md:h-[32rem] w-full md:w-1/2 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/auvmsf0q/image/upload/v1784885168/5_1_jgpped.jpg"
                alt="The Essential Leather Care Kit"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
                Leather Care Products
              </p>
              <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-6 font-[family-name:var(--font-cormorant)]">
                The Essential Leather Care Kit
              </h2>
              <p className="text-[#6E6E6E] leading-relaxed mb-8 font-[family-name:var(--font-inter)] font-light">
                Professionally formulated leather care essentials designed to
                clean, nourish and protect luxury leather goods while preserving
                their beauty for years.
              </p>
              <a
                href="https://wa.me/918076959966?text=I'd%20like%20to%20order%20the%20leather%20care%20kit"
                className="inline-block bg-[#181818] text-white h-14 px-10 text-sm uppercase tracking-[0.2em] hover:bg-[#2a2a2a] hover:-translate-y-0.5 transition-all duration-400 ease-out flex items-center justify-center font-[family-name:var(--font-inter)]"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CUSTOMER TESTIMONIALS ====== */}
      <section className="py-24 md:py-32 px-4 bg-[#FCFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
            Client Love
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-16 font-[family-name:var(--font-cormorant)]">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              {
                name: "Prachi Kathuria",
                text: "Thank you so much team Leather Care for giving my bag this amazing color change, it looks fab in the new color. Great finishing, outstanding service with complete details on every step of the process via photos and videos! I am so happy with my new bag🫶🏻",
              },
              {
                name: "Mahima M",
                text: "Absolutely thrilled with the recolouring service provided by Leather Care Co for my Prada bag! The bag looks brand new, and the color match is flawless. The attention to detail and quality of work are exceptional.",
              },
              {
                name: "Alisha Sharma",
                text: "The Leather Care Co did a fantastic job restoring my YSL bag! It had some noticeable wear and tear, but now it looks brand new. The team's expertise in handling luxury bags is evident.",
              },
              {
                name: "Ananya Patel",
                text: "Kudos to Leather Care Co for their outstanding Chanel bag cleaning and spa service! My bag was looking dull and dirty, but after their service, it looks as if it just came from the store.",
              },
            ].map((review) => (
              <div key={review.name} className="bg-white p-8 md:p-10">
                <p className="text-[#6E6E6E] italic leading-relaxed mb-4 font-[family-name:var(--font-inter)] font-light">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-sm font-medium text-[#B38A4A] uppercase tracking-wider font-[family-name:var(--font-inter)]">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
            Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-16 font-[family-name:var(--font-cormorant)]">
            Frequently Asked
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How long does a typical bag restoration take?",
                a: "Most restorations are completed within 7–14 business days, depending on the complexity. We'll give you a precise timeline during inspection.",
              },
              {
                q: "Do you offer free pickup and delivery?",
                a: "Yes, we offer complimentary pickup and delivery across most major cities in India. Contact us to check availability in your area.",
              },
              {
                q: "Can you restore colour on faded leather?",
                a: "Absolutely. Our colour restoration process precisely matches the original shade using imported pigments and professional techniques.",
              },
              {
                q: "Is my luxury bag insured while in your care?",
                a: "Yes, every item is fully insured from the moment we collect it until it's returned to you.",
              },
            ].map((faq, i) => (
              <details key={i} className="group border-b border-[#EAE3D8] pb-6 cursor-pointer">
                <summary className="text-lg font-light tracking-[0.03em] flex justify-between items-center font-[family-name:var(--font-cormorant)] marker:content-none">
                  {faq.q}
                  <span className="text-[#B38A4A] text-xl ml-4 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#6E6E6E] leading-relaxed font-[family-name:var(--font-inter)] font-light">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BOOK YOUR RESTORATION ====== */}
      <section className="py-24 md:py-32 px-4 bg-[#181818] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-[#B38A4A] mb-4 font-[family-name:var(--font-inter)]">
            Begin Your Restoration
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.03em] mb-6 font-[family-name:var(--font-cormorant)]">
            Ready to Restore Your Leather Treasure?
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-10 font-[family-name:var(--font-inter)] font-light">
            Share a few details and our experts will provide a personalized
            assessment for your luxury piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918076959966?text=I'd%20like%20a%20free%20assessment"
              className="inline-block bg-[#B38A4A] text-white h-14 px-10 text-sm uppercase tracking-[0.2em] hover:bg-[#9a7538] hover:-translate-y-0.5 transition-all duration-400 ease-out flex items-center justify-center font-[family-name:var(--font-inter)]"
            >
              Book Free Assessment
            </a>
            <a
              href="tel:+918076959966"
              className="inline-block border border-white/30 text-white h-14 px-10 text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-400 ease-out flex items-center justify-center font-[family-name:var(--font-inter)]"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ====== PREMIUM FOOTER ====== */}
      <footer className="bg-[#181818] text-neutral-400 border-t border-neutral-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div>
              <h4 className="text-white text-lg font-light tracking-wider mb-4 font-[family-name:var(--font-cormorant)]">
                The Leather Care Co.
              </h4>
              <p className="text-sm leading-relaxed font-[family-name:var(--font-inter)] font-light">
                Premium leather restoration services trusted by luxury handbag
                owners across India.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4 font-[family-name:var(--font-inter)]">
                Contact
              </h4>
              <div className="space-y-2 text-sm font-[family-name:var(--font-inter)] font-light">
                <a href="tel:+918076959966" className="block hover:text-white transition-colors">
                  +91 8076959966
                </a>
                <a href="mailto:info@theleathercareco.com" className="block hover:text-white transition-colors">
                  info@theleathercareco.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4 font-[family-name:var(--font-inter)]">
                Links
              </h4>
              <div className="space-y-2 text-sm font-[family-name:var(--font-inter)] font-light">
                {["Services", "Restoration", "Before & After", "About", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className="block hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-[0.2em] mb-4 font-[family-name:var(--font-inter)]">
                Policies
              </h4>
              <div className="space-y-2 text-sm font-[family-name:var(--font-inter)] font-light">
                {["Privacy Policy", "Terms & Conditions", "Disclaimer", "Returns"].map(
                  (policy) => (
                    <a
                      key={policy}
                      href={`/${policy.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className="block hover:text-white transition-colors"
                    >
                      {policy}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-800 pt-8 text-center text-xs uppercase tracking-[0.15em] font-[family-name:var(--font-inter)]">
            &copy; {new Date().getFullYear()} CE Enterprises Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ====== WHATSAPP FLOATING BUTTON ====== */}
      <a
        href="https://wa.me/918076959966?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 shadow-lg hover:bg-green-600 transition z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </main>
  );
}