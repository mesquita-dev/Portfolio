import Script from "next/script";
const GTM_ID = "G-NL5Y8LG4D9";

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
    <html lang="en">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body className={satoshi.className}>
        {children}

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
