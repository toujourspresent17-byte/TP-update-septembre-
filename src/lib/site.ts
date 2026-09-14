export const SITE = {
  name: "Toujours Présent",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://toujourspresent.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+33783476570",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+33 7 83 47 65 70",
  email: "contact@toujourspresent.com",
  address: "Port des Minimes, La Rochelle",
  tagline: "Un interlocuteur unique. Un travail dont on répond.",
  whatsapp: "33783476570",
};

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
