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
import { keyPhrase } from "./page";
import Script from "next/script";
import JQueryForminatorIntegrator from "./components/client/jQuery/JQueryForminatorIntegrator";
import forminatorProps from "./lib/head/js/client/forminatorProps";
import GAnalyticsInitializer from "./components/client/initializers/GAnalyticsInitializer";
import FlatsomeInitializer from "./components/client/initializers/FlatsomeInitializer";
import EmojiInitializer from "./components/client/initializers/EmojiInitializer";
import JsInitializer from "./components/client/initializers/JsInitializer";
import ScriptsWatcher from "./components/client/watchers/ScriptsWatcher";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: `${keyPhrase} — Calculadora de Solo`,
  description: `Calculadora da ${keyPhrase} para que você tenha suas receitas de uma forma simples e comece a montar seu solo em casa!\nAqui você receber valores precisos para os seus kits de cultivo e preparação de solo, seguindo as nossas receitas!`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <NextOnlyHead />
      <body className={poppins.className}>
        <noscript>You need JavaScript to run this application.</noscript>
        <p id="seo-paragraph" style={{ display: "none" }}>
          COPYRIGHT: Aron Barbosa de Oliveira (https://github.com/aronboliveira)
          &amp; Danilo Sakamoto (GPL/GNU). This is an calculator for the Soil
          Kit (Calculadora de Solo) used by the Organo Lab ©. It was built using
          Typescript and Next.js. Static deployments are found in:
          https://organo-lab-calculadora.netlify.app/ and
          https://aronboliveira.github.io/organo-lab-calc-chunks/
        </p>
        {children}
      </body>
      <div id="script" style={{ display: "none" }}>
        <JsInitializer />
        <Script
          id="ldjson"
          type="application/ld+json"
          defer
          className="yoast-schema-graph"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://blog.organolab.com.br/calculadora-de-solo/",
                  url: origin,
                  name: metadata.title,
                  image: {
                    "@type": "ImageObject",
                    url: "https://blog.organolab.com.br/images/orglab_logo_og_630.png",
                    width: 630,
                    height: 630,
                  },
                  isPartOf: {
                    "@id": "https://blog.organolab.com.br/#website",
                  },
                  datePublished: "2023-12-03T17:23:06+00:00",
                  dateModified: new Date().toISOString(),
                  breadcrumb: {
                    "@id":
                      "https://blog.organolab.com.br/calculadora-de-solo/#breadcrumb",
                  },
                  inLanguage: "pt-BR",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: [origin],
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id":
                    "https://blog.organolab.com.br/calculadora-de-solo/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Início",
                      item: "https://blog.organolab.com.br/",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: metadata.title,
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://blog.organolab.com.br/#website",
                  url: "https://blog.organolab.com.br/",
                  name: "Organo Lab - Blog",
                  description:
                    "Calculadora de Solo Organo Lab © - Blog Organo Lab © : - Comece a montar seu Kit de Solo! — Horticultura, Sustentabilidade",
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://blog.organolab.com.br/?s={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "pt-BR",
                },
              ],
            }),
          }}
        />
        {/* Google Analytics */}
        <GAnalyticsInitializer />
        {/* Flatsome chunks */}
        <FlatsomeInitializer />
        {/* Wp emoji chunks */}
        <EmojiInitializer />
        <Script
          type="text/javascript"
          defer
          src="https://blog.organolab.com.br/wp-includes/js/wp-emoji-release.min.js?ver=6.6.1"
          id="wp-emoji-release"
        />
        {/* Forminator chunks */}
        <Script
          type="text/javascript"
          defer
          id="forminator-front-scripts-js-extra"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `const ForminatorFront = ${JSON.stringify(
              forminatorProps
            )}`,
          }}
        />
        <JQueryForminatorIntegrator />
        <Script
          type="text/javascript"
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          id="boostrap-script"
        />
        <div id="rejected-scripts" style={{ display: "none" }}>
          {/* Polyfill and delivr */}
          {/* <Script
			type="text/javascript"
			defer
			strategy="beforeInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
			id="wp-polyfill-js"
			integrity="sha384-Wv/Z6lsRW2CJ5nLojZYtFAXqWAd0R/zpDKTYRJBU5K0Ep4v9qGTIrm/TrAbGWHfB"
		/> */}
          {/* <Script
			type="text/javascript"
			async
			src="https://www.google-analytics.com/analytics.js"
			id="google-analytics"
			strategy="afterInteractive"
			crossOrigin="anonymous"
			integrity="sha384-n7dNaa3cQ6phJdeSMWcH2w0YhFtqEazxQPj8vYg/kdYpRxEfqlIEfq/5/pfe5Bzi"
		/> */}
          {/* <Script
			type="text/javascript"
			async
			src="https://www.googletagmanager.com/gtag/js?id=G-EK3Y6QCW4W&amp;l=dataLayer&amp;cx=c"
			id="google-tag-manager-1"
			integrity="sha384-6yFFCWHQCzHp3IBqt+DxIR9Q7S0Dqx23tghb65zXCEDphkQZZe5Xa7Rva7bFSdjv"
		/> */}
          {/* <Script
			type="text/javascript"
			async
			src="https://www.googletagmanager.com/gtag/js?id=G-4ZD7M3FZ3N&amp;l=dataLayer&amp;cx=c"
			id="google-tag-manager-2"
			integrity="sha384-L/4D2fUEz7kN/dLlHpFU37dLIO/yc6yMSfExNiB2aI+Mn62gttUTcbCQ+Sn3FFcf"
		/> */}
          {/* <Script
			type="text/javascript"
			async
			src="https://www.googletagmanager.com/gtag/js?id=UA-135835861-37"
			id="google_gtagjs-js"
			integrity="sha384-zJ4fdVywcoBj2H3B5lP3iNcIno2G1aYDo6EulY0qy9j24lBH6aw33eLzIATOjXv7"
		/> */}
          {/*
		<Script
			type="text/javascript"
			defer
			strategy="afterInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-content/themes/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js?ver=3.15.5"
			id="flatsome-live-search-js"
			integrity="sha384-3en60K1L1eQ8ImArgQjTMzpVCPe11nMt3P/4MY4uFYXitxD2uiXgo6cjiVpXZH0W"
		/>
		<Script
			type="text/javascript"
			defer
			strategy="afterInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/flatsome.js?ver=8d32fe071187c00e5c8eae51dcdefdd9"
			id="flatsome-js-js"
			integrity="sha384-HAQG5tcz8f+kOj2jJRZnj5is7NbvBKf0w+skR+c4HYoztIsqZyxqBrAfSiczuhan"
		/>
		<Script
			type="text/javascript"
			defer
			strategy="afterInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/forminator-ui/js/forminator-form.min.js?ver=1.28.0"
			id="forminator-form-js"
			integrity="sha384-owEWCP97OyAlK9EhkbAk+38ZJArxodqafQkWlLES2njGpVhRdZN5Sn/EJ/O9MhgM"
		/> */}
          {/* jQuery chunks */}
          {/* <Script
			type="text/javascript"
			defer
			src="https://blog.organolab.com.br/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"
			id="jquery-core-js"
			integrity="sha384-vT0xsrWPQ3JMjk9+X3p3J4glfdqQsMBzYwpxS1LPybrkJs6kZDw7slFXJ2iUkUy4"
			strategy="beforeInteractive"
			crossOrigin="anonymous"
		/> */}
          {/* <Script
			type="text/javascript"
			defer
			src="https://blog.organolab.com.br/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1"
			id="jquery-migrate-js"
			strategy="beforeInteractive"
			crossOrigin="anonymous"
			integrity="sha384-ez4i72z0XhJqm0ZRoQkpPN0bDV8Kw8PK3n8kjEZsWhRDrfICLd0AGghHJB+vytx0"
		/> */}
          {/* <Script
			type="text/javascript"
			defer
			src="https://blog.organolab.com.br/wp-includes/js/hoverIntent.min.js?ver=1.10.2"
			id="hoverIntent-js"
			strategy="afterInteractive"
			crossOrigin="anonymous"
			integrity="sha384-rh2wODSO92I4kkH65Wap0BDa/7/nJ54xl7yHgB7wBZjruN+S02lzQmbrSuxOzYt+"
		/> */}
          {/* <Script
			type="text/javascript"
			defer
			src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/jquery.inputmask.min.js?ver=1.28.0"
			id="forminator-jquery-inputmask-js"
			strategy="afterInteractive"
			crossOrigin="anonymous"
			integrity="sha384-hZvMi8RmeJb+r1i0bQbUrcFgyJi70eRyil2ex7ykc2DD2a+NoRs8xZOWvNk6zxmc"
		/> */}
          {/* <Script
			type="text/javascript"
			defer
			src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/inputmask.binding.js?ver=1.28.0"
			id="forminator-inputmask-binding-js"
			strategy="afterInteractive"
			crossOrigin="anonymous"
			integrity="sha384-5/QNW3hy8X5q6O99uGaZYeL9LVtNdXFnoRfE91OuDev2Z76uc4PM0JEyO/sPV9TH"
		/> */}
          {/* <Script
			type="text/javascript"
			defer
			strategy="afterInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-content/plugins/forminator/build/front/front.multi.min.js?ver=1.28.0"
			id="forminator-front-scripts-js"
			integrity="sha384-a1FiYAG3ISqv/DhIe4ZOaXVGeSlyLbPiAAhit+iQdU2XnRkmGF7dCLV0ShgwkKpX"
		/> */}
          {/* Axios */}
          {/* <AxiosNonceWrapper />  */}
          {/* <Script
			type="text/javascript"
			defer
			strategy="afterInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-content/plugins/forminator/build/front/front.multi.min.js?ver=1.28.0"
			id="forminator-front-scripts-js"
			integrity="sha384-a1FiYAG3ISqv/DhIe4ZOaXVGeSlyLbPiAAhit+iQdU2XnRkmGF7dCLV0ShgwkKpX"
		/> */}
          {/* <Script
			type="text/javascript"
			defer
			strategy="afterInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/inputmask.min.js?ver=1.28.0"
			id="forminator-inputmask-js"
			integrity="sha384-aUPHuXAJF+ohHX7TgMM9gI9X1BGhWqTcDigm1VVB+sOZKM18DT8yvqzgPP2D8h1J"
		/> */}
          {/* <Script
			type="text/javascript"
			defer
			strategy="afterInteractive"
			crossOrigin="anonymous"
			src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/inputmask.binding.js?ver=1.28.0"
			id="forminator-inputmask-binding-js"
			integrity="sha384-5/QNW3hy8X5q6O99uGaZYeL9LVtNdXFnoRfE91OuDev2Z76uc4PM0JEyO/sPV9TH"
		/> */}
        </div>
        <ScriptsWatcher />
      </div>
    </html>
  );
}
