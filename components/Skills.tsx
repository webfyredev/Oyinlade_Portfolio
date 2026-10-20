"use client";
import { motion } from 'framer-motion'
import { skillCategories } from "@/lib/data";
import { scrollUp, scrollUpDelayed } from '@/lib/effect';

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-b border-line overflow-hidden">
      <div className="container-content">
        <div className="max-w-lg">
          <motion.h2 
            {...scrollUp}
            className="text-[2rem] font-medium leading-tight tracking-tight text-white sm:text-[2.35rem]">
            What I work with
          </motion.h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
            Grouped by where they sit in a product, not ranked against each
            other.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <motion.div 
              {...scrollUpDelayed}
              key={category.heading}>
              <p className="font-mono text-[12px] text-accent-soft">
                {category.heading}
              </p>
              <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-[14px] text-ink-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
