"use client";
import { credibilityStats } from "@/lib/data";
import { statContainer, statItem } from "@/lib/effect";
import { motion } from 'framer-motion'

export default function CredibilityStrip() {
  return (
    <section className="border-b border-line overflow-hidden" aria-label="Credibility summary">
      <motion.div 
        variants={statContainer}
        className="container-content grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-12">
        {credibilityStats.map((stat) => (
          <motion.div 
            variants={statItem}
            initial = "initial"
            whileInView="whileInView"
            key={stat.label}>
            <p className="font-mono text-[26px] font-medium text-white md:text-[30px]">
              {stat.value}
            </p>
            <p className="mt-1.5 text-[13px] leading-snug text-ink-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
