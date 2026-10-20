import { siteConfig } from "@/lib/data";
import CoverImage from "@/components/media/CoverImage";

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-b border-line overflow-hidden">
      <div className="container-content grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
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

        <CoverImage
          src={siteConfig.contactImage}
          alt="Contact visual"
          label="Add a visual here"
          aspect="aspect-[4/5]"
        />
      </div>
    </section>
  );
}
