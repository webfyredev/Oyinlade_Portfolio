"use client";
import type { CaseStudy as CaseStudyType } from "@/lib/data";
import CoverImage from "@/components/media/CoverImage";
import { motion } from 'framer-motion'
import { scrollUpDelayed, slideLeft, slideRight, statContainer, statItem } from "@/lib/effect";

const structure = [
  "Overview",
  "The Problem",
  "The Approach",
  "The Solution",
  "Key Features",
  "Technical Decisions",
  "Challenges",
  "Result",
  "Technology",
  "Links",
];

function DashboardPreview({
  groups,
}: {
  groups: CaseStudyType["featureGroups"];
}) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-line bg-surface-1"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[11px] text-ink-faint">dashboard</span>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.heading} className="rounded-lg border border-line bg-surface-2 p-4">
            <p className="font-mono text-[11px] text-accent-soft">
              {group.heading}
            </p>
            <ul className="mt-3 space-y-2">
              {group.items.slice(0, 10).map((item) => (
                <li key={item} className="flex items-center gap-2 text-[12.5px] text-ink-muted">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudy({
  project,
  index,
}: {
  project: CaseStudyType;
  index: number;
}) {
  const idPrefix = project.slug;

  return (
    <article
      id={idPrefix}
      className="border-b border-line py-16 first:pt-0 last:border-none md:py-24 overflow-hidden"
    >
      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
        {/* Sticky index rail */}
        <motion.div 
          {...slideLeft}
          className="hidden md:block">
          <div className="sticky top-28">
            <p className="font-mono text-[12px] text-ink-faint">
              {String(index + 1).padStart(2, "0")} / 03
            </p>
            <ol className="mt-6 space-y-2.5 border-l border-line pl-4">
              {structure.map((label, i) => (
                <li key={label} className="text-[12.5px] leading-snug text-ink-faint">
                  <span className="font-mono text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>{" "}
                  {label}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <div>
          {/* Overview */}
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <motion.p 
                {...slideRight}
                className="font-mono text-[12.5px] text-accent-soft">
                {project.category}
              </motion.p>
              <h3 className="mt-2 text-[2rem] font-medium tracking-tight text-white sm:text-[2.4rem]">
                {project.name}
              </h3>
            </div>
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="rounded-md border border-line-strong px-4 py-2 text-[13px] text-ink transition-colors hover:border-accent/50 hover:text-white"
                >
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="rounded-md border border-line-strong px-4 py-2 text-[13px] text-ink transition-colors hover:border-accent/50 hover:text-white"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          <div className="mt-8">
            <CoverImage
              src={project.image}
              alt={`${project.name} screenshot`}
              label={`Add a ${project.name} screenshot`}
              hint={`/public/projects/${project.slug}-cover.jpg · 1600×900`}
              aspect="aspect-video"
              priority={index === 0}
            />
          </div>

          {/* Problem / Approach / Solution */}
          <motion.div 
            variants={statContainer}
            initial= "initial"
            whileInView="whileInView"
            viewport = {{ once: false, amount : 0.3}}
            className="mt-12 grid gap-8 sm:grid-cols-3">
            <motion.div
              variants={statItem}
            >
              <p className="font-mono text-[11px] text-ink-faint">The Problem</p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                {project.problem}
              </p>
            </motion.div>
            <motion.div
              variants={statItem}
            >
              <p className="font-mono text-[11px] text-ink-faint">The Approach</p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                {project.approach}
              </p>
            </motion.div>
            <motion.div
              variants={statItem}
            >
              <p className="font-mono text-[11px] text-ink-faint">The Solution</p>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                {project.solution}
              </p>
            </motion.div>
          </motion.div>

          {/* Key features + dashboard preview */}
          <div className="mt-12">
            <p className="font-mono text-[11px] text-ink-faint">Key Features</p>
            <div className="mt-4">
              <DashboardPreview groups={project.featureGroups} />
            </div>
          </div>

          {/* Technical decisions + challenges */}
          <motion.div 
            {...scrollUpDelayed}
            className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] text-ink-faint">
                Technical Decisions
              </p>
              <ul className="mt-3 space-y-3">
                {project.technicalDecisions.map((decision) => (
                  <li
                    key={decision}
                    className="border-l-2 border-accent/40 pl-4 text-[14px] leading-relaxed text-ink-muted"
                  >
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] text-ink-faint">Challenges</p>
              <ul className="mt-3 space-y-3">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="border-l-2 border-line-strong pl-4 text-[14px] leading-relaxed text-ink-muted"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Result */}
          <div className="mt-12 rounded-lg border border-line bg-surface-1 p-6">
            <p className="font-mono text-[11px] text-ink-faint">Result</p>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-muted">
              {project.result}
            </p>
          </div>

          {/* Technology */}
          <motion.div 
            variants = {statContainer}
            initial = "initial"
            whileInView = "whileInView"
            viewport = {{ once : false, amount : 0.3}}
            className="mt-10">
            <p className="font-mono text-[11px] text-ink-faint">Technology</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technology.map((tech) => (
                <motion.li
                  variants={statItem}
                  key={tech}
                  className="rounded-md border border-line-strong px-3 py-1.5 font-mono text-[12px] text-ink-muted"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
