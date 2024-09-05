import { keyPhrase } from "../../../app/page";
export const origin = "https://organo-lab-calculadora.netlify.app/";
export default function NextOnlyHead(): JSX.Element {
  return (
    <head>
      <link
        rel="canonical"
        href={origin}
        crossOrigin="anonymous"
        integrity="sha384-7XN4Czpe997dvWH0TWGoV73sSd/r5mooFcjAVxx5O8gdp+iJzTkhS4x1fCVNbaOr"
      />
      <link
        rel="profile"
        href="https://gmpg.org/xfn/11"
        crossOrigin="anonymous"
        integrity="sha384-x4tW5vxzpqXWNAknu5akF+v8EnyE0TfLkG1jGubWLGr9fX2LkoZ3CljMvz9aWI1b"
      />
      <link
        rel="pingback"
        href="https://blog.organolab.com.br/xmlrpc.php"
        crossOrigin="anonymous"
        integrity="sha384-OZE7GpJ+ct9cqkbFg4frtg/ir5iOIJPQ0Oub+s+bh6xJQGu/BZZEjRep9eNKiTYz"
      />
      {/* Basic descriptions */}
      <link
        rel="EditURI"
        type="application/rsd+xml"
        title="RSD"
        href="https://blog.organolab.com.br/xmlrpc.php?rsd"
        crossOrigin="anonymous"
        integrity="sha384-qzMdtl/q6ylv1XEC1+3HzzuxX5E9+wFAaFtJuHUs3MvnYUgA02DijgIz0LWN+Gie"
      />
      <link
        rel="shortlink"
        href="https://blog.organolab.com.br/?p=1708"
        crossOrigin="anonymous"
        integrity="sha384-OLBgp1GsljhM2TJ+sbHjaiH9txEUvgdDTAzHv2P24donTt6/529l+9Ua0vFImLlb"
      />
      <link
        rel="https://api.w.org/"
        href="https://blog.organolab.com.br/wp-json/"
        crossOrigin="anonymous"
        integrity="sha384-56HO63RVqu1uTLf9NZi23uLFaCmdMdeehon2GLvmizdWZE/E7y/wvOwmuCF45D9g"
      />
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      <meta name="X-UA-Compatible" content="IE=Edge" />
      {/* Social Media and SEO Indexers */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="keywords"
        content="Jardinagem, Cultivo, Solo, Compostagem, Horticultura, Fertilizantes, Agricultura sustentável, Substratos, Adubo orgânico, Solo nutritivo, Solo para jardinagem, Melhorador de solo, Composição de solo, Cultivo sustentável, Calculadora de solo, Montagem de solo, Kit de solo, Solo matinho cheiroso, Receita de solo, Receita matinho cheiroso, Solo vivo, Super solo, Solo orgânico, Gardening, Cultivation, Soil, Composting, Horticulture, Fertilizers, Sustainable agriculture, Substrates, Organic fertilizer, Nutritious soil, Gardening soil, Soil enhancer, Soil composition, Sustainable cultivation, Soil calculator, Soil assembly, Soil kit, Fragrant soil, Soil recipe, Fragrant soil recipe, Living soil, Super soil, Organic soil, Jardinería, Cultivo, Suelo, Compostaje, Horticultura, Fertilizantes, Agricultura sostenible, Sustratos, Fertilizante orgánico, Suelo nutritivo, Suelo para jardinería, Mejorador de suelo, Composición del suelo, Cultivo sostenible, Calculadora de suelo, Montaje de suelo, Kit de suelo, Suelo fragante, Receta de suelo, Receta de suelo fragante, Suelo vivo, Súper suelo, Suelo orgánico"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Organo Lab" />
      <meta
        property="og:title"
        content={`${keyPhrase} — Calculadora de Solo`}
      />
      <meta property="og:url" content={origin} />
      <meta
        property="og:image"
        content={`${origin}/images/orglab_logo_og_630.png`}
      />
      <meta property="og:image:width" content="630" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${keyPhrase} — Título: Calculadora de Solo`}
      />
      <meta
        property="article:author"
        content="Aron Barbosa de Oliveira (https://github.com/aronboliveira)"
      />
      <meta property="article:author" content="Danilo Sakamoto" />
      <meta property="article:section" content="Science" />
      <meta
        property="article:modified_time"
        content={new Date().toISOString()}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${keyPhrase} — Calculadora de Solo`}
      />
      <meta
        name="twitter:image"
        content={`https://blog.organolab.com.br/images/orglab_logo_twitter_628.png`}
      />
      <meta
        name="twitter:description"
        content="Calculadora da Organo Lab © para que você tenha suas receitas de uma forma simples e comece a montar seu solo em casa!"
      />
      {/* Icons */}
      <link
        href={`/images/org_lab_logo_favicon_16.png`}
        data-icon-group="favicon"
        id="favicon_16"
        sizes="16x16"
        rel="icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_safari.png`}
        data-icon-group="safari"
        id="safari_icon"
        sizes="16x16"
        rel="icon"
        crossOrigin="anonymous"
      />
      <link
        href="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-32x32.png"
        data-icon-group="favicon"
        id="favicon_32"
        rel="icon"
        sizes="32x32"
        crossOrigin="anonymous"
        integrity="sha384-DIALoX8G5LpyVsVqCKCGL4/6EZVJUw9wOjQ2DI97RVXiZSCGLSj7yyI0wAOJK5lR"
      />
      <link
        href={`/images/org_lab_logo_favicon_64.png`}
        data-icon-group="favicon"
        id="favicon_64"
        sizes="64x64"
        rel="icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_57.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_57"
        sizes="57x57"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_60.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_60"
        sizes="60x60"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_72.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_72"
        sizes="72x72"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_76.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_76"
        sizes="76x76"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_favicon_96.png`}
        data-icon-group="favicon"
        id="favicon_96"
        sizes="96x96"
        rel="icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_114.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_114"
        sizes="114x114"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_120.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_120"
        sizes="120x120"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_144.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_144"
        sizes="144x144"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_152.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_152"
        sizes="152x152"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        href={`/images/org_lab_logo_ati_167.png`}
        data-icon-group="apple-touch-icon"
        id="ati_icon_167"
        sizes="167x167"
        rel="apple-touch-icon"
        crossOrigin="anonymous"
      />
      <link
        rel="apple-touch-icon"
        data-icon-group="apple-touch-icon"
        id="ati_icon_180"
        sizes="180x180"
        crossOrigin="anonymous"
        href="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-180x180.png"
        integrity="sha384-+y0NwbBte0bB7MMcmtzVuqlGa7qp80rj2RoBPjjqEhKUflvejvNLyiftKYVoUHg8"
      />
      <link
        href="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-192x192.png"
        data-icon-group="android-chrome"
        id="android_chrome_icon_192"
        rel="icon"
        sizes="192x192"
        crossOrigin="anonymous"
        integrity="sha384-I6tJqOez3XOojpZ2+syqhRWSdNuSYVYMoCbQmgcWBifQJtRChSrDr2vQ94Sm0e1m"
      />
      <link
        href={`/images/org_lab_logo_and_196.png`}
        data-icon-group="android-chrome"
        id="android_chrome_icon_196"
        sizes="196x196"
        rel="icon"
        crossOrigin="anonymous"
      />
      <meta name="msapplication-config" content="./browserConfig.xml" />
      <meta
        id="icon_ms_tile"
        data-sizes="270x270"
        name="msapplication-TileImage"
        content="https://blog.organolab.com.br/wp-content/uploads/2022/05/cropped-ORGLAB_Logo-270x270.png"
      />
      <link
        href={`/images/org_lab_logo_and_512.png`}
        data-icon-group="android-chrome"
        id="android_chrome_icon_512"
        sizes="512x512"
        rel="icon"
        crossOrigin="anonymous"
      />
      {/* Embeds */}
      <link
        rel="alternate"
        title="JSON"
        type="application/json"
        crossOrigin="anonymous"
        href="https://blog.organolab.com.br/wp-json/wp/v2/pages/1708"
        integrity="sha384-L+UfpLhFxiO/myagJDVlOYkO3BgOTdPQJbFpwMNGG1QhvNYoOwtC820UwEiMLAbb"
      />
      <link
        rel="alternate"
        title="oEmbed (JSON)"
        type="application/json+oembed"
        crossOrigin="anonymous"
        href="https://blog.organolab.com.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fblog.organolab.com.br%2Fcalculadora-de-solo%2F"
        integrity="sha384-+X03etEJfLzUNgaWf9PqPizut3iL0UG65Cg2QXGjzOi8iK+Uai/H9COsZvwHebRj"
      />
      <link
        rel="alternate"
        title="oEmbed (XML)"
        type="text/xml+oembed"
        crossOrigin="anonymous"
        href="https://blog.organolab.com.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fblog.organolab.com.br%2Fcalculadora-de-solo%2F&amp;format=xml"
        integrity="sha384-kaUPzrQ1xmQuUgB4HetCaXE+Jruyd56+GYirIVLTqD2Q0Xh20nartldJhrTSxtNn"
      />
      {/* RSS */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Feed para Organo Lab - Blog »"
        href="https://blog.organolab.com.br/feed/"
        id="feed-blog"
        crossOrigin="anonymous"
        integrity="sha384-0Txx8SISzmlkjvi045qZ+9/VCPJIJY1McUin0KUMSt6f4CHQ3ModV3k9TF75urR2"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Feed de comentários para Organo Lab - Blog »"
        href="https://blog.organolab.com.br/comments/feed/"
        id="feed-comments-blog"
        crossOrigin="anonymous"
        integrity="sha384-2r1mP0SQcF1nIDXSFU3Tvy//wHR7oeY8Bn0qFTF2SA5nwdu2fB5cq0ki2pm1WWM/"
      />
      {/* DNS Prefetches */}
      <link
        rel="dns-prefetch"
        href="https://cdn.jsdelivr.net"
        id="prefetch-jsDelivr"
        crossOrigin="anonymous"
        integrity="sha384-aoyvEG2/1QDJh1N1aA/bW4qrY/B/T4R6jnmZZm8776U8SKAUK7BabPzVhuHh3Jea"
      />
      <link
        rel="dns-prefetch"
        href="https://www.googletagmanager.com"
        id="prefetch-google-tag-manager"
        crossOrigin="anonymous"
        integrity="sha384-o+SdmONPZGMQfeWYDOyRHbCBLFsppgowAJHA03UUCGF5mIUIeuD1EYnqbMqOqxeT"
      />
      <link
        rel="dns-prefetch"
        href="https://fonts.googleapis.com"
        id="prefetch-google-fonts"
        crossOrigin="anonymous"
        integrity="sha384-0wcy8qFgK2KW18OIp7CDk5LA4IXc+dCW2jh5umyKxHgJWDx+o57w1LK/ZVNi73PQ"
      />
      {/* Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
        id="bootstrap-css"
      />
      <div style={{ display: "none" }} id="rejected-meta-links">
        {/* Flatsome prefetches */}
        {/* <link
			rel="prefetch"
			href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.countup.fe2c1016.js"
			id="prefetch-chunk-countup"
			crossOrigin="anonymous"
			integrity="sha384-jynUzHH5GzeD89NjMgKexqF7/+mTyfA01bFRrVitre1e3OgoFLxpu4cQa75oZb3m"
		/>
		<link
			rel="prefetch"
			href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.sticky-sidebar.a58a6557.js"
			id="prefetch-chunk-sticky-sidebar"
			crossOrigin="anonymous"
			integrity="sha384-abmMzw9HKNxmcGVUnHeNC1Sx+QYqa+R2HuabtuIVnm5S1gdSGzUaD0z2xPK9agCU"
		/>
		<link
			rel="prefetch"
			href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.tooltips.29144c1c.js"
			id="prefetch-chunk-tooltips"
			crossOrigin="anonymous"
			integrity="sha384-YgeQ/3fXQsWnOXViKtxEnb9gq44BqZOFY6KhW3UjvmEyJvWWPH4fylorAJjwelis"
		/>
		<link
			rel="prefetch"
			href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.vendors-popups.947eca5c.js"
			id="prefetch-chunk-vendors-popups"
			crossOrigin="anonymous"
			integrity="sha384-GxtiP0VfzZ1+HZ8Uftwz4hI09anSy6JtS8TLf5UtPIvtrqhYwKba25wKEYYi9Yeu"
		/>
		<link
			rel="prefetch"
			href="https://blog.organolab.com.br/wp-content/themes/flatsome/assets/js/chunk.vendors-slider.f0d2cbc9.js"
			id="prefetch-chunk-vendors-slider"
			crossOrigin="anonymous"
			integrity="sha384-pRFRCUhYEgd5cGnDnUOud4CcC7XDIknq1/3G9K4yTyfxi8sCOJP9ztLJBnOGXTRQ"
		/> */}
      </div>
    </head>
  );
}
