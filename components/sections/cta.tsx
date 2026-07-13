import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { ThreadLine } from "@/components/ui/thread-line";
import { ContactForm } from "@/components/sections/contact-form";
import { brand, convite } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

// Dobra 7 — Convite. "Como eu entro em contato?"
// Duas camadas: o convite (escuro, fotográfico, emocional) e o formulário
// (claro, funcional) — a mesma dobra, dois ritmos, sem perder elegância.
export function CTA() {
  const wa = whatsappLink();

  return (
    <section id="convite" className="relative overflow-hidden">
      <div className="relative py-28 md:py-40 bg-ink">
        <div className="absolute inset-0 opacity-35">
          <Image src="/images/gesto-altura.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

        <div className="relative container-edge text-center">
          <p className="text-xs tracking-widest2 uppercase text-cream/50 mb-8">{convite.eyebrow}</p>
          <RevealText
            as="h2"
            className="font-display italic text-cream text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance"
          >
            {convite.title}
          </RevealText>
          <p className="mt-8 text-cream/70 max-w-lg mx-auto leading-relaxed">{convite.sub}</p>

          <div className="mt-4 mb-2 flex justify-center">
            <ThreadLine variant="kink" className="w-20 h-8" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {wa && (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-coral text-cream px-9 py-4 text-sm tracking-widest2 uppercase hover:bg-coral/85 transition-colors duration-500 ease-bloom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <MessageCircle size={16} strokeWidth={1.6} />
                Falar no WhatsApp
              </a>
            )}
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={
                wa
                  ? "inline-flex items-center gap-3 border border-cream/40 text-cream px-9 py-4 text-sm tracking-widest2 uppercase hover:border-cream transition-colors duration-500 ease-bloom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                  : "inline-flex items-center gap-3 bg-cream text-ink px-9 py-4 text-sm tracking-widest2 uppercase hover:bg-blush transition-colors duration-500 ease-bloom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              }
            >
              <Instagram size={16} strokeWidth={1.6} />
              Fale no Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="relative bg-cream py-24 md:py-32">
        <div className="container-edge">
          <p className="text-center text-xs tracking-widest2 uppercase text-sage mb-3">
            Ou, se preferir, escreva agora
          </p>
          <p className="text-center font-display italic text-2xl md:text-3xl text-ink text-balance">
            Conte sobre a sua celebração.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
