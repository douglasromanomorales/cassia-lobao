import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { siteUrl } from "@/lib/site";

// Swear Display e Gopher (fontes originais do brand book) não estão
// disponíveis publicamente — Bodoni Moda e Jost foram escolhidas como
// substitutas de maior fidelidade visual (serifada de alto contraste +
// geométrica sã), mantendo a mesma intenção editorial da marca.
const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cássia Lobão | Estúdio Criativo — Decoração Floral Autoral",
    template: "%s | Cássia Lobão Estúdio Criativo",
  },
  description:
    "Estúdio criativo de decoração floral autoral para casamentos, eventos e projetos corporativos. Composições que traduzem sensibilidade, natureza e emoção em cada detalhe.",
  keywords: [
    "decoração floral",
    "estúdio criativo",
    "casamentos",
    "cenografia de eventos",
    "buquê personalizado",
    "Cássia Lobão",
    "Praia Grande",
  ],
  authors: [{ name: "Cássia Lobão Estúdio Criativo" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Cássia Lobão | Estúdio Criativo",
    description: "Reconhecimento à primeira vista. Decoração floral autoral para casamentos, eventos e corporativo.",
    url: siteUrl,
    siteName: "Cássia Lobão Estúdio Criativo",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-portrait.jpg",
        width: 1251,
        height: 645,
        alt: "Cássia Lobão Estúdio Criativo — decoração floral autoral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cássia Lobão | Estúdio Criativo",
    description: "Reconhecimento à primeira vista. Decoração floral autoral.",
    images: ["/images/hero-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD LocalBusiness — apenas fatos reais (nenhum endereço, telefone ou
// avaliação fabricados). Endereço completo e telefone podem ser adicionados
// aqui assim que confirmados pelo cliente.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FloristShop",
  name: "Cássia Lobão Estúdio Criativo",
  description:
    "Estúdio criativo de decoração floral autoral para casamentos, eventos e projetos corporativos.",
  url: siteUrl,
  image: `${siteUrl}/images/hero-portrait.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Praia Grande",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/cassialobao.estudiocriativo/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-cream text-ink">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
