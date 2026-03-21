import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranyeri Klennes | Fullstack Developer & Data Scientist",
  description: "Portfólio de Ranyeri Klennes Alves Cavalcante - Desenvolvedor Fullstack e Cientista de Dados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
          <filter id="liquid-refraction">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
