'use client';

import AnimatedSection from "./ui/AnimatedSection";
import Section from "./ui/Section";
import SplitLayout from "./ui/SplitLayout";
import SectionHeading from "./ui/SectionHeading";
import LogoGlow from "./ui/LogoGlow";

export default function AboutImpetus() {
  return (
    <Section>
      <SplitLayout>
        <AnimatedSection>
          <div className="flex justify-center md:justify-end">
            <LogoGlow
              src="/impetusLogo.png"
              alt="IMPETUS Logo"
              glowColor="amber"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="space-y-6">
            <SectionHeading title="ABOUT" highlight="IMPETUS" />

            <p className="border-l-2 border-amber-500/40 pl-4 italic text-gray-400">
              Bridging academic theory with real-world engineering.
            </p>

            <p className="text-gray-300 leading-relaxed">
              IMPETUS is the annual technical fest of the Department of Mechanical
              Engineering, organized by SME.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Through competitions, workshops, and expert talks, we build
              engineers who are confident and industry-ready.
            </p>
          </div>
        </AnimatedSection>
      </SplitLayout>
    </Section>
  );
}