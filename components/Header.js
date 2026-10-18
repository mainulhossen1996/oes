"use client";
import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [["Services", "#services"], ["Supplies", "#supplies"], ["Process", "#process"], ["About", "#about"], ["Contact", "#contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-head text-xl font-extrabold text-brand">
          <Image src="/OES_Icon.png" alt={`${site.short} logo`} width={36} height={36} priority className="h-9 w-auto" />
          <span className="hidden text-[16px] font-medium text-slate-600 sm:inline">Orin Engineering &amp; Supplies</span>
        </a>
        <nav className="hidden gap-7 font-medium text-slate-600 md:flex" aria-label="Main">
          {links.map(([t, h]) => <a key={h} href={h} className="hover:text-brand">{t}</a>)}
        </nav>
        <a href="#contact" className="btn btn-blue hidden !py-2 md:inline-block">Get a quote</a>
        <button className="rounded border border-slate-300 p-2 md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
        </button>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-1 pb-4 md:hidden" aria-label="Mobile">
          {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded px-2 py-2 font-semibold hover:bg-brand-light">{t}</a>)}
        </nav>
      )}
    </header>
  );
}
