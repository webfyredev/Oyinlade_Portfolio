"use client";
import CoverImage from "@/components/media/CoverImage";
import { siteConfig } from "@/lib/data";
import { scaleFade, scrollUpDelayed, slideLeft, slideRight, statContainer, statItem } from "@/lib/effect";
import { motion } from "framer-motion";

const focusAreas = [
  "Full-Stack Development",
  "Next.js",
  "React",
  "TypeScript",
  "Django",
  "REST APIs",
  "PostgreSQL",
];

export default function About() {
  return (
    <section id="about" className="section-pad border-b border-line overflow-hidden">
      <div className="container-content grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <motion.div 
            {...slideLeft}
            className="w-full md:max-w-[280px]">
            <CoverImage
              src={siteConfig.portraitImage}
              alt={siteConfig.name}
              label="Add your portrait"
              hint="/public/portrait.jpg"
              aspect="aspect-[4/5]"
            />
          </motion.div>
          <motion.h2 
            {...scaleFade}
          className="mt-8 max-w-sm text-[2rem] font-medium leading-tight tracking-tight text-white sm:text-[2.35rem]">
            I build beyond the interface.
          </motion.h2>
        </div>

        <div>
          <motion.div 
            {...scrollUpDelayed}
            className="space-y-5 text-[15.5px] leading-relaxed text-ink-muted">
            <p>
              I&apos;m a full-stack developer focused on turning real-world
              requirements into functional digital products.
            </p>
            <p>
              I work across both sides of an application — building
              responsive interfaces with React, Next.js and TypeScript while
              developing APIs, authentication, backend logic and
              database-backed systems with Django, Django REST Framework and
              PostgreSQL.
            </p>
            <p>
              My projects span healthcare, logistics, education, nonprofit
              and business-focused applications. Each project has helped me
              develop a deeper understanding of how users interact with
              software and how the systems behind those experiences need to
              work together.
            </p>
          </motion.div>

          <motion.div 
            variants={statContainer}
            initial= "initial"
            whileInView="whileInView"
            viewport = {{ once: false, amount : 0.3}}
            className="mt-10 border-t border-line pt-6">
            <p className="font-mono text-[12px] text-ink-faint">
              Currently focused on
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <motion.li
                  variants={statItem}
                  key={item}
                  className="rounded-md border border-line-strong px-3 py-1.5 text-[13px] text-ink-muted"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
