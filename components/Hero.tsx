"use client";
import { scaleFade, scrollUp, scrollUpDelayed, slideLeft, slideRight} from '@/lib/effect';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-content relative grid gap-14 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28 lg:pt-24">
        <div className="animate-rise">
          <motion.p 
            {...scrollUp}
            className="font-mono text-[13px] tracking-tight text-accent-soft">
            Full-Stack Developer - Frontend + Backend Engineering
          </motion.p>

          <motion.h1 
            {...scaleFade}
            className="mt-5 max-w-xl text-[2.5rem] font-medium leading-[1.08] tracking-tight text-white md:text-[3.2rem]">
            I build digital products that solve real problems.
          </motion.h1>

          <motion.p 
            {...scrollUpDelayed}
            className="mt-6 max-w-md text-[13px] md:text-[16px] leading-relaxed text-ink-muted">
            I&apos;m a full-stack developer who builds responsive web experiences,
            scalable backend systems and the APIs that connect them. I work
            across React, Next.js, TypeScript, Django and PostgreSQL to turn
            ideas and requirements into functional digital products.
          </motion.p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              {...scrollUp}
              href="#work"
              className="rounded-md bg-accent px-5 py-3 text-[14px] font-medium text-white shadow-glow transition-colors hover:bg-accent-soft"
            >
              View My Work
            </motion.a>
            <motion.a
              {...scrollUp}
              href="#contact"
              className="rounded-md border border-line-strong px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:border-accent/50 hover:text-white"
            >
              Let&apos;s Work Together
            </motion.a>
          </div>

          <motion.dl 
            {...slideLeft}
            className="mt-14 grid max-w-md md:grid-cols-2 gap-8 border-t border-line pt-8">
            <div>
              <dt className="font-mono text-[12px] text-ink-faint">Frontend</dt>
              <dd className="mt-1 text-[14px] text-ink-muted">
                React · Next.js · TypeScript
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[12px] text-ink-faint">Backend</dt>
              <dd className="mt-1 text-[14px] text-ink-muted">
                Django · DRF · PostgreSQL
              </dd>
            </div>
          </motion.dl>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end" aria-hidden="true">
          <motion.div 
            {...slideRight}
            className="w-full lg:max-w-[380px] rounded-xl border border-line bg-surface-1 shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[11px] text-ink-faint">
                request.ts
              </span>
            </div>
            <div className="space-y-2.5 px-5 py-5 font-mono text-[12.5px] leading-relaxed">
              <p className="text-ink-faint">{"// client → server"}</p>
              <p>
                <span className="text-accent-soft">const</span>{" "}
                <span className="text-ink">res</span> ={" "}
                <span className="text-accent-soft">await</span>{" "}
                <span className="text-ink">fetch</span>(
                <span className="text-emerald-300/80">&apos;/api/patients&apos;</span>)
              </p>
              <p className="pl-4 text-ink-muted">headers: Authorization</p>
              <div className="my-3 h-px bg-line" />
              <p className="text-ink-faint">{"// django rest framework"}</p>
              <p>
                <span className="text-accent-soft">class</span>{" "}
                <span className="text-ink">PatientView</span>
                (APIView):
              </p>
              <p className="pl-4 text-ink-muted">
                <span className="text-accent-soft">def</span> get(self, request):
              </p>
              <p className="pl-8 text-ink-muted">return Response(data)</p>
              <div className="my-3 h-px bg-line" />
              <p className="flex items-center gap-2 text-ink-faint">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                200 · postgresql · 14ms
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
