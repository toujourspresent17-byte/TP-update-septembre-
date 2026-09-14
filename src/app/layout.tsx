import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallFab from "@/components/CallFab";
import ExitIntent from "@/components/ExitIntent";
import ChatBot from "@/components/ChatBot";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toujours Présent — entretien bureaux, résidences, nautique",
  description: "Un interlocuteur. Photos après chaque passage. Audit gratuit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CallFab />
        <ExitIntent />
        <ChatBot />
      </body>
    </html>
  );
}
