"use client";

import { journey } from "@/lib/data";
import { scrollUp, slideRight, statContainer, statItem } from "@/lib/effect";
import { motion } from 'framer-motion'
export default function Journey() {
  return (
    <section className="section-pad border-b border-line bg-surface-1/30 overflow-hidden">
      <div className="container-content">
        <motion.h2 
          {...scrollUp}
          className="text-[1.75rem] font-medium tracking-tight text-white">
          Journey
        </motion.h2>

        <motion.div 
          variants={statContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{once: false, amount : 0.3}}
          className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {journey.map((item) => (
            <motion.div 
              variants={statItem}
              key={item.year} className="lg:border-l lg:border-line lg:pl-6">
              <p className="font-mono text-[20px] text-white">{item.year}</p>
              <p className="mt-1.5 text-[14px] font-medium text-accent-soft">
                {item.title}
              </p>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
