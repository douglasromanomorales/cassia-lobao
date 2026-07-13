// URL base do site — resolve automaticamente para o domínio de preview do
// Vercel (VERCEL_URL) quando ainda não há domínio próprio configurado, e
// cai para o domínio final assim que ele estiver no ar. Isso evita que
// canonical/OG/sitemap apontem para o domínio errado durante a fase de
// análise no Vercel.
const PRODUCTION_URL = "https://cassialobao.com.br";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : PRODUCTION_URL);
