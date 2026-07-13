import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { RevealText } from "@/components/ui/reveal-text";
import { ThreadLine } from "@/components/ui/thread-line";
import { confianca, brand } from "@/lib/data";

// Dobra 6 — Confiança. "Posso confiar nela?"
// Só existe uma citação real da fundadora e um comentário real do
// Instagram — tratados com honestidade, não inflados como grid de reviews.
export function Testimonials() {
  return (
    <section id="confianca" className="relative bg-cream py-28 md:py-40 overflow-hidden">
      <div className="container-edge grid md:grid-cols-[1fr_1.1fr] gap-14 md:gap-20 items-center">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden order-2 md:order-1">
          <Image
            src="/images/gesto-jardim.jpg"
            alt="Cássia Lobão com flores recém-colhidas, fora do ateliê"
            fill
            sizes="(max-width: 768px) 90vw, 480px"
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <Quote size={30} strokeWidth={1.2} className="mb-8 text-sage" />

          <RevealText
            as="p"
            className="font-display italic text-2xl sm:text-3xl md:text-4xl leading-[1.35] text-balance"
          >
            {confianca.quote}
          </RevealText>

          <FadeIn delay={0.3} className="mt-7">
            <p className="text-sm tracking-widest2 uppercase text-ink/60">
              {confianca.author} — {confianca.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-14 flex items-center gap-4 border-t border-ink/10 pt-8 max-w-sm">
              <ThreadLine variant="straight" className="w-8 h-4 shrink-0" />
              <div>
                <p className="font-display italic text-base text-ink/80">
                  &ldquo;{confianca.socialProof.quote}&rdquo;
                </p>
                <p className="text-xs text-ink/45 tracking-wide mt-1">
                  {confianca.socialProof.author} · {confianca.socialProof.context}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p className="mt-10 text-xs tracking-widest2 uppercase text-ink/40">
              {brand.categories} · {brand.location}
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <a
              href="#convite"
              className="group mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-ink hover:text-sage-dark border-b border-ink/25 hover:border-sage-dark pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              Fale com a Cássia
              <ArrowRight size={14} strokeWidth={1.6} className="transition-transform duration-400 group-hover:translate-x-1" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
