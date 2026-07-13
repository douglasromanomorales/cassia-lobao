# Cássia Lobão · Estúdio Criativo

Site institucional autoral desenvolvido para a Cássia Lobão Estúdio Criativo pela **CodeChain Automações**.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- Framer Motion (reveals e microinterações)
- GSAP + ScrollTrigger (parallax do hero)
- Lenis (smooth scroll)
- lucide-react (ícones)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Notas de identidade visual

- Paleta, tipografia e tom de voz extraídos diretamente do brand book (PDF) e do perfil `@cassialobao.estudiocriativo`. Ver `lib/data.ts`.
- As fontes originais do brand book (Swear Display / Gopher) são comerciais e não estão disponíveis publicamente — foram substituídas por **Bodoni Moda** (display serifada de alto contraste) e **Jost** (geométrica sã), como analógicas de maior fidelidade visual disponíveis via `next/font/google`. Trocar em `app/layout.tsx` caso as fontes originais sejam licenciadas.
- As fotografias em `public/images` são recortes das próprias peças oficiais de branding fornecidas pela marca (uso autorizado).
- A galeria "Portfólio vivo" linka para os 9 posts reais do Instagram da marca — os links abrem em nova aba.

## Estrutura

```
app/            rotas, layout, SEO (sitemap/robots)
components/
  layout/       header, footer
  sections/     hero, manifesto, philosophy, portfolio, services, testimonials, instagram-gallery, cta
  ui/           reveal-text, fade-in, rose-mark
  providers/    smooth-scroll-provider (Lenis + GSAP)
lib/            data.ts (conteúdo real da marca), utils.ts
public/images/  fotografia oficial da marca
```
