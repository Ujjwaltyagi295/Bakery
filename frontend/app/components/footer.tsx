import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="relative h-16 sm:h-20 md:h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q150,0 300,40 T600,40 T900,40 T1200,40 L1200,120 L0,120 Z"
            fill="#2b1f1a"
          />
        </svg>
      </div>

      <footer className="bg-[#2b1f1a] text-white pb-8 md:pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left - Cupcake Image */}
            <div className="hidden sm:flex justify-center lg:col-span-1 lg:justify-start">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <Image
                  src="/category/cupcake2.png"
                  alt="Cupcake"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-12 justify-center lg:justify-start">
                <div>
                  <h3 className="font-semibold mb-4 text-sm tracking-wide">
                    Important link
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/" className="hover:text-yellow-400 transition">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="hover:text-yellow-400 transition">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/projects" className="hover:text-yellow-400 transition">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="/news" className="hover:text-yellow-400 transition">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="/team" className="hover:text-yellow-400 transition">
                        Team
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-sm tracking-wide">
                    Support
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/faq" className="hover:text-yellow-400 transition">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" className="hover:text-yellow-400 transition">
                        Privacy Policies
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="hover:text-yellow-400 transition">
                        Terms of Services
                      </a>
                    </li>
                    <li>
                      <a href="/terms-of-use" className="hover:text-yellow-400 transition">
                        Terms of Uses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 lg:items-end gap-4 md:gap-6">
              <div className="text-center lg:text-right">
                <h2 className="text-lg sm:text-xl md:text-2xl font-script italic mb-2 md:mb-4">
                  Ready To Build Your Next Project?
                </h2>
              </div>
              <button className="bg-white text-[#2b1f1a] px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base hover:bg-yellow-100 transition">
                Get Started
              </button>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-5 hover:opacity-70 transition">
                <Image
                  src="/cookiesm.png"
                  alt="Decorative cupcake"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-1 md:mt-1 text-center border-opacity-20 pt-6 md:pt-8">
            <p className="text-2xl sm:text-3xl md:text-9xl font-script italic text-white">
              Bakery
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
