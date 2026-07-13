import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { RevealText } from "@/components/ui/reveal-text";
import { ThreadLine } from "@/components/ui/thread-line";
import { quemEha } from "@/lib/data";

// Dobra 2 — "Quem é a Cássia?"
// Imagem real do próprio ateliê (still do vídeo de processo), não uma foto
// de banco. A pergunta é sobre a pessoa, não sobre o produto.
export function Philosophy() {
  return (
    <section id="estudio" className="bg-cream py-28 md:py-40">
      <div className="container-edge grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <FadeIn className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 overflow-hidden">
            <Image
              src="/images/gesto-altura.jpg"
              alt="Cássia Lobão montando um arco floral no ateliê"
              fill
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-10 bg-blush text-ink px-6 py-5 max-w-[220px] hidden sm:block">
            <p className="font-display italic text-lg leading-snug">
              &ldquo;Cada elemento encontra seu lugar.&rdquo;
            </p>
          </div>
        </FadeIn>

        <div className="order-1 md:order-2">
          <p className="text-xs tracking-widest2 uppercase text-sage mb-5">
            {quemEha.eyebrow}
          </p>
          <RevealText
            as="h2"
            className="font-display italic text-3xl sm:text-4xl md:text-5xl leading-[1.15] mb-3 text-balance"
          >
            {quemEha.title}
          </RevealText>
          <p className="font-display italic text-xl text-sage mb-8">{quemEha.lead}</p>

          <ThreadLine variant="straight" className="w-16 h-4 mb-8" />

          <FadeIn>
            <p className="text-ink/75 leading-relaxed text-[15px] md:text-base max-w-md">
              {quemEha.body}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <a
              href="#processo"
              className="group mt-8 inline-flex items-center gap-2 text-sm tracking-wide text-sage hover:text-sage-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              Conheça o processo
              <ArrowRight size={14} strokeWidth={1.6} className="transition-transform duration-400 group-hover:translate-x-1" />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
