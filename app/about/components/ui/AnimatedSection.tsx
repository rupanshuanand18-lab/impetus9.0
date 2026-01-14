'use client';

import { motion, type Easing } from "framer-motion";
import { ReactNode } from "react";

const easeOutExpo: Easing = [0.22, 1, 0.36, 1];

export default function AnimatedSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: easeOutExpo,
      }}
    >
      {children}
    </motion.section>
  );
} 