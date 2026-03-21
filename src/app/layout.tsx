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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
