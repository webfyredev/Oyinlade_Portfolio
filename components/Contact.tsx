"use client";
import { siteConfig } from "@/lib/data";
import CoverImage from "@/components/media/CoverImage";
import { motion } from 'framer-motion'
import { slideLeft } from "@/lib/effect";

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-b border-line overflow-hidden">
      <div className="container-content grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="text-[2.2rem] font-medium leading-tight tracking-tight text-white sm:text-[2.6rem]">
            Have a problem worth solving?
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-muted">
            I&apos;m open to full-stack opportunities, frontend roles,
            freelance projects and teams building useful digital products.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-md bg-accent px-5 py-3 text-[14px] font-medium text-white shadow-glow transition-colors hover:bg-accent-soft"
            >
              Email Me
            </a>
            <a
              href={siteConfig.linkedin}
              className="rounded-md border border-line-strong px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent/50 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              className="rounded-md border border-line-strong px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent/50 hover:text-white"
            >
              GitHub
            </a>
          </div>

          <p className="mt-8 font-mono text-[12.5px] text-ink-faint">
            {siteConfig.location} · {siteConfig.availability}
          </p>
        </div>

        <motion.div 
            {...slideLeft}
            className="w-full lg:w-[500px] lg:h-[50vh]">
            <CoverImage
              src={siteConfig.contactImage}
              alt={siteConfig.name}
              label="Add your portrait"
              hint="/public/portrait.jpg"
            />
          </motion.div>
      </div>
    </section>
  );
}
