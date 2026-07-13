import { cn } from "@/lib/utils";

// Elemento gráfico decorativo inspirado na ilustração de rosa em line art
// presente no brand book (páginas "o poder das flores"). Redesenhado em SVG
// próprio para uso responsivo no site — não é um asset copiado do PDF.
export function RoseMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-current", className)}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M60 10 C40 18, 30 35, 40 52 C48 64, 62 66, 70 56 C78 46, 72 32, 60 30" />
      <path d="M60 10 C80 16, 90 34, 78 50 C70 60, 56 60, 50 48" />
      <path d="M40 52 C30 46, 24 32, 34 20" />
      <path d="M60 66 L54 190" />
      <path d="M54 110 C40 106, 32 116, 30 128" />
      <path d="M56 140 C68 134, 78 142, 82 154" />
    </svg>
  );
}
