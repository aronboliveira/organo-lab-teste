import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/style.scss";
import "./styles/wpBanned.scss";
import Script from "next/script";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Calculador de Solo — Organo Lab ©",
  description:
    "Calculadora da Organo Lab © para que você tenha suas receitas de uma forma simples e comece a montar seu solo em casa!",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <noscript>You need JavaScript to run this application.</noscript>
        {/* //TODO ATUALIZAR AO FINAL */}
        <Script
          type="application/ld+json"
          className="yoast-schema-graph"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://blog.organolab.com.br/calculadora-de-solo/",
                  url: "https://blog.organolab.com.br/calculadora-de-solo/",
                  name: "Calculadora de SOLO ! - Organo Lab - Blog",
                  isPartOf: {
                    "@id": "https://blog.organolab.com.br/#website",
                  },
                  datePublished: "2023-12-03T17:23:06+00:00",
                  dateModified: "2024-01-29T01:40:09+00:00",
                  breadcrumb: {
                    "@id":
                      "https://blog.organolab.com.br/calculadora-de-solo/#breadcrumb",
                  },
                  inLanguage: "pt-BR",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: [
                        "https://blog.organolab.com.br/calculadora-de-solo/",
                      ],
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
                      name: "Calculadora de SOLO !",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://blog.organolab.com.br/#website",
                  url: "https://blog.organolab.com.br/",
                  name: "Organo Lab - Blog",
                  description: "Cultive conhecimento.",
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
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="pingback" href="https://blog.organolab.com.br/xmlrpc.php" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="keywords"
          content="Jardinagem, Cultivo, Solo, Compostagem, Horticultura, Fertilizantes, Agricultura sustentável,
          Substratos, Adubo orgânico, Solo nutritivo, Solo para jardinagem, Melhorador de solo, Composição de solo, Cultivo sustentável,
          Calculadora de solo, Montagem de solo, Kit de solo, Solo matinho cheiroso, 
          Receita de solo, Receita matinho cheiroso, Solo vivo, Super solo, Solo organico"
        />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="x-ua-compatible" content="IE-Edge" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Organo Lab" />
        <meta
          property="og:title"
          content="Calculadora de Solo — Organo Lab ©"
        />
        <meta
          property="og:author"
          content="Aron Barbosa de Oliveira (https://github.com/aronboliveira) & Danilo Sakamoto"
        />
        <meta property="og:section" content="Science" />
        {/* //TODO DEFINIR APÓS DEPLOY */}
        <meta property="og:url" content="#" />
        {/* //TODO LOCALIZAR NOS ASSETS DO CLIENTE */}
        <meta property="og:image" itemProp="image" content="#" />
        {/* //TODO PERGUNTAR PRO CLIENTE */}
        <meta property="og:image:width" content="#" />
        {/* //TODO PERGUNTAR PRO CLIENTE */}
        <meta property="og:image:height" content="#" />
        {/* //TODO PERGUNTAR PRO CLIENTE */}
        <meta property="og:image:type" content="#" />
        {/* //TODO ATUALIZAR AO FINAL */}
        <meta property="og:updated_time" content="#" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Calculadora de Solo — Organo Lab ©"
        />
        <meta
          name="twitter:description"
          content="Calculadora da Organo Lab © para que você tenha suas receitas de uma forma simples e comece a montar seu solo em casa!"
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://example.com/path-to-image.jpg"
        />
        <meta name="twitter:image" content="#" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="prefetch"
          href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.countup.fe2c1016.js"
        />
        <link
          rel="prefetch"
          href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.sticky-sidebar.a58a6557.js"
        />
        <link
          rel="prefetch"
          href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.tooltips.29144c1c.js"
        />
        <link
          rel="prefetch"
          href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.vendors-popups.947eca5c.js"
        />
        <link
          rel="prefetch"
          href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.vendors-slider.f0d2cbc9.js"
        />
        <meta
          name="msapplication-TileImage"
          content="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-270x270.png"
        />
        <link
          rel="icon"
          href="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-192x192.png"
          sizes="192x192"
        />
        {/* //TODO PEDIR AO CLIENTE VARIAÇÕES DE TAMANHO (60, 114, 144) */}
        <link
          rel="apple-touch-icon"
          id="ATIDef"
          href="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-180x180.png"
        />
        {/* //TODO DEFINIR APÓS DEPLOY */}
        <link rel="canonical" href="#" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Feed para Organo Lab - Blog »"
          href="https://blog.organolab.com.br/feed/"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Feed de comentários para Organo Lab - Blog »"
          href="https://blog.organolab.com.br/comments/feed/"
        />
        <link
          rel="stylesheet"
          id="forminator-module-css-1707-css"
          href="https://blog.organolab.com.br/wp-content/uploads/forminator/1707_03bf21c0e19c91648417a24d869761a9/css/style-1707.css?ver=1701624781"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="forminator-icons-css"
          href="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/forminator-ui/css/forminator-icons.min.css?ver=1.28.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="forminator-utilities-css"
          href="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/forminator-ui/css/src/forminator-utilities.min.css?ver=1.28.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="forminator-grid-default-css"
          href="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/forminator-ui/css/src/grid/forminator-grid.open.min.css?ver=1.28.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="forminator-forms-flat-base-css"
          href="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/forminator-ui/css/src/form/forminator-form-flat.base.min.css?ver=1.28.0"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="buttons-css"
          href="https://blog.organolab.com.br/wp-includes/css/buttons.min.css?ver=6.6.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="forminator-module-css-1711-css"
          href="https://blog.organolab.com.br/wp-content/uploads/forminator/1711_276234a71a141fc089793744a3f3ecaa/css/style-1711.css?ver=1701624640"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="forminator-module-css-1712-css"
          href="https://blog.organolab.com.br/wp-content/uploads/forminator/1712_58b1c954bcfe1039cd12d62d66a36ba5/css/style-1712.css?ver=1701625478"
          type="text/css"
          media="all"
        />
        <Script
          type="text/javascript"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EK3Y6QCW4W&amp;l=dataLayer&amp;cx=c"
        />
        <Script
          type="text/javascript"
          async
          src="https://www.google-analytics.com/analytics.js"
        />
        <Script
          type="text/javascript"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4ZD7M3FZ3N&amp;l=dataLayer&amp;cx=c"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/themes/flatsome/inc/extensions/flatsome-live-search/flatsome-live-search.js?ver=3.15.5"
          id="flatsome-live-search-js"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0"
          id="wp-polyfill-js"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-includes/js/hoverIntent.min.js?ver=1.10.2"
          id="hoverIntent-js"
        />
        {/* //TODO FLATSOMESCRIPT */}
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/flatsome.js?ver=8d32fe071187c00e5c8eae51dcdefdd9"
          id="flatsome-js-js"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/jquery.validate.min.js?ver=1.28.0"
          id="forminator-jquery-validate-js"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/forminator-ui/js/forminator-form.min.js?ver=1.28.0"
          id="forminator-form-js"
        />
        {/* //TODO FORMINATOR FRONT SCRIPTS JS EXTRA */}
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/plugins/forminator/build/front/front.multi.min.js?ver=1.28.0"
          id="forminator-front-scripts-js"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/inputmask.min.js?ver=1.28.0"
          id="forminator-inputmask-js"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/jquery.inputmask.min.js?ver=1.28.0"
          id="forminator-jquery-inputmask-js"
        />
        <Script
          type="text/javascript"
          src="https://blog.organolab.com.br/wp-content/plugins/forminator/assets/js/library/inputmask.binding.js?ver=1.28.0"
          id="forminator-inputmask-binding-js"
        />
        {/* //TODO JQUERY */}
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
