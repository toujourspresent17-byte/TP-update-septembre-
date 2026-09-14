"use client";

import { useEffect, useRef, useState } from "react";
import { botReply, CHAT_QUICK, CHAT_WELCOME } from "@/lib/chat";
import { whatsappUrl } from "@/lib/site";

type Msg = { from: "bot" | "me"; text: string };

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: CHAT_WELCOME }]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  function send(text?: string) {
    const v = (text || input).trim();
    if (!v) return;
    setInput("");
    setMsgs((m) => [...m, { from: "me", text: v }, { from: "bot", text: botReply(v) }]);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#0e1c31] text-white shadow-lg shadow-[#0e1c31]/30 transition hover:bg-[#16304f]"
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {open ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H9l-4 3.2V6.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      {open && (
        <div className="fixed bottom-[5.5rem] left-4 z-40 flex h-[min(70vh,440px)] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_20px_60px_rgba(14,28,49,0.28)]" role="dialog" aria-label="Assistant Toujours Présent">
          <div className="flex items-center justify-between bg-[#0e1c31] px-4 py-3 text-white">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2aada0]" />
                Toujours Présent
              </p>
              <p className="text-[11px] text-white/55">Réponse courte · devis après audit</p>
            </div>
            <button type="button" className="rounded-full px-2 text-lg text-white/60 hover:text-white" onClick={() => setOpen(false)} aria-label="Fermer">×</button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto bg-[#f4f7f8] p-3 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed ${m.from === "bot" ? "bg-white text-[#0e1c31] shadow-sm" : "ml-auto bg-[#2aada0] text-white"}`}>{m.text}</div>
            ))}
            <div ref={endRef} />
          </div>
        </div>
      )}
    </>
  );
}
