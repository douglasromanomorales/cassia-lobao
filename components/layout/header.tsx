"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { nav, brand } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-bloom",
          scrolled
            ? "bg-cream/90 backdrop-blur-md py-4 shadow-[0_1px_0_0_rgba(44,43,41,0.08)]"
            : "bg-transparent py-7"
        )}
      >
        <div className="container-edge flex items-center justify-between">
          <a href="#top" className="font-display text-lg md:text-xl tracking-wide text-ink">
            Cássia Lobão
            <span className="hidden sm:inline text-[0.65em] font-body tracking-widest2 uppercase ml-2 align-middle text-sage">
              Estúdio Criativo
            </span>
          </a>

          <div className="hidden md:flex items-center gap-9">
            <nav className="flex items-center gap-9">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm tracking-wide text-ink/80 hover:text-sage transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-sage transition-all duration-500 ease-bloom group-hover:w-full" />
                </a>
              ))}
            </nav>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil no Instagram"
              className="text-ink/50 hover:text-coral transition-colors"
            >
              <Instagram size={17} strokeWidth={1.4} />
            </a>
          </div>

          <button
            aria-label="Abrir menu"
            className="md:hidden text-ink"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} strokeWidth={1.4} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-sage-dark text-cream flex flex-col"
          >
            <div className="container-edge flex justify-end py-7">
              <button aria-label="Fechar menu" onClick={() => setOpen(false)}>
                <X size={28} strokeWidth={1.4} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-start justify-center container-edge gap-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl sm:text-5xl italic"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-edge py-8">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors"
              >
                <Instagram size={15} strokeWidth={1.4} />
                {brand.instagramHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
