"use client";

import { CalcBtnProps } from "../../../../app/declarations/componentsInterfaces";
import { kitGroups } from "../../../../app/declarations/types";
import { calcKits } from "../../../../app/lib/handlers";

export default function CalcBtn({ group, id }: CalcBtnProps): JSX.Element {
  return (
    <button
      className="btn btn-secondary calc-btn"
      data-group={group}
      id={`btn${id}`}
      onClick={ev =>
        calcKits(
          sessionStorage.getItem("v") ?? "",
          (ev.currentTarget.dataset.group as kitGroups) ?? "main"
        )
      }
    >
      Calcular
    </button>
  );
}
