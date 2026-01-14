"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white">
      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12">
        {/* LEFT — TEXT */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <h1 className="mb-4 text-4xl md:text-5xl font-extrabold">
            SPONSOR IMPETUS 9.0
          </h1>

          <h2 className="mb-3 text-lg md:text-xl font-semibold">
            Partner with Innovation & Shape the Future of Engineering
          </h2>

          <p className="mb-6 text-base md:text-lg text-white/70">
            Annual Technical Fest of Mechanical Engineering
            <br />
            IIEST Shibpur | 13–15 February 2026
          </p>

          <a
            href="/pdf/SponsorshipBrochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
          >
            View Brochure
          </a>
        </div>

        {/* Mobile Image
        <div className="md:hidden relative mx-auto h-64 w-64 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/hero/hero2.jpg"
            alt="Impetus Highlight"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        {/* RIGHT — IMAGE COMPOSITION */}
        <div className="relative hidden md:block w-1/2 h-[420px]">
          {/* Image 1 */}
          <div className="group absolute top-0 left-8 w-56 h-72">
            <div
              className="relative h-full w-full rounded-xl overflow-hidden
      transition-all duration-500 ease-out
      group-hover:scale-110 group-hover:z-20
      shadow-xl group-hover:shadow-2xl"
            >
              <Image
                src="/images/hero/hero3.jpg"
                alt="Impetus crowd"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 2 (Main) */}
          <div className="group absolute top-20 left-40 w-64 h-80">
            <div
              className="relative h-full w-full rounded-xl overflow-hidden
      transition-all duration-500 ease-out
      group-hover:scale-110 group-hover:z-20
      shadow-xl group-hover:shadow-2xl border border-white/10"
            >
              <Image
                src="/images/hero/hero2.jpg"
                alt="Technical competition"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="group absolute bottom-0 right-8 w-52 h-64">
            <div
              className="relative h-full w-full rounded-xl overflow-hidden
      transition-all duration-500 ease-out
      group-hover:scale-110 group-hover:z-20
      shadow-xl group-hover:shadow-2xl"
            >
              <Image
                src="/images/hero/hero1.jpg"
                alt="Workshop / machinery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
    </section>
  );
}
