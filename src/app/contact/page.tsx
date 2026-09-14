import { SITE } from "@/lib/site";
import { whatsappUrl } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="container-tp py-20">
      <h1 className="text-3xl font-semibold text-marine">Audit</h1>
      <p className="mt-3 max-w-lg text-mute">20 minutes sur site. Photos après chaque passage. Un nom au téléphone.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`tel:${SITE.phone}`} className="rounded-full bg-marine px-6 py-3 text-sm text-white">{SITE.phoneDisplay}</a>
        <a href={whatsappUrl("Bonjour, je souhaite un audit Toujours Présent.")} className="rounded-full border border-marine/20 px-6 py-3 text-sm" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href={`mailto:${SITE.email}`} className="rounded-full border border-marine/20 px-6 py-3 text-sm">{SITE.email}</a>
      </div>
    </section>
  );
}
