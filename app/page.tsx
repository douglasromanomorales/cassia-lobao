import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Manifesto } from "@/components/sections/manifesto";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FloatingWhatsapp } from "@/components/ui/floating-whatsapp";

// 7 dobras, 7 perguntas: Impacto (Hero) → Quem é a Cássia (Philosophy) →
// Conexão emocional (Manifesto) → Trabalhos reais (Portfolio, já com a
// galeria do Instagram integrada) → Processo (Services) → Confiança
// (Testimonials) → Convite (CTA). Nomes de arquivo mantidos por histórico;
// o papel de cada seção mudou — ver comentário no topo de cada componente.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Manifesto />
        <Portfolio />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
