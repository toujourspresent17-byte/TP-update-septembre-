import Link from "next/link";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="bg-[#0e1c31] text-white">
      <div className="container-tp flex min-h-[86vh] flex-col justify-end pb-16 pt-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/45">Toujours Présent</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Un contrat.<br />Un interlocuteur.<br />Un passage prouvé.
        </h1>
        <p className="mt-6 max-w-xl text-base font-light text-white/70">
          Halls, bureaux, pont. Photos après chaque passage. France entière — attache La Rochelle.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90">
            Demander un audit
          </Link>
          <a href={`tel:${SITE.phone}`} className="rounded-full border border-white/25 px-7 py-3 text-sm text-white/90">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
