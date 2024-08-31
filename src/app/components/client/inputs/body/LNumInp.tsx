"use client";
import { InpProps } from "@/app/declarations/componentsInterfaces";
import { nlDl, nlInp, nlSel } from "@/app/declarations/types";
import { parseNotNaN } from "@/app/lib/handlers";
import { useState, useRef, useEffect } from "react";
const recent: { [k: string]: string[] } = {};
export default function LNumInp({
  title,
  group,
  iniValue = "kg",
  id,
  name,
  large,
}: InpProps): JSX.Element {
  const pascalId = `${id?.charAt(0) ?? ""}${id?.slice(1) ?? ""}`;
  const joinedTitle = title.replace(/[\s\|]/g, "");
  const optRef = useRef<nlSel>(null);
  const inpRef = useRef<nlInp>(null);
  const dlRef = useRef<nlDl>(null);
  const [v, setV] = useState<string>("");
  const [s, setS] = useState<string>(iniValue);
  const sanitazeValue = (n: string) => {
    if (/[^0-9,\.]/g.test(n)) n = n.replace(/[^0-9,\.]/g, "");
    if (n.length > 5) n = n.slice(0, 5);
    return n ?? "0";
  };
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
  useEffect(() => {
    try {
      if (!(inpRef.current instanceof HTMLInputElement)) return;
      if (!(dlRef.current instanceof HTMLDataListElement)) return;
      if (v !== "") {
        if (!recent[`${inpRef.current.id}`])
          recent[`${inpRef.current.id}`] = [];
        console.log(recent[`${inpRef.current.id}`]);
        if (!recent[`${inpRef.current.id}`].includes(v)) {
          recent[`${inpRef.current.id}`].push(v);
          if (recent[`${inpRef.current.id}`].length > 3)
            recent[`${inpRef.current.id}`].shift();
          dlRef.current.innerHTML = "";
          recent[`${inpRef.current.id}`].forEach(value => {
            dlRef.current?.appendChild(
              Object.assign(document.createElement("option"), {
                value: value,
              })
            );
          });
        }
      }
    } catch (e) {
      console.error(
        `Error executing interv for filling datalist at ${new Date().getMilliseconds()}:\n${
          (e as Error).message
        }`
      );
    }
  }, [v]);
  return (
    <fieldset
      id={`fs${pascalId}`}
      data-title={title}
      className={large ? "calc-group-large" : "calc-group"}
    >
      <label
        id={`lb${pascalId}`}
        htmlFor={id}
        className="calc-lab"
        data-title={title}
      >
        <b>
          {/__/g.test(title)
            ? `${title.slice(0, title.indexOf("__"))}:`
            : `${title}:`}
        </b>
      </label>
      <div
        id={`div${pascalId}`}
        className="calc-inp-div"
        data-title={joinedTitle}
      >
        <input
          id={id}
          className="form-control calc-inp"
          name={name}
          data-title={joinedTitle}
          data-group={group}
          ref={inpRef}
          type="number"
          autoComplete="off"
          list={`dl${pascalId}`}
          value={v}
          onInput={ev => setV(sanitazeValue(ev.currentTarget.value))}
          onChange={ev => setV(sanitazeValue(ev.currentTarget.value))}
        />
        <datalist
          id={`dl${pascalId}`}
          data-title={joinedTitle}
          data-group={group}
          ref={dlRef}
        ></datalist>
        <select
          id={`select${pascalId}`}
          className="form-select calc-select"
          ref={optRef}
          data-title={joinedTitle}
          value={s}
          onChange={ev => setS(ev.currentTarget.value)}
        >
          {iniValue.length === 1
            ? iniValue.toUpperCase()
            : `${iniValue.charAt(0).toUpperCase()}${iniValue
                .slice(1)
                .toLowerCase()}`}
          <option value="kg">Kg</option>
          <option value="l">L</option>
        </select>
      </div>
    </fieldset>
  );
}
