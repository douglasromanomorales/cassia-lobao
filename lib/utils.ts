import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { brand } from "@/lib/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Constrói o link de WhatsApp a partir do número real configurado em
// lib/data.ts. Retorna null enquanto brand.whatsapp estiver vazio, para
// que nenhum componente aponte para um contato que não existe.
export function whatsappLink(message: string = brand.whatsappMessage): string | null {
  if (!brand.whatsapp) return null;
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}
