"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, PlayCircle } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { ThreadLine } from "@/components/ui/thread-line";
import { portfolio, trabalhos, instagramPosts, brand } from "@/lib/data";

// Dobra 4 — Trabalhos reais. "O que ela já fez?"
// Portfólio editorial + galeria ao vivo unificados numa única resposta —
// a galeria do Instagram deixa de ser apêndice e vira prova, não vitrine.
const spans = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

const images = [
  ...portfolio,
  { title: "No alto da escada", description: "Cada arco começa com um esboço no ar.", image: "/images/gesto-altura.jpg" },
  { title: "Fora do ateliê", description: "O trabalho continua onde a luz estiver.", image: "/images/gesto-jardim.jpg" },
];

const colorClasses: Record<string, string> = {
  sage: "bg-sage text-cream",
  blush: "bg-blush text-ink",
  cream: "bg-blush-light text-ink",
  dark: "bg-sage-dark text-cream",
};

export function Portfolio() {
  return (
    <section id="trabalhos" className="bg-cream py-28 md:py-40">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div>
            <p className="text-xs tracking-widest2 uppercase text-sage mb-4">{trabalhos.eyebrow}</p>
            <RevealText
              as="h2"
              className="font-display italic text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-xl text-balance"
            >
              {trabalhos.title}
            </RevealText>
          </div>
          <p className="text-ink/60 text-sm max-w-xs leading-relaxed">{trabalhos.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {images.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${spans[i]} aspect-[4/3] md:aspect-auto min-h-[260px]`}
            >
              <Image
                src={item.image}
                alt={`${item.title} — ${item.description}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] ease-bloom group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display italic text-cream text-2xl md:text-3xl">{item.title}</h3>
                <p className="text-cream/75 text-sm mt-2 max-w-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-bloom">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-24">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-8">
            <div className="flex items-center gap-5">
              <ThreadLine variant="straight" className="w-14 h-4" />
              <p className="text-sm tracking-wide text-ink/70">
                Ao vivo no Instagram — clique em qualquer imagem para ver a publicação original
              </p>
            </div>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-ink border-b border-ink/40 hover:border-ink pb-1 transition-colors"
            >
              <Instagram size={15} strokeWidth={1.4} />
              Ver perfil completo — {brand.instagramHandle}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  post.type === "reel" ? "Ver reel original no Instagram" : "Ver publicação original no Instagram"
                }
                className={`group relative aspect-square overflow-hidden ${colorClasses[post.color]}`}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 text-current">
                  {post.type === "reel" ? (
                    <PlayCircle size={16} strokeWidth={1.4} className="opacity-70 self-end" />
                  ) : (
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="self-end opacity-0 group-hover:opacity-80 transition-opacity duration-400"
                    />
                  )}
                  {post.caption && (
                    <p className="hidden sm:block text-[11px] leading-snug line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      {post.caption}
                    </p>
                  )}
                </div>
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/40 transition-colors duration-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
