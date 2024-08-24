"use client";
import { useEffect } from "react";
import Script from "next/script";
export default function JsInitializer(): JSX.Element {
  useEffect(() => {
    document.documentElement.className =
      document.documentElement.className.replace(/\bno-js\b/, "js");
    for (const noscript of Array.from(
      document.getElementsByTagName("noscript")
    ))
      noscript.remove();
  }, []);
  return <Script type="text/javascript" defer id="remove-no-js" />;
}
