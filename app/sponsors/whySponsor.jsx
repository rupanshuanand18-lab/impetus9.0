import Image from "next/image";
import drone from "./drone.jpg";


export default function WhySponsor() {
  return(
  <div>
    {/* Why Sponsor Impetus? */}

    <section className="w-full bg-[#0b0b0b] px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Sponsor Impetus?
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Impetus 9.0 offers organizations a powerful platform to align
            with innovation, technology, and the future of engineering.
            Sponsoring Impetus enables brands to engage directly with
            talented students, academicians, and industry professionals
            through high-impact technical events.
          </p>

          <ul className="space-y-3 text-gray-200">
            <li>• High-visibility branding across digital and on-ground platforms</li>
            <li>• Direct access to future-ready engineering talent</li>
            <li>• Strong industry–academia collaboration opportunities</li>
            <li>• Customized sponsorship and brand engagement options</li>
          </ul>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex-1 relative w-full h-[280px] md:h-[420px] rounded-xl overflow-hidden">
          <Image
            src={drone} // <-- your drone image
            alt="Innovation at Impetus"
            className="object-cover"
            priority
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

      </div>
    </section>
  

  </div>
  );
}
