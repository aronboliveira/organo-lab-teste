"use client";
import { InpProps } from "@/app/declarations/componentsInterfaces";
import { nlInp, nlSel } from "@/app/declarations/types";
import { parseNotNaN } from "@/app/lib/head/handlers";
import { useState, useRef, useEffect } from "react";

export default function LNumInp({
  title,
  iniValue = "kg",
  id,
  name,
  large,
}: InpProps): JSX.Element {
  const optRef = useRef<nlSel>(null);
  const inpRef = useRef<nlInp>(null);
  const [v, setV] = useState<string>("");
  const [s, setS] = useState<string>(iniValue);
  useEffect(() => {
    const handleResize = (): void => {
      if (
        optRef.current instanceof HTMLElement &&
        inpRef.current instanceof HTMLElement
      ) {
        const prevHeight = getComputedStyle(optRef.current).height;
        optRef.current.style.height = `${getComputedStyle(inpRef.current)
          .height.replace("px", "")
          .trim()}px`;
        if (
          parseNotNaN(
            getComputedStyle(optRef.current).height.replace("px", "").trim()
          ) <= 0
        )
          optRef.current.style.height = prevHeight;
      }
    };
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);
  return (
    <fieldset
      id={`fs-${id || name || title.replaceAll(" ", "__")}`}
      data-title={title}
      className={large ? "calc-fs-large" : "calc-fs"}
    >
      <label
        id={`lb-${id}`}
        htmlFor={id}
        className="calc-lab"
        data-title={title}
      >
        <b>{`${title}:`}</b>
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
          onChange={ev => setV(ev.currentTarget.value)}
        />
        <select
          id={`select-${id}`}
          className="form-select calc-select"
          ref={optRef}
          value={s}
          data-title={title}
          onChange={ev => setS(ev.currentTarget.value)}
        >
          <option value="kg">Kg</option>
          <option value="l">L</option>
        </select>
      </div>
    </fieldset>
  );
}
