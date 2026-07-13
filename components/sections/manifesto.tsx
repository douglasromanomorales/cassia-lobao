import Image from "next/image";
import { RevealText } from "@/components/ui/reveal-text";
import { ThreadLine } from "@/components/ui/thread-line";
import { conexao } from "@/lib/data";

// Dobra 3 — Conexão emocional. "Por que isso é diferente?"
// Tipografia integrada a uma fotografia real (não um bloco de texto sobre
// fundo plano) — a mesma lógica de composição do deck: imagem + palavra
// trabalhando juntas, nunca vazio decorativo.
export function Manifesto() {
  return (
    <section id="conexao" className="relative bg-sage-dark text-cream py-28 md:py-0 overflow-hidden md:min-h-[92vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/florals-vibrant.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.28] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-sage-dark/70" />
      </div>

      <div className="container-edge relative flex flex-col md:min-h-[92vh] md:justify-center py-6 md:py-24">
        <RevealText
          as="h2"
          className="font-display italic text-4xl sm:text-5xl md:text-7xl leading-[1.08] max-w-3xl text-balance"
        >
          {conexao.lines[0]}
          <br />
          {conexao.lines[1]}
        </RevealText>

        <ThreadLine variant="curve" className="w-24 h-10 mt-8 mb-8" />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          <RevealText
            as="p"
            delay={0.1}
            className="font-body text-base md:text-lg text-cream/75 leading-relaxed max-w-md"
          >
            {conexao.closing}
          </RevealText>

          <div className="relative aspect-[4/3] w-full max-w-sm md:ml-auto overflow-hidden border border-cream/20">
            <Image
              src="/images/gesto-tecer-square.jpg"
              alt="Cássia Lobão amarrando uma rosa branca — detalhe do gesto"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
