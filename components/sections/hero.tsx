"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Instagram, MessageCircle, Volume2, VolumeX } from "lucide-react";
import { brand, impacto } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";
import { ThreadLine } from "@/components/ui/thread-line";

// O Hero nasce do vídeo real do ateliê — a Cássia criando, não a flor pronta.
// Split editorial: vídeo (o gesto) de um lado, tipografia (o significado) do
// outro, ligados pelo Fio. Em telas estreitas o vídeo vira o fundo inteiro.
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const wa = whatsappLink();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <section id="top" className="relative w-full overflow-hidden bg-sage-dark md:h-[100svh] md:min-h-[720px]">
      <div className="flex flex-col md:flex-row md:h-full">
        {/* vídeo — o gesto (protagonista) */}
        <div className="relative h-[68svh] min-h-[460px] w-full md:h-full md:w-[60%] md:order-2">
          {!reduceMotion ? (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              poster="/images/hero-process-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Registro real do ateliê Cássia Lobão — processo de criação floral"
            >
              {/* WebM/VP9 primeiro — ~27% mais leve que o MP4, mesmo conteúdo */}
              <source src="/videos/hero-process.webm" type="video/webm" />
              <source src="/videos/hero-process.mp4" type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/hero-process-poster.jpg"
              alt="Cássia Lobão criando uma composição floral no ateliê"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/70 via-transparent to-sage-dark/10 md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-sage-dark/25" />

          {!reduceMotion && (
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Ativar som do vídeo" : "Silenciar vídeo"}
              className="absolute bottom-6 right-6 z-10 flex items-center gap-2 border border-cream/40 bg-sage-dark/30 px-3 py-2 text-cream/85 backdrop-blur-sm transition-colors duration-500 hover:bg-sage-dark/55"
            >
              {muted ? <VolumeX size={15} strokeWidth={1.4} /> : <Volume2 size={15} strokeWidth={1.4} />}
              <span className="text-[10px] tracking-widest2 uppercase hidden sm:inline">Som real do ateliê</span>
            </button>
          )}
        </div>

        {/* tipografia — o significado */}
        <div className="relative flex flex-1 flex-col justify-end px-6 pb-12 pt-10 sm:px-10 md:order-1 md:justify-center md:pb-0 md:pt-0 md:px-14 lg:px-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-cream/70 text-xs md:text-sm tracking-widest2 uppercase mb-5 md:mb-6"
          >
            {impacto.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display italic text-cream text-[clamp(2.5rem,8vw,4.75rem)] leading-[0.98] text-balance"
          >
            {impacto.headline[0]}
            <br />
            {impacto.headline[1]}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="my-7 w-28"
          >
            <ThreadLine variant="kink" className="w-full h-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-cream/75 text-sm md:text-base leading-relaxed"
          >
            {impacto.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral text-cream px-6 py-3.5 text-sm tracking-wide hover:bg-coral/85 transition-colors duration-400 ease-bloom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <MessageCircle size={15} strokeWidth={1.6} />
                Conversar no WhatsApp
              </a>
            ) : (
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cream text-ink px-6 py-3.5 text-sm tracking-wide hover:bg-blush transition-colors duration-400 ease-bloom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <Instagram size={15} strokeWidth={1.6} />
                Conversar no Instagram
              </a>
            )}
            <a
              href="#trabalhos"
              className="group inline-flex items-center gap-2 text-cream text-sm tracking-wide border-b border-cream/40 hover:border-cream pb-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Conheça os trabalhos
              <ArrowRight size={14} strokeWidth={1.6} className="transition-transform duration-400 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-8 text-[11px] tracking-wide text-cream/45 italic font-display"
          >
            {impacto.videoCaption}
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-cream/60"
      >
        <span className="text-[10px] tracking-widest2 uppercase">Role</span>
        <ArrowDown size={16} strokeWidth={1.4} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
