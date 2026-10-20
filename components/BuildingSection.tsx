"use client";
import { siteConfig } from "@/lib/data";
import { slideLeft, slideRight } from "@/lib/effect";
import { motion } from 'framer-motion'

export default function BuildingSection() {
  return (
    <section className="border-b border-line py-16 md:py-20 overflow-hidden">
      <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-md">
          <h2 className="text-[1.6rem] font-medium tracking-tight text-white">
            Building, learning, improving.
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
            I continuously build, experiment and improve through real
            projects and hands-on development.
          </p>
        </div>

        <motion.a
          {...slideRight}
          href={siteConfig.github}
          className="flex shrink-0 items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent/50 hover:text-white"
        >
          View Projects on GitHub
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M4 10L10 4M10 4H5M10 4V9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
