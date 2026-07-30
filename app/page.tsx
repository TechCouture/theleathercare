import HeroSlider from "@/components/HeroSlider";

const services = [
  {
    number: "01",
    title: "Luxury Bag Restoration",
    description:
      "Thoughtful cleaning, colour restoration, leather repair and finishing for your most treasured handbags.",
  },
  {
    number: "02",
    title: "Shoe Restoration",
    description:
      "Specialist care for designer footwear, from colour renewal and refinishing to sole and zip replacement.",
  },
  {
    number: "03",
    title: "Leather Spa",
    description:
      "A restorative deep-cleaning and conditioning ritual for leather that deserves a longer life.",
  },
];

const process = [
  {
    number: "01",
    title: "Share your piece",
    description:
      "Send us clear photographs on WhatsApp for an initial expert assessment.",
  },
  {
    number: "02",
    title: "Receive a tailored plan",
    description:
      "We recommend the right restoration, provide a transparent quote, and confirm your timeline.",
  },
  {
    number: "03",
    title: "Restored with care",
    description:
      "Your piece is treated by specialists, documented throughout, and returned ready for its next chapter.",
  },
];

const pricingGroups = [
  {
    title: "Clean",
    description:
      "Cleaning and conditioning service that covers both interior and exterior.",
    items: [
      ["Bags - General cleaning", "₹1,500 - ₹5,000"],
      ["Bags - Deep cleaning", "TBD"],
      ["Belt", "₹1,200 - ₹3,000"],
      ["Wallet", "₹1,500 - ₹3,500"],
      ["All types of footwear", "₹1,000 - ₹4,000"],
    ],
  },
  {
    title: "Retouch",
    description:
      "Small repair services for bags, accessories, footwear and luggage.",
    items: [
      ["Bags", "₹1,100 - ₹4,000"],
      ["Belt", "₹1,000 - ₹3,000"],
      ["Wallet", "₹1,200 - ₹3,500"],
      ["Footwear", "₹1,000 - ₹3,500"],
      ["Luggage", "₹2,500 - ₹7,500"],
    ],
  },
  {
    title: "Restore",
    description:
      "Heavy restoration for products that require multiple specialist services.",
    items: [
      ["Bags", "₹2,500 - ₹8,000"],
      ["Belt", "₹2,000 - ₹5,000"],
      ["Wallet", "₹2,500 - ₹6,000"],
      ["Footwear", "₹2,000 - ₹6,500"],
    ],
  },
  {
    title: "Recolour",
    description:
      "Colour restoration and recolouring for complete leather products.",
    items: [
      ["Bags", "₹2,000 - ₹10,000"],
      ["Belt", "₹1,800 - ₹7,000"],
      ["Wallet", "₹1,800 - ₹5,500"],
      ["Footwear", "₹2,000 - ₹7,000"],
    ],
  },
];

const brands = [
  "Louis Vuitton",
  "Hermès",
  "Chanel",
  "Gucci",
  "Dior",
  "Prada",
  "Saint Laurent",
  "Fendi",
  "Bottega Veneta",
  "Loewe",
  "Burberry",
  "Balenciaga",
];

const testimonials = [
  {
    name: "Prachi Kathuria",
    service: "Colour restoration",
    text: "The finishing was exceptional and every stage was shared with such care. My bag feels entirely new, yet completely like mine.",
  },
  {
    name: "Mahima M.",
    service: "Prada bag restoration",
    text: "The colour match was flawless. The attention to detail and quality of the work are truly exceptional.",
  },
  {
    name: "Alisha Sharma",
    service: "YSL bag restoration",
    text: "The team brought my bag back beautifully. Their expertise in handling luxury leather is evident in every detail.",
  },
];

const faqs = [
  {
    question: "How long does a typical restoration take?",
    answer:
      "Most restorations are completed within 7-14 business days. After inspecting your piece, we will confirm the precise timeline and recommended treatment.",
  },
  {
    question: "Do you offer collection and delivery?",
    answer:
      "Yes. We offer collection and delivery across selected major cities in India. Please contact us to confirm availability in your location.",
  },
  {
    question: "Can faded or damaged colour be restored?",
    answer:
      "Yes. Our specialists carefully match and rebuild colour in fine layers to restore depth, consistency, and the original character of your leather.",
  },
  {
    question: "Is my luxury item safe while in your care?",
    answer:
      "Every item is documented when received and handled through our considered restoration process until it is safely returned to you.",
  },
];

const footerNavigation = [
  ["Home", "#top"],
  ["Services", "#services"],
  ["Pricing", "#pricing"],
  ["Restoration", "#restoration"],
  ["Before & After", "#before-after"],
  ["About Us", "#about"],
  ["Contact", "#contact"],
];

const eyebrow =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-[#B38A4A]";

const heading =
  "font-[family-name:var(--font-cormorant)] font-medium tracking-[-0.04em] text-[#181818]";

const primaryButton =
  "inline-flex h-14 items-center justify-center bg-[#181818] px-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2A2A2A]";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F8F5EF] text-[#181818]">
      <HeroSlider />

      <section
        id="services"
        className="scroll-mt-20 px-5 py-20 md:px-10 md:py-[140px] lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-b border-[#EAE3D8] pb-12 md:grid-cols-[0.85fr_1.4fr] md:gap-16 md:pb-16">
            <p className={eyebrow}>Our expertise</p>

            <div>
              <h1
                className={`${heading} max-w-3xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl`}
              >
                Exceptional care for the pieces that carry your story.
              </h1>

              <p className="mt-6 max-w-xl text-[15px] font-light leading-8 text-[#6E6E6E]">
                The Leather Care Co. restores the beauty, character and
                longevity of luxury leather goods through thoughtful,
                specialist craftsmanship.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.number}
                className={`py-10 md:px-10 md:py-14 ${
                  index > 0
                    ? "border-t border-[#EAE3D8] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <p className="mb-16 text-[10px] tracking-[0.18em] text-[#B38A4A] md:mb-24">
                  {service.number}
                </p>

                <h2 className={`${heading} text-3xl leading-none md:text-4xl`}>
                  {service.title}
                </h2>

                <p className="mt-5 max-w-xs text-sm font-light leading-7 text-[#6E6E6E]">
                  {service.description}
                </p>

                <a
                  href="https://wa.me/918076959966?text=I'd%20like%20to%20know%20more%20about%20your%20services"
                  className="mt-8 inline-flex border-b border-[#181818] pb-1 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-[#B38A4A] hover:text-[#B38A4A]"
                >
                  Enquire now <span className="ml-3">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="restoration"
        className="scroll-mt-20 bg-[#181818] px-5 py-20 text-white md:px-10 md:py-[140px] lg:px-14"
      >
        <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div>
            <p className={eyebrow}>Our restoration process</p>

            <h2 className="mt-5 max-w-md font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
              A considered process from first photograph to final polish.
            </h2>

            <p className="mt-6 max-w-sm text-[15px] font-light leading-8 text-white/65">
              We make restoration feel simple, transparent and deeply personal.
            </p>
          </div>

          <div className="border-t border-white/20">
            {process.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-[40px_1fr] gap-4 border-b border-white/20 py-8 md:grid-cols-[64px_1fr] md:gap-7 md:py-10"
              >
                <p className="pt-1 text-[10px] tracking-[0.18em] text-[#B38A4A]">
                  {step.number}
                </p>

                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm font-light leading-7 text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-20 bg-[#FCFAF8] px-5 py-20 md:px-10 md:py-[140px] lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-b border-[#EAE3D8] pb-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:pb-16">
            <p className={eyebrow}>Service pricing</p>

            <div>
              <h2
                className={`${heading} max-w-3xl text-4xl leading-[1.02] md:text-6xl`}
              >
                Considered care, transparently priced.
              </h2>

              <p className="mt-6 max-w-xl text-[15px] font-light leading-8 text-[#6E6E6E]">
                Every item is individually assessed by our specialists. The
                following ranges provide a helpful guide before your
                personalised quote.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
            {pricingGroups.map((group) => (
              <article
                key={group.title}
                className="border border-[#EAE3D8] bg-white p-7 md:p-10"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B38A4A]">
                  The Leather Care Co.
                </p>

                <h3
                  className={`${heading} mt-4 text-4xl leading-none md:text-5xl`}
                >
                  {group.title}
                </h3>

                <p className="mt-4 max-w-md text-sm font-light leading-7 text-[#6E6E6E]">
                  {group.description}
                </p>

                <div className="mt-8 border-t border-[#EAE3D8]">
                  {group.items.map(([service, price]) => (
                    <div
                      key={service}
                      className="flex items-start justify-between gap-5 border-b border-[#EAE3D8] py-4"
                    >
                      <span className="text-sm font-light text-[#3E3A36]">
                        {service}
                      </span>

                      <span className="shrink-0 text-right text-[11px] font-medium tracking-[0.04em] text-[#181818]">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid overflow-hidden border border-[#181818] bg-[#181818] text-white md:grid-cols-2">
            <div className="p-7 md:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B38A4A]">
                Collection & delivery
              </p>

              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-medium tracking-[-0.04em]">
                Across India.
              </h3>

              <div className="mt-8 space-y-4 border-t border-white/20 pt-6">
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-white/65">Only pickup or drop</span>
                  <span className="font-medium">₹250</span>
                </div>

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-white/65">Pickup and drop both ways</span>
                  <span className="font-medium">₹500</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 bg-[#242424] p-7 md:border-l md:border-t-0 md:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B38A4A]">
                Important notes
              </p>

              <ul className="mt-5 space-y-3 text-sm font-light leading-6 text-white/65">
                <li>18% GST is applicable in addition to service prices.</li>
                <li>TBD pricing is determined after assessment.</li>
                <li>For more than two services, charges apply separately.</li>
                <li>Prices may vary according to size, brand and material.</li>
                <li>In-store self pickup and drop-off are free of charge.</li>
                <li>Standard cleaning takes approximately 7-8 working days.</li>
                <li>Final pricing depends on the precise service required.</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/918076959966?text=I'd%20like%20a%20pricing%20assessment%20for%20my%20leather%20item"
              className={primaryButton}
            >
              Request a personalised quote
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-20 bg-[#F1ECE3] px-5 py-20 md:px-10 md:py-[140px] lg:px-14"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-20">
          <div>
            <p className={eyebrow}>The Leather Care Co.</p>

            <h2
              className={`${heading} mt-5 max-w-3xl text-4xl leading-[1.02] md:text-6xl`}
            >
              Craftsmanship, patience, and a deep respect for the original.
            </h2>
          </div>

          <div className="md:pt-2">
            <p className="max-w-xl text-[15px] font-light leading-8 text-[#5E5A56]">
              Every restoration is treated as an individual piece of work. Our
              specialists preserve the authenticity of your leather while
              renewing its colour, texture and finish with measured care.
            </p>

            <div className="mt-10 grid grid-cols-2 border-t border-[#D9D0C4] pt-8">
              <div className="border-r border-[#D9D0C4] pr-5">
                <p
                  className={`${heading} text-4xl text-[#B38A4A] md:text-5xl`}
                >
                  50+
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#6E6E6E]">
                  Luxury brands restored
                </p>
              </div>

              <div className="pl-5">
                <p
                  className={`${heading} text-4xl text-[#B38A4A] md:text-5xl`}
                >
                  5,000+
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#6E6E6E]">
                  Pieces restored
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center md:px-10 md:py-[140px] lg:px-14">
        <div className="mx-auto max-w-5xl">
          <p className={eyebrow}>Entrusted to us</p>

          <h2 className={`${heading} mt-5 text-4xl md:text-6xl`}>
            Luxury deserves specialised care.
          </h2>

          <div className="mt-14 flex flex-wrap justify-center gap-x-7 gap-y-5 border-y border-[#EAE3D8] py-9 md:mt-[72px] md:gap-x-12">
            {brands.map((brand) => (
              <span
                key={brand}
                className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[#5E5A56] transition-colors hover:text-[#B38A4A] md:text-2xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="before-after"
        className="scroll-mt-20 bg-[#FCFAF8] px-5 py-20 md:px-10 md:py-[140px] lg:px-14"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            <div>
              <p className={eyebrow}>Before & After</p>

              <h2
                className={`${heading} mt-5 text-4xl leading-[1.02] md:text-6xl`}
              >
                Renewal that honours the history of every piece.
              </h2>
            </div>

            <div className="border-[#EAE3D8] md:border-l md:pl-14">
              <p className="max-w-xl text-[15px] font-light leading-8 text-[#6E6E6E]">
                Every mark tells a story. Our work is not about making luxury
                leather look generic. It is about carefully restoring beauty
                while retaining the character that made it yours.
              </p>

              <a
                href="https://wa.me/918076959966?text=I'd%20like%20to%20see%20before%20and%20after%20restoration%20examples"
                className={`${primaryButton} mt-8`}
              >
                View restoration examples
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden bg-[#EAE3D8] md:mt-16 md:grid-cols-3">
            {[
              "Colour renewal",
              "Leather spa",
              "Handle & hardware care",
            ].map((service, index) => (
              <div
                key={service}
                className="bg-[#FCFAF8] px-7 py-10 md:px-10 md:py-14"
              >
                <p className="text-[10px] tracking-[0.18em] text-[#B38A4A]">
                  0{index + 1}
                </p>
                <p className={`${heading} mt-10 text-3xl`}>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="care-kit"
        className="scroll-mt-20 bg-[#181818] px-5 py-20 text-white md:px-10 md:py-[120px] lg:px-14"
      >
        <div className="mx-auto grid max-w-[1440px] items-end gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className={eyebrow}>At-home care</p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
              The Essential Leather Care Kit.
            </h2>
          </div>

          <div>
            <p className="max-w-md text-[15px] font-light leading-8 text-white/65">
              Professionally selected essentials designed to clean, nourish and
              protect the leather pieces you use every day.
            </p>

            <a
              href="https://wa.me/918076959966?text=I'd%20like%20to%20order%20the%20leather%20care%20kit"
              className="mt-8 inline-flex h-14 items-center justify-center bg-white px-8 text-[10px] font-medium uppercase tracking-[0.18em] text-[#181818] transition duration-300 hover:-translate-y-0.5 hover:bg-[#D9C6A5]"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#F1ECE3] px-5 py-20 text-center md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-3xl">
          <p className={eyebrow}>Pre-loved luxury</p>

          <h2 className={`${heading} mt-5 text-4xl leading-[1.02] md:text-6xl`}>
            Curated vintage and pre-loved treasures.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-8 text-[#5E5A56]">
            Discover a carefully selected collection of pre-owned luxury pieces
            at <span className="font-medium text-[#181818]">Confidential Couture</span>.
            Every item is authenticated, restored, and ready for a new story.
          </p>

          <a
            href="https://confidentialcouture.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-14 items-center justify-center bg-[#181818] px-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B38A4A]"
          >
            Explore the collection →
          </a>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-[140px] lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className={eyebrow}>Words from our clients</p>

              <h2 className={`${heading} mt-5 text-4xl md:text-6xl`}>
                Trusted with the exceptional.
              </h2>
            </div>

            <p className="max-w-xs text-sm font-light leading-7 text-[#6E6E6E]">
              Quiet care, thoughtful communication, and craftsmanship you can
              see in the final detail.
            </p>
          </div>

          <div className="mt-12 grid border-t border-[#EAE3D8] md:mt-16 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className={`py-10 md:px-10 md:py-12 ${
                  index > 0
                    ? "border-t border-[#EAE3D8] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <p className="font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-[#2B2926]">
                  “{testimonial.text}”
                </p>

                <div className="mt-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#B38A4A]">
                    {testimonial.name}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#6E6E6E]">
                    {testimonial.service}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1ECE3] px-5 py-20 md:px-10 md:py-[140px] lg:px-14">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
          <div>
            <p className={eyebrow}>A considered process</p>

            <h2
              className={`${heading} mt-5 text-4xl leading-[1.02] md:text-6xl`}
            >
              Questions, answered.
            </h2>

            <p className="mt-6 max-w-sm text-sm font-light leading-7 text-[#6E6E6E]">
              We are here to make caring for a treasured piece feel simple and
              transparent.
            </p>
          </div>

          <div>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-t border-[#D9D0C4] py-6 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-tight marker:content-none md:text-3xl">
                  <span>{faq.question}</span>

                  <span className="mt-0.5 font-[family-name:var(--font-inter)] text-xl font-light text-[#B38A4A] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-xl pt-4 text-sm font-light leading-7 text-[#6E6E6E]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-20 bg-[#181818] px-5 py-20 text-center text-white md:px-10 md:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-3xl">
          <p className={eyebrow}>Begin your restoration</p>

          <h2 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Give your leather treasure the care it deserves.
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-[15px] font-light leading-8 text-white/65">
            Share a few clear photographs of your piece and our specialists
            will provide a tailored assessment.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/918076959966?text=I'd%20like%20a%20free%20assessment"
              className="inline-flex h-14 items-center justify-center bg-[#B38A4A] px-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#9D773C]"
            >
              Book Free Assessment
            </a>

            <a
              href="tel:+918076959966"
              className="inline-flex h-14 items-center justify-center border border-white/35 px-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#181818]"
            >
              Call +91 80769 59966
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-5 pb-7 pt-14 text-white/55 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] text-3xl font-medium tracking-[-0.03em] text-white">
                The Leather Care Co.
              </p>

              <p className="mt-4 max-w-xs text-sm font-light leading-7">
                Exceptional restoration for luxury leather goods across India.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B38A4A]">
                Contact
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <a href="tel:+918076959966" className="block transition hover:text-white">
                  +91 80769 59966
                </a>
                <a
                  href="mailto:info@theleathercareco.com"
                  className="block transition hover:text-white"
                >
                  info@theleathercareco.com
                </a>
                <a
                  href="https://wa.me/918076959966"
                  className="block transition hover:text-white"
                >
                  WhatsApp us
                </a>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B38A4A]">
                Explore
              </p>

              <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2 text-sm">
                {footerNavigation.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-6 text-[9px] uppercase tracking-[0.16em] md:flex-row">
            <span>
              Copyright {new Date().getFullYear()} CE Enterprises Pvt. Ltd.
            </span>
            <span>Privacy · Terms · Disclaimer</span>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/918076959966?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1EBE56]"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path d="M16.02 3.2a12.74 12.74 0 0 0-10.85 19.43L3.2 28.8l6.33-2.04A12.77 12.77 0 1 0 16.02 3.2Zm0 23.3c-2.1 0-4.15-.56-5.94-1.62l-.43-.25-3.76 1.21 1.23-3.65-.28-.45a10.27 10.27 0 1 1 9.18 4.76Zm5.63-7.7c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.69.15s-.8.98-.98 1.18c-.18.2-.36.23-.66.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.14-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.65-.94-2.26-.25-.59-.5-.51-.69-.52h-.59c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
      </a>
    </main>
  );
}