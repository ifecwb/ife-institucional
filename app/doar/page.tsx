import type { Metadata } from "next";
import { siteConfig } from "@/app/data/site.config";
import DoarClient from "./Doar";

export const metadata: Metadata = {
  title: "Doar | Instituto Futuro de Excelência (IFE)",
  description:
    "Faça sua doação ao Instituto Futuro de Excelência e ajude a transformar vidas através de educação, esporte e cultura em Curitiba.",
  keywords: [
    "doação",
    "doar",
    "instituto",
    "IFE",
    "curitiba",
    "educação",
    "esporte",
    "cultura",
    "pix",
    "conta corrente",
  ],
  alternates: {
    canonical: `${siteConfig.seo.urlSite}/doar`,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteConfig.seo.urlSite}/doar`,
    siteName: siteConfig.sigla,
    title: "Faça sua Doação | Instituto Futuro de Excelência",
    description:
      "Doe via PIX ou transferência bancária e apoie projetos gratuitos de educação, esporte e cultura do IFE.",
    images: [
      {
        url: siteConfig.seo.urlImagem,
        width: 1200,
        height: 630,
        alt: "Instituto Futuro de Excelência (IFE) – Faça sua doação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faça sua Doação | Instituto Futuro de Excelência",
    description: "Apoie o IFE com sua doação e ajude a transformar vidas.",
    images: [siteConfig.seo.urlImagem],
  },
};

export default function Page() {
  return <DoarClient />;
}
