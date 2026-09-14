"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";

export default function ExitIntent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("tp_exit")) return;

    const open = () => {
      if (sessionStorage.getItem("tp_exit")) return;
      sessionStorage.setItem("tp_exit", "1");
      setShow(true);
    };

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    let timer: number | undefined;

    if (coarse) {
      timer = window.setTimeout(open, 45000);
    }

    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 10) return;
      open();
      document.removeEventListener("mouseout", onLeave);
    };

    if (!coarse) document.addEventListener("mouseout", onLeave);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      if (timer) window.clearTimeout(timer);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-[#0e1c31]/55 p-4 backdrop-blur-[3px] sm:items-center"
      onClick={() => setShow(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="tp-exit-title"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(14,28,49,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#2aada0] to-[#0e1c31]" />
        <button
          type="button"
          onClick={() => setShow(false)}
          className="absolute right-3 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#0e1c31]/50 hover:bg-black/5 hover:text-[#0e1c31]"
          aria-label="Fermer"
        >
          ×
        </button>
        <div className="px-6 pb-6 pt-7 sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2aada0]">
            Audit
          </p>
          <h2 id="tp-exit-title" className="mt-2 text-xl font-semibold tracking-tight text-[#0e1c31]">
            Avant de partir
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#0e1c31]/65">
            20 minutes sur site. Photos après chaque passage. Un interlocuteur — halls, bureaux ou pont.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-[#0e1c31] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#16304f]"
            >
              Demander l’audit
            </a>
            <a
              href={whatsappUrl("Bonjour, je souhaite un audit Toujours Présent.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-[#0e1c31]/15 px-5 py-3 text-sm font-medium text-[#0e1c31] transition hover:bg-[#0e1c31]/5"
            >
              WhatsApp
            </a>
          </div>
          <button
            type="button"
            className="mt-4 w-full text-center text-xs text-[#0e1c31]/40 hover:text-[#0e1c31]/70"
            onClick={() => setShow(false)}
          >
            Continuer la visite
          </button>
        </div>
      </div>
    </div>
  );
}
