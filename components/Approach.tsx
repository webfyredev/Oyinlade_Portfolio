"use client"
import { approachSteps } from "@/lib/data";
import { slideLeft, statContainer, statItem } from "@/lib/effect";
import { motion } from "framer-motion";
import { Search, ListTree, Hammer, FlaskConical, Sparkles, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "01": Search,
  "02": ListTree,
  "03": Hammer,
  "04": FlaskConical,
  "05": Sparkles,
};

export default function Approach() {
  return (
    <section id="approach" className="section-pad border-b border-line bg-surface-1/30 overflow-hidden">
      <div className="container-content">
        <div className="max-w-lg">
          <motion.h2 
          {...slideLeft}
          className="text-[2rem] font-medium leading-tight tracking-tight text-white sm:text-[2.35rem]">
            How I approach development
          </motion.h2>
        </div>

        <motion.ol 
          variants={statContainer}
          initial="initial"
          whileInView="whileInView"
          className="mt-12 grid gap-0 divide-y divide-line border-y border-line sm:grid-cols-5 sm:gap-0 sm:divide-x sm:divide-y-0">
          {approachSteps.map((step) => {
            const Icon = icons[step.number];
            return (
              <motion.li 
                variants={statItem}
                key={step.number} className="flex flex-col gap-3 py-6 sm:px-5 sm:py-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] text-ink-faint">
                    {step.number}
                  </span>
                  {Icon && (
                    <Icon className="h-4 w-4 text-accent-soft" strokeWidth={1.5} aria-hidden="true" />
                  )}
                </div>
                <h3 className="text-[15.5px] font-medium text-white">
                  {step.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
