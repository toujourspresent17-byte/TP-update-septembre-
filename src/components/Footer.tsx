import { SITE } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="bg-marine text-white/80">
      <div className="container-tp py-12 text-sm">
        <p className="font-semibold text-white">{SITE.name}</p>
        <p className="mt-2">{SITE.address}</p>
        <a href={`mailto:${SITE.email}`} className="mt-2 block">{SITE.email}</a>
      </div>
    </footer>
  );
}
