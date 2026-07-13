"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrado uma única vez, no momento da importação do módulo —
// garante que o plugin já esteja disponível antes de qualquer
// useEffect de componente rodar (evita corrida entre Hero e o provider
// de scroll suave).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
