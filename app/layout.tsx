import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const siteUrl = "https://oyinlade.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Oyinlade Oyinloye - Full-Stack Developer",
  description:
    "Full-stack developer building responsive digital products, APIs and backend systems with Next.js, React, TypeScript, Django and PostgreSQL.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "TypeScript",
    "PostgreSQL",
    "Backend Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Oyinlade Oyinloye" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oyinlade Oyinloye — Full-Stack Developer",
    description:
      "Full-stack developer building responsive digital products, APIs and backend systems with Next.js, React, TypeScript, Django and PostgreSQL.",
    url: siteUrl,
    siteName: "Oyinlade Oyinloye",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oyinlade Oyinloye — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oyinlade Oyinloye — Full-Stack Developer",
    description:
      "Full-stack developer building responsive digital products, APIs and backend systems with Next.js, React, TypeScript, Django and PostgreSQL.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-base font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
