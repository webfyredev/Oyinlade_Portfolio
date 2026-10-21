"use client";
import { moreWork } from "@/lib/data";
import CoverImage from "@/components/media/CoverImage";
import { motion } from 'framer-motion'
import { scrollUp, scrollUpDelayed, statContainer, statItem } from "@/lib/effect";

export default function MoreWork() {
  return (
    <section className="section-pad border-b border-line bg-surface-1/30 overflow-hidden">
      <div className="container-content">
        <p className="font-mono text-[12px] text-ink-faint">More Work</p>
        <motion.h2 
          {...scrollUp}
          className="mt-3 text-[1.75rem] font-medium tracking-tight text-white">
          Additional projects
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {moreWork.map((project) => (
            <motion.div 
              {...scrollUpDelayed}
              key={project.name}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-base"
            >
              <CoverImage
                src={project.image}
                alt={`${project.name} thumbnail`}
                label="Add a project thumbnail"
                hint={`/public/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}-thumb.jpg`}
                aspect="aspect-video"
              />
              <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[16px] font-medium text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11.5px] text-accent-soft">
                    {project.category}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[13.5px] leading-relaxed text-ink-muted">
                {project.description}
              </p>

              <motion.ul 
                variants={statContainer}
                initial="initial"
                whileInView = "whileInView"
                viewport={{once: false, amount : 0.3}}
                className="mt-5 flex flex-wrap gap-1.5">
                {project.technology.map((tech) => (
                  <motion.li
                  variants={statItem}
                    key={tech}
                    className="rounded border border-line-strong px-2 py-1 font-mono text-[11px] text-ink-faint"
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-6 flex gap-4 border-t border-line pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-[13px] text-ink-muted transition-colors hover:text-white"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-[13px] text-ink-muted transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
