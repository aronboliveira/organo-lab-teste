"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import gTagJsAfterStr from "../../lib/head/js/client/gtagJsAfter";
export default function GAnalyticsInitializer(): JSX.Element {
  const [fooStr, setFoo] = useState<string>("");
  useEffect(() => {
    setFoo(gTagJsAfterStr ?? "");
  }, []);
  return (
    <Script
      type="text/javascript"
      async
      id="google_gtagjs-js-after"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      dangerouslySetInnerHTML={{
        __html: fooStr,
      }}
    />
  );
}
