import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header with Logo */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <Image
          src="https://res.cloudinary.com/auvmsf0q/image/upload/v1784375294/logo_kqemjd.png"
          alt="The Leather Care Co."
          width={180}
          height={50}
          priority
          className="h-auto w-auto"
        />
        <a
          href="https://wa.me/918076959966?text=Hello%2C%20I%27d%20like%20a%20repair%20quote"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline underline-offset-4 hover:text-amber-800"
        >
          WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        <p className="text-sm uppercase tracking-[0.4em] text-amber-800 mb-4">
          Repair • Restore • Retouch • Recolor
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
          THE MAGIC OF SHOE &amp; BAG REPAIR
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl">
          First Choice for high quality shoes and bag repair &amp; restoration services in India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/918076959966?text=I%27d%20like%20a%20free%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-800 text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-amber-900 transition"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+918076959966"
            className="inline-block border border-neutral-300 px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-50 transition"
          >
            Call Us
          </a>
        </div>
      </section>

      {/* Work samples – only two images, no hero, with generous spacing and taller desktop height */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 md:px-6 pb-4 md:pb-6">
        <div className="relative h-72 md:h-[32rem] overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/auvmsf0q/image/upload/v1784375293/care-kit_z5senn.jpg"
            alt="Leather care products and tools"
            fill
            className="object-cover hover:scale-105 transition duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative h-72 md:h-[32rem] overflow-hidden rounded-lg">
          <Image
            src="https://res.cloudinary.com/auvmsf0q/image/upload/v1784375294/ysl-bag_wftmil.jpg"
            alt="Restored YSL bag"
            fill
            className="object-cover hover:scale-105 transition duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Services summary */}
      <section className="py-16 text-center px-4">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
          What we restore
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-neutral-700">
          <span>Luxury Bags</span>
          <span className="text-neutral-300">•</span>
          <span>Shoes</span>
          <span className="text-neutral-300">•</span>
          <span>Wallets</span>
          <span className="text-neutral-300">•</span>
          <span>Jackets</span>
          <span className="text-neutral-300">•</span>
          <span>Belts</span>
          <span className="text-neutral-300">•</span>
          <span>Leather Sofas</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <h2 className="text-3xl font-light text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              name: 'Prachi Kathuria',
              text: 'Thank you so much team Leather Care for giving my bag this amazing color change, it looks fab in the new color. Great finishing, outstanding service with complete details on every step of the process via photos and videos! I am so happy with my new bag🫶🏻',
            },
            {
              name: 'Mahima M',
              text: 'Absolutely thrilled with the recolouring service provided by Leather Care Co for my Prada bag! The bag looks brand new, and the color match is flawless. The attention to detail and quality of work are exceptional. Highly recommend their services!',
            },
            {
              name: 'Alisha Sharma',
              text: 'The Leather Care Co did a fantastic job restoring my YSL bag! It had some noticeable wear and tear, but now it looks brand new. The team\'s expertise in handling luxury bags is evident, and I couldn\'t be happier with the results. Thank you for making it stunning!',
            },
            {
              name: 'Ananya Patel',
              text: 'Kudos to Leather Care Co for their outstanding Chanel bag cleaning and spa service! My bag was looking dull and dirty, but after their service, it looks as if it just came from the store. The staff is professional, and they treated my Chanel with the utmost care. Delighted with the outcome!',
            },
          ].map((review) => (
            <div key={review.name} className="bg-white p-8 shadow-sm">
              <p className="text-neutral-600 italic">“{review.text}”</p>
              <p className="mt-4 font-medium text-amber-800">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Callback request */}
      <section className="py-16 px-4 text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-light mb-4">You Still Have a Question?</h3>
        <p className="text-neutral-500 mb-8">Leave your number and we’ll call you back</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-neutral-300 px-4 py-3 w-full sm:w-auto"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-neutral-300 px-4 py-3 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-amber-800 text-white px-6 py-3 uppercase tracking-wider hover:bg-amber-900 transition"
          >
            Call Me Back
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-50 py-12 px-4 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500 gap-4">
          <div className="flex gap-6">
            <a href="tel:+918076959966" className="hover:text-amber-800">📞 +91 8076959966</a>
            <a href="mailto:info@theleathercareco.com" className="hover:text-amber-800">📧 info@theleathercareco.com</a>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <a href="/disclaimer" className="hover:underline">Disclaimer</a>
            <a href="/returns" className="hover:underline">Return & Exchange Policy</a>
          </div>
          <div>© {new Date().getFullYear()} CE Enterprises Pvt. Ltd.</div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/918076959966?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </main>
  )
}