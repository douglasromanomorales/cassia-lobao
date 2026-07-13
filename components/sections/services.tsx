"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { ThreadLine } from "@/components/ui/thread-line";
import { processo } from "@/lib/data";

// Dobra 5 — Processo. "Como ela trabalha?"
// Substitui o antigo catálogo de serviços por uma sequência sensorial de
// etapas, ancorada numa foto real de bastidor — não um ícone genérico.
export function Services() {
  return (
    <section id="processo" className="bg-sage text-cream py-28 md:py-40">
      <div className="container-edge grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20">
        <div className="relative">
          <div className="sticky top-28">
            <RevealText
              as="h2"
              className="font-display italic text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-8 text-balance"
            >
              {processo.title}
            </RevealText>
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
              <Image
                src="/images/gesto-atelie.jpg"
                alt="Cássia Lobão preparando folhagens no ateliê"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <ThreadLine
            variant="straight"
            className="absolute left-[19px] top-4 bottom-4 w-px h-[calc(100%-2rem)] text-cream/30 hidden sm:block"
          />
          <div className="space-y-10 md:space-y-14">
            {processo.steps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 sm:gap-10 pl-0 sm:pl-2"
              >
                <span className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-coral text-cream text-xs flex items-center justify-center font-body tracking-wide">
                  {step.index}
                </span>
                <div>
                  <h3 className="font-display italic text-2xl md:text-3xl mb-2">{step.title}</h3>
                  <p className="text-cream/75 text-sm md:text-base leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 md:mt-16 pl-16 sm:pl-20"
          >
            <a
              href="#convite"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-cream border-b border-cream/40 hover:border-cream pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              Comece o seu projeto
              <ArrowRight size={14} strokeWidth={1.6} className="transition-transform duration-400 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
