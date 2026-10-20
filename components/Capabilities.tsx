'use client';

import { capabilities } from "@/lib/data";
import {
  LayoutTemplate,
  Layers,
  Server,
  LayoutDashboard,
  ShieldCheck,
  Database,
  type LucideIcon,
} from "lucide-react";

import { motion } from 'framer-motion'
import { scrollUp, scrollUpDelayed, slideRight } from "@/lib/effect";
const icons: Record<string, LucideIcon> = {
  "01": LayoutTemplate,
  "02": Layers,
  "03": Server,
  "04": LayoutDashboard,
  "05": ShieldCheck,
  "06": Database,
};

export default function Capabilities() {
  return (
    <section className="section-pad border-b border-line bg-surface-1/30 overflow-hidden">
      <div className="container-content">
        <div className="max-w-lg">
          <motion.h2 
            {...scrollUp}
            className="text-[2rem] font-medium leading-tight tracking-tight text-white sm:text-[2.35rem]">
            What I build and solve
          </motion.h2>
          <motion.p 
            {...scrollUpDelayed}
            className="mt-4 text-[15.5px] leading-relaxed text-ink-muted">
            Capabilities that show up across every project, not just a list
            of tools.
          </motion.p>
        </div>

        <motion.div 
          {...slideRight}
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = icons[item.number];
            return (
              <div key={item.number} className="bg-base p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] text-accent-soft">
                    {item.number}
                  </span>
                  {Icon && (
                    <Icon className="h-5 w-5 text-accent-soft" strokeWidth={1.5} aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-3 text-[16.5px] font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
