"use client";
import { useState } from "react";
export default function SearchHeader(): JSX.Element {
  const [search, setSearch] = useState("");
  return (
    <input
      type="search"
      className="search-field mb-0"
      name="s"
      value={search}
      id="s"
      placeholder="Search…"
      autoComplete="off"
      onChange={(ev) => setSearch(ev.currentTarget.value)}
    />
  );
}
