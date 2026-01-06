'use client';

import Image from 'next/image';

export default function AboutImpetus() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left: Logo Section with Glow */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-amber-600/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative w-64 h-64 md:w-72 md:h-72 bg-slate-950/50 border border-slate-800 rounded-2xl flex items-center justify-center p-6 backdrop-blur-sm z-10 hover:border-amber-500/50 transition-colors duration-500">
            <div className="relative w-full h-full">
              <Image
                src="/impetusLogo.png"
                alt="IMPETUS Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-2/3 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">IMPETUS</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded-full" />
          </div>

          <div className="text-gray-300 space-y-6 leading-relaxed text-base md:text-lg">
            <p>
              <span className="text-white font-bold">IMPETUS</span> is the annual technical fest organized by the 
              Society of Mechanical Engineers (SME) on behalf of the Department of Mechanical Engineering, IIEST Shibpur. 
              Our vision is simple yet profound: <span className="italic text-gray-400">to bridge the gap between academic theory and real-world engineering.</span>
            </p>

            <p>
              We believe theoretical knowledge gains its true power only when combined with hands-on skills. 
              IMPETUS serves as the convergence point for students, academicians, and industry giants to promote 
              innovation and creative problem-solving.
            </p>

            <p>
              Through high-stakes technical competitions, workshops, and expert lectures, we ensure every 
              attendee leaves not just with a certificate, but with inspiration and industry-ready skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}