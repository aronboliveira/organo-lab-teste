"use client";
import { useEffect } from "react";
export default function ScriptsWatcher(): JSX.Element {
  useEffect(() => {
    try {
      document.querySelectorAll("script").forEach((script, i) => {
        try {
          if (!(script instanceof HTMLScriptElement)) return;
          if (script.type === "" && script.src !== "")
            script.type = "text/javascript";
          if (script.id === "" && script.src !== "") {
            const url = new URL(script.src);
            const sanitazedPath = url.pathname.replace(
              /[\-\?\=\+\s\.\&\>\<'"~,]/g,
              "__"
            );
            script.id = /\//g.test(sanitazedPath)
              ? sanitazedPath.slice(sanitazedPath.lastIndexOf("/") + 1)
              : sanitazedPath;
          }
          if (script.crossOrigin === "") script.crossOrigin = "anonymous";
        } catch (e) {
          console.error(
            `Error executing iteration ${i} for <script> tags in modelScripts:\n${
              (e as Error).message
            }`
          );
        }
      });
      document.querySelectorAll("link").forEach((link, i) => {
        try {
          if (!(link instanceof HTMLLinkElement)) return;
          if (link.id === "" && link.href !== "") {
            const url = new URL(link.href);
            const sanitazedPath = url.pathname.replace(
              /[\-\?\=\+\s\.\&\>\<'"~,]/g,
              "__"
            );
            link.id = /\//g.test(sanitazedPath)
              ? sanitazedPath.slice(sanitazedPath.lastIndexOf("/") + 1)
              : sanitazedPath;
          }
          if (link.rel === "") link.rel = "alternate";
          if (link.crossOrigin === "") link.crossOrigin = "anonymous";
        } catch (e) {
          console.error(
            `Error executing iteration ${i} for <link> tags in modelScripts:\n${
              (e as Error).message
            }`
          );
        }
      });
      document.querySelectorAll("a").forEach((a, i) => {
        try {
          if (!(a instanceof HTMLAnchorElement)) return;
          if (
            a.href !== "" &&
            !(
              new RegExp(location.hostname, "g").test(a.href) ||
              /https/.test(a.href)
            )
          ) {
            if (!/noopener/g.test(a.rel)) a.rel += " noopener";
            if (!/noreferrer/g.test(a.rel)) a.rel += " noreferrer";
          }
        } catch (e) {
          console.error(
            `Error executing iteration ${i} for <a> tags in modelScripts:\n${
              (e as Error).message
            }`
          );
        }
      });
    } catch (e) {
      console.error(`Error executing modelScripts:\n${(e as Error).message}`);
    }
  }, []);
  return <div id="scripts-watcher"></div>;
}
