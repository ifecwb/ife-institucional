import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CookieConsent from "./components/common/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instituto Futuro de Excelência",
  description: "Transformando gerações através do conhecimento — Esportes, Cultura e Educação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Adicionar aqui os demais imports, links, tracks, adsense */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>{children}</ThemeRegistry>
        {/* O Analytics só é carregado após o aceite, dentro deste componente. */}
        <CookieConsent />
      </body>
    </html>
  );
}
