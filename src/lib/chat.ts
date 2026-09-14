export const CHAT_WELCOME =
  "Toujours Présent. En 10 secondes : bureaux, flotte nautique, ou logements d’entreprise ?";
export const CHAT_FALLBACK =
  "Je n’ai pas ça en stock. Bureaux · Nautique · ou WhatsApp (bouton vert).";
export const CHAT_QUICK = ["Bureaux", "Nautique", "Résidences", "Tarifs", "Zone", "WhatsApp"];

export function botReply(text: string) {
  const t = text.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "");
  if (/prix|tarif|devis|combien|budget/.test(t)) return "Pas de prix affiché. Audit court, devis sous 24–48 h.";
  if (/bureau|locaux|syndic|copro/.test(t)) return "Entretien de locaux pro. Un interlocuteur. Photos après chaque passage.";
  if (/bateau|nautique|flotte|minimes/.test(t)) return "Conciergerie nautique B2B : contrôle, nettoyage, préparation de parc.";
  if (/residence|logement/.test(t)) return "Résidences et parties communes. Contrat résidence par résidence.";
  if (/zone|nantes|bordeaux|rochelle/.test(t)) return "De Nantes à Bordeaux. Attache : La Rochelle.";
  if (/bonjour|salut|hello/.test(t)) return "Bonjour. Bureaux, nautique B2B ou résidences ?";
  return CHAT_FALLBACK;
}
