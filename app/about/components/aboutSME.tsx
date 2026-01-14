'use client';

import AnimatedSection from "./ui/AnimatedSection";
import Section from "./ui/Section";
import SplitLayout from "./ui/SplitLayout";
import SectionHeading from "./ui/SectionHeading";
import LogoGlow from "./ui/LogoGlow";
import ImpactCards from "./ui/ImpactCards";

export default function AboutDepartmentSME() {
  return (
    <Section>
      <SplitLayout>
        <AnimatedSection>
          <div className="space-y-6">
            <SectionHeading
              title="DEPARTMENT &"
              highlight="SME"
              highlightColor="cyan"
              subtitle="Forging Future Engineers Since 1921"
            />

            <p className="text-gray-300 leading-relaxed">
              The Department of Mechanical Engineering at IIEST Shibpur has a rich
              legacy of excellence in education and research.
            </p>

            <p className="text-gray-300 leading-relaxed">
              SME bridges classroom learning with industry exposure through
              global engineering chapters.
            </p>

            <ImpactCards
              items={[
                { title: "Industry Ready", icon: "🛠" },
                { title: "Global Exposure", icon: "🌍" },
                { title: "Leadership", icon: "🚀" },
              ]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex justify-center md:justify-end">
            <LogoGlow
              src="/SMEwhite.png"
              alt="SME Logo"
              glowColor="cyan"
              size={300}
            />
          </div>
        </AnimatedSection>
      </SplitLayout>
    </Section>
  );
}