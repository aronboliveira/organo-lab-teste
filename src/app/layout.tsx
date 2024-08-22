import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.scss";
import "./styles/wpStyles.scss";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "Calculador de Solo — Organo Lab",
  //TODO PERGUNTAR PRA O CLIENTE
  description: "#",
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
        <script
          type="application/ld+json"
          className="yoast-schema-graph"
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
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        {/* //TODO PEDIR PRO CLIENTE */}
        <meta name="keywords" content="#" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="x-ua-compatible" content="IE-Edge" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Organo Lab" />
        <meta property="og:title" content="Calculadora de Solo — Organo Lab" />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Calculadora de Solo — Organo Lab" />
        {/* //TODO PERGUNTAR PARA O CLIENTE */}
        <meta name="twitter:description" content="#" />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://example.com/path-to-image.jpg"
        />
        {/* //TODO PERGUNTAR PARA O CLIENTE */}
        <meta name="twitter:site" content="@OrganoLab" />
        {/* //TODO PERGUNTAR PARA O CLIENTE */}
        <meta name="twitter:creator" content="@OrganoLab" />
        {/* //TODO LOCALIZAR NOS ASSETS DO CLIENTE */}
        <meta name="twitter:image" content="#" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
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
        {/* //TODO CAPTURAR <STYLES> */}
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
