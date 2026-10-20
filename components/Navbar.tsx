"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the viewport is resized back to desktop.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md overflow-hidden">
      <div className="container-content flex h-16 items-center justify-between md:h-[72px]">
        <a
          href="#home"
          className="text-[15px] font-medium tracking-tight text-ink hover:text-white"
        >
          Oyinlade<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-md bg-accent px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-accent-soft"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2.5 5.5H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M2.5 14.5H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-base px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line/60 last:border-none">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[16px] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-md bg-accent px-4 py-3 text-center text-[15px] font-medium text-white"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
}
