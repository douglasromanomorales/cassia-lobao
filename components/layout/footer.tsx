import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { brand, nav } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";
import { RoseMark } from "@/components/ui/rose-mark";
import { ThreadLine } from "@/components/ui/thread-line";

export function Footer() {
  const wa = whatsappLink();

  return (
    <footer className="bg-sage-dark text-cream relative overflow-hidden">
      <RoseMark className="absolute -right-6 -bottom-10 w-40 h-64 text-cream/10 rotate-[8deg]" />

      <div className="container-edge pt-24 pb-10 relative">
        <div className="grid md:grid-cols-[1.3fr_0.8fr_1fr] gap-14 md:gap-8">
          <div>
            <ThreadLine variant="straight" className="w-14 h-4 mb-6" />
            <p className="font-display italic text-4xl sm:text-5xl leading-[1.05] mb-6">
              Vamos criar
              <br />
              sua história?
            </p>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              {brand.categories}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest2 uppercase text-cream/50 mb-5">Navegação</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-cream/85 hover:text-cream transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest2 uppercase text-cream/50 mb-5">Contato</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-cream/85 hover:text-cream transition-colors"
                >
                  <Instagram size={15} strokeWidth={1.4} />
                  {brand.instagramHandle}
                </a>
              </li>
              {wa && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cream/85 hover:text-cream transition-colors"
                  >
                    <MessageCircle size={15} strokeWidth={1.4} />
                    WhatsApp
                  </a>
                </li>
              )}
              {brand.email && (
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="inline-flex items-center gap-2 text-sm text-cream/85 hover:text-cream transition-colors"
                  >
                    <Mail size={15} strokeWidth={1.4} />
                    {brand.email}
                  </a>
                </li>
              )}
              <li className="inline-flex items-center gap-2 text-sm text-cream/85">
                <MapPin size={15} strokeWidth={1.4} />
                {brand.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Cássia Lobão Estúdio Criativo. Todos os direitos reservados.</p>
          <p>Desenvolvido por CodeChain Automações</p>
        </div>
      </div>
    </footer>
  );
}
