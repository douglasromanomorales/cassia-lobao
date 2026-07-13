"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

// Botão flutuante de WhatsApp com identidade própria — sage-dark + coral,
// não o verde padrão. Só existe quando brand.whatsapp estiver configurado;
// nunca aponta para um contato fabricado.
export function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);
  const href = whatsappLink();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!href) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-sage-dark text-cream shadow-[0_8px_28px_rgba(44,43,41,0.28)] hover:pr-5 transition-[padding] duration-500 ease-bloom"
        >
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-coral/25 scale-100 group-hover:scale-125 transition-transform duration-500 ease-bloom" />
            <MessageCircle size={22} strokeWidth={1.6} className="relative text-coral" />
          </span>
          <span className="max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap text-xs tracking-widest2 uppercase transition-[max-width] duration-500 ease-bloom">
            Vamos conversar
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
