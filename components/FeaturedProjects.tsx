"use client";
import { motion } from 'framer-motion'
import { featuredProjects } from "@/lib/data";
import CaseStudy from "./CaseStudy";
import { scrollUp, scrollUpDelayed } from '@/lib/effect';

export default function FeaturedProjects() {
  return (
    <section id="work" className="section-pad border-b border-line overflow-hidden">
      <div className="container-content">
        <div className="max-w-lg">
          <p className="font-mono text-[12px] text-ink-faint">Featured Work</p>
          <motion.h2 
            {...scrollUp}
            className="mt-3 text-[2rem] font-medium leading-tight tracking-tight text-white sm:text-[2.35rem]">
            Products built end to end
          </motion.h2>
          <motion.p 
            {...scrollUpDelayed}
            className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
            These projects are presented as case studies rather than screenshots
            what the problem was, how the system was built, and what it
            does today.
          </motion.p>
        </div>

        <div className="mt-4">
          {featuredProjects.map((project, index) => (
            <CaseStudy key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
