"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import gTagJsAfterStr from "../js/client/gtagJsAfter";
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
      dangerouslySetInnerHTML={{
        __html: { fooStr },
      }}
    ></Script>
  );
}
