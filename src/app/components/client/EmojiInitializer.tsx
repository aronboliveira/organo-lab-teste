"use client";
import { WpEmojiSettings } from "@/app/declarations/interfaces";
import Script from "next/script";
import emojiScript from "../../lib/head/js/client/emojiScript";
declare global {
  interface Window {
    _wpemojiSettings: WpEmojiSettings;
  }
}
export default function EmojiInitializer(): JSX.Element {
  return (
    <Script
      type="text/javascript"
      defer
      id="wp-emoji-settings"
      strategy="lazyOnload"
      crossOrigin="anonymous"
      dangerouslySetInnerHTML={{
        __html: `${emojiScript}`,
      }}
    />
  );
}