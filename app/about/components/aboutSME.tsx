'use client';

import Image from 'next/image';

export default function AboutDepartmentSME() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Content Side */}
        <div className="order-2 md:order-1">
          {/* Heading - Single Color Style */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-cyan-400 mb-2">
              DEPARTMENT & SME
            </h2>
            <p className="text-white text-lg font-light tracking-wide">
              Forging Future Engineers Since 1921
            </p>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              The Department of Mechanical Engineering at IIEST Shibpur boasts a rich legacy of 
              producing highly skilled engineers. Starting with diploma programs in 1921, 
              it has evolved into a hub for advanced research and postgraduate studies.
            </p>

            <p>
              Powering the student community is the <strong className="text-white">Society of Mechanical Engineers (SME)</strong>. 
              More than just a society, SME acts as the vital link between classroom theory and 
              industrial reality.
            </p>

            <p>
              We host student chapters of global giants like <span className="text-cyan-400 font-bold">ASME, SAE, IMechE, and ISHRAE</span>. 
              Through expert lectures, workshops, and events, we foster leadership and 
              technical expertise in every student.
            </p>
          </div>
        </div>

        {/* Image Side - Full Color */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Simple glow effect behind the logo to make it pop on black */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
            
            <Image
              src="/SME.png" 
              alt="Society of Mechanical Engineers Logo"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}