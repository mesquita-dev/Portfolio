import { Analytics } from '@vercel/analytics/react';

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import "./globals.css";


import localFont from "next/font/local";
const satoshi = localFont({
  src: [
    {
      path: "./font/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "lucas.design",
  description:
    "Confira meu portfólio de UI Engineer. Explore designs intuitivos e elegantes que elevam a experiência do usuário. Veja como posso agregar valor ao seu projeto. Descubra mais agora!",
};

export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body className={satoshi.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
