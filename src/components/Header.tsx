"use client";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 text-marine backdrop-blur">
      <div className="container-tp flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight">Toujours Présent</Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/contact" className="text-mute hover:text-marine">Contact</Link>
          <a href={`tel:${SITE.phone}`} className="text-teal">{SITE.phoneDisplay}</a>
        </nav>
      </div>
    </header>
  );
}
