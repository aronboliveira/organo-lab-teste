"use client";
import { parseNotNaN } from "@/app/lib/handlers";
import { useEffect } from "react";
export default function HeaderWatcher(): JSX.Element {
  const handleScroll = () => {
    const headerWrapper = document
      .querySelector("header")
      ?.querySelector(".header-wrapper");
    console.log(scrollY);
    console.log(headerWrapper);
    if (
      scrollY === 0 &&
      headerWrapper instanceof HTMLElement &&
      headerWrapper.classList.contains("stuck") &&
      parseNotNaN(
        getComputedStyle(headerWrapper!).top.replace("px", "").trim()
      ) > 0
    )
      headerWrapper.classList.remove("stuck");
  };
  useEffect(() => {
    handleScroll();
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return <div id="header-watcher"></div>;
}
