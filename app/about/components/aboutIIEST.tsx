'use client';

import Image from 'next/image';

export default function IIESTShibpur() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 border-b border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Logo Section */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/iiest_iiest.png" 
            alt="IIEST Shibpur Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Heading - Single Color per line */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
          IIEST SHIBPUR
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-amber-500 tracking-widest uppercase mb-12">
          169 Years of Excellence
        </h2>

        {/* Content - Centered & Clean */}
        <div className="grid md:grid-cols-2 gap-12 text-left">
          
          {/* Block 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-amber-500/30 pb-2 inline-block">
              History
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Founded in 1856, IIEST Shibpur is the second-oldest engineering college in India. 
              From its origins as the Civil Engineering College to Bengal Engineering and Science University, 
              it has stood as a pillar of academic brilliance for over a century.
            </p>
          </div>

          {/* Block 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-amber-500/30 pb-2 inline-block">
              Today
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Recognized as an Institute of National Importance by the Government of India, 
              it ranks among the top premier institutes in the country. With a global alumni network 
              and cutting-edge research, IIEST continues to nurture the innovators of tomorrow.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}