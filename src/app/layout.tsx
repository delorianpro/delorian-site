import type { Metadata } from "next";
import "./globals.css";
import { title_font, subtitle_font } from "@/functions/fonts";


export const metadata: Metadata = {
  title: "Delorian | Automação e Manutenção de portões eletrônicos",
  description: "Automação e manutenção de portões eletrônicos. Instalação, conserto e eficiência. A Delorian oferece automação e manutenção de portões eletrônicos, instalação de cremalheiras e conserto de motores. Serviços especializados para segurança e conveniência. Confie na expertise da Delorian para soluções confiáveis e eficientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${title_font.variable} ${subtitle_font.variable}`}>
        {children}
      </body>
    </html>
  );
}
