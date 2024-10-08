"use client";
import Script from "next/script";
import flatsomeVars from "../../../lib/head/js/client/flatsomeProps";
export default function FlatsomeInitializer(): JSX.Element {
  return (
    <Script
      id="flatsome-js-js-extra"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      dangerouslySetInnerHTML={{
        __html: `window.flatsomeVars = ${JSON.stringify(flatsomeVars)};`,
      }}
    />
  );
}
