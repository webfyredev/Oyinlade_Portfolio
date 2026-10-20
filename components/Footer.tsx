import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-10 overflow-hidden">
      <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-[15px] font-medium text-white">{siteConfig.name}</p>
          <p className="mt-1 text-[13px] text-ink-muted">{siteConfig.role}</p>
          <p className="mt-0.5 font-mono text-[12px] text-ink-faint">
            Frontend · Backend · APIs · Databases
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            className="text-[13px] text-ink-muted transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            className="text-[13px] text-ink-muted transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-[13px] text-ink-muted transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
      <div className="container-content mt-8 border-t border-line pt-6">
        <p className="text-[12px] text-ink-faint">
          © 2026 {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
