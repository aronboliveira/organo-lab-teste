"use client";
import { InpProps } from "@/app/declarations/componentsInterfaces";
import { useState } from "react";
export default function LNumInp({
  title,
  id,
  name,
  large,
}: InpProps): JSX.Element {
  const [v, setV] = useState<string>("");
  return (
    <fieldset
      id={`fs-${id || name || title.replaceAll(" ", "__")}`}
      data-title={title}
      className={large ? "large-calc-fs" : "calc-fs"}
    >
      <label
        id={`lb-${id}`}
        htmlFor={id}
        className="calc-lab"
        data-title={title}
      >
        <b>Quantidade de Solo:</b>
      </label>
      <div id={`div-${id}`} className="calc-inp-div" data-title={title}>
        <input
          id={id}
          type="number"
          className="form-control calc-inp"
          name={name}
          data-title={title}
          autoComplete="off"
          value={v}
          onChange={(ev) => setV(ev.currentTarget.value)}
        />
        <select
          id={`select-${id}`}
          className="form-select calc-select"
          // style={{ width: "4.4rem", height: "3.3rem" }}
          data-title={title}
        >
          <option value="kg">Kg</option>
          <option value="l">L</option>
        </select>
      </div>
    </fieldset>
  );
}
