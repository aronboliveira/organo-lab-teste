/*
COPYRIGHTED BY: Aron Barbosa de Oliveira
Under GNU/GPL License
https://github.com/aronboliveira
*/
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/style.scss";
import "./styles/wpBanned.scss";
import "./styles/flatsomeStyles.scss";
import "./lib/head/js/wp/wp-emoji-release";
import "./lib/head/js/wp/wp-polyfill";
import "./lib/head/js/flatsome/flatsome";
import "./lib/head/js/flatsome/flatsome-live-search";
import NextOnlyHead from "./components/heads/NextOnlyHead";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const keyPhrase = "Organo Lab ©";
export const metadata: Metadata = {
  title: `${keyPhrase} — Calculadora de Solo`,
  description: `Calculadora da ${keyPhrase} para que você tenha suas receitas de uma forma simples e comece a montar seu solo em casa!`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <NextOnlyHead />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
