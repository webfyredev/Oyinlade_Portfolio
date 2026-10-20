"use client";
import { architectureLayers } from "@/lib/data";
import { scrollUp, scrollUpDelayed } from "@/lib/effect";
import { motion } from 'framer-motion'
export default function ArchitectureVisual() {
  return (
    <section className="section-pad border-b border-line overflow-hidden">
      <div className="container-content">
        <div className="max-w-lg">
          <p className="font-mono text-[12px] text-ink-faint">
            How the pieces connect
          </p>
          <motion.h2 
            {...scrollUp}
            className="mt-3 text-[1.75rem] font-medium tracking-tight text-white">
            One request, five layers
          </motion.h2>
        </div>

        <div className="mt-12 flex flex-col items-stretch gap-0 md:mx-auto md:max-w-2xl">
          {architectureLayers.map((layer, index) => (
            <motion.div 
              {...scrollUpDelayed}
              key={layer.label}>
              <div className="flex items-center gap-6 rounded-lg border border-line bg-surface-1 px-6 py-5">
                <span className="font-mono text-[12px] text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[15px] font-medium text-white">
                    {layer.label}
                  </p>
                  <p className="mt-0.5 text-[13px] text-ink-muted">
                    {layer.detail}
                  </p>
                </div>
              </div>
              {index < architectureLayers.length - 1 && (
                <div className="flex justify-start pl-[38px]" aria-hidden="true">
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                    <path
                      d="M7 1V21M7 21L2 16M7 21L12 16"
                      stroke="#2563EB"
                      strokeOpacity="0.5"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
