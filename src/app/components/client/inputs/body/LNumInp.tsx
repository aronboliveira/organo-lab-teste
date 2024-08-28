"use client";
import { useState } from "react";
export default function LNumInp({
  title,
  id,
  name,
}: {
  title: string;
  id?: string;
  name?: string;
}): JSX.Element {
  const [v, setV] = useState<string>("");
  return (
    <fieldset
      id={`fs-${id || name || title.replaceAll(" ", "__")}`}
      data-title={title}
      style={{ display: "flex", flexFlow: "column nowrap" }}
    >
      <label id={`lb-${id}`} htmlFor={id}>
        <b>Quantidade de Solo:</b>
      </label>
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        <input
          id={id}
          type="number"
          className="form-control"
          name={name}
          data-title={title}
          style={{
            width: "20.625rem",
            height: "3.4375rem",
            borderRadius: "0.625rem",
            backgroundColor: "#D9D9D9",
          }}
          onChange={(ev) => setV(ev.currentTarget.value)}
        />
        <select
          className="form-select"
          style={{ width: "4.4rem", height: "3.3rem" }}
        >
          <option value="Kg">Kg</option>
          <option value="L">Lg</option>
        </select>
      </div>
    </fieldset>
  );
}
