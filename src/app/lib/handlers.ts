import { kitGroups, rMouseEvent, voidish } from "@/app/declarations/types";

export const removeOverlay = (): void => {
  console.log("removing overlay...");
  document.querySelectorAll(".off-canvas").forEach(el => el.remove());
};
let prevClickAttempt: any, lastClickAttempt: any;
export function isClickOutside(event: rMouseEvent, query: string): boolean[] {
  try {
    lastClickAttempt = new Date();
    const el = document.querySelector(query);
    if (!el) {
      if (Math.abs(lastClickAttempt - prevClickAttempt) > 1000)
        throw new Error(`Element for checking click coordinates not found`);
      else return [false, false, false, false];
    }
    const rect = el.getBoundingClientRect();
    const { clientX, clientY } = event;
    prevClickAttempt = lastClickAttempt;
    return [
      clientX < rect.left,
      clientX > rect.right,
      clientY < rect.top,
      clientY > rect.bottom,
    ];
  } catch (e) {
    console.error(`Error executing isClickOutside:\n${(e as Error).message}`);
    prevClickAttempt = new Date();
    return [false, false, false, false];
  }
}
export function parseNotNaN(
  iniVal: string,
  def: number = 0,
  context: string = "float",
  fixed: number = 4
): number {
  let returnVal = 0;
  try {
    if (typeof iniVal !== "string")
      throw new Error("Failed to validate argument: iniVal must be a string.");
    if (typeof context !== "string")
      throw new Error("Failed to validate argument: context must be a string.");
    if (typeof def !== "number")
      throw new Error("Failed to validate argument: def must be a number.");
    if (typeof fixed !== "number")
      throw new Error("Failed to validate argument: fixed must be a number.");
    switch (context) {
      case "int":
        returnVal = parseInt(iniVal, 10) || def;
        if (
          !Number.isFinite(returnVal) ||
          Number.isNaN(returnVal) ||
          isNaN(returnVal)
        )
          returnVal = def;
        break;
      case "float":
        returnVal = parseFloat(parseFloat(iniVal).toFixed(fixed)) || def;
        if (!Number.isFinite(returnVal) || isNaN(returnVal)) returnVal = def;
        break;
      default:
        throw new Error(`Context of parsing invalid.`);
    }
    return returnVal || 0;
  } catch (e) {
    console.error(`Error executing parseNotNaN:\n${(e as Error).message}`);
    return returnVal || 0;
  }
}
export const defFontSize = 16;
export const factorsKits: Map<string, Map<string, number>> = new Map([
  [
    "coots",
    new Map([
      ["peat", 0.3],
      ["perlite", 0.3],
      ["earthworm_humus", 0.3],
      ["sw_flour", 0.01],
      ["neem_pie", 0.01],
      ["shell_ls", 0.01],
      ["agr_plaster", 0.01],
      ["basalt_rp", 0.03],
    ]),
  ],
  [
    "gynetcs",
    new Map([
      ["peat", 0.91],
      ["perlite", 0.091],
      ["earthworm_humus", 0.065],
      ["neem_pie", 3.75],
      ["bokashi", 63.8],
      ["basalt_rp", 45.5],
      ["shell_ls", 18.2],
      ["biochar", 27.4],
      ["agr_plaster", 18.4],
      ["nt_phosp", 18.4],
    ]),
  ],
  [
    "matinho",
    new Map([
      ["peat", 0.35],
      ["perlite", 0.35],
      ["earthworm_humus", 0.35],
      ["neem_pie", 8.4],
      ["bokashi", 25],
      ["basalt_rp", 41.7],
      ["shell_ls", 8.4],
      ["biochar", 25],
      ["sw_flour", 4.2],
      ["cr_flour", 4.2],
      ["agr_plaster", 8.4],
    ]),
  ],
]);
export function calcKits(v: string = "0", g: kitGroups = "main") {
  try {
    console.log(`Calculating for ${g}...`);
    if (typeof v !== "string")
      throw new Error(
        `Inadequate primitive type argumented to calcKits as value`
      );
    let err = "#ERRO";
    let v_n = 0;
    if (v.length === 0) {
      err = "Por favor preencha o campo de Solo.";
      v_n = 0;
    } else v_n = parseNotNaN(v.replace(/,/g, ".").replace(/[^0-9\.]/g, ""));
    if (!Number.isFinite(v_n)) {
      console.warn(`Value parsed as Not Finite. Defaulting to -1.`);
      v_n = -1;
      err = "Entrada inválida. Por favor reveja os valores.";
    }
    if (typeof g !== "string")
      throw new Error(
        `Inadequate primitive type argumented to calcKits as group`
      );
    if (
      !(g === "main" || g === "coots" || g === "matinho" || g === "gynetcs")
    ) {
      console.error(
        `Inadequate string value argumented to calcKits as group. Defaulting to main.`
      );
      g = "main";
    }
    const handleOperations = (ks: Element | voidish, g: string): void => {
      try {
        if (!(ks instanceof HTMLElement))
          throw new Error(`Inadequate instance passed as Kit Section.`);
        if (typeof g !== "string")
          throw new Error(`Inadequate primitive type passed as group`);
        if (
          !(g === "main" || g === "coots" || g === "matinho" || g === "gynetcs")
        )
          throw new Error(
            `Inadequate string value argumented to calcKits as group. Defaulting to main.`
          );
        const gM = factorsKits.get(g);
        if (!gM) throw new Error(`Failed to get Map for Group ${g}`);
        const outps = ks.querySelectorAll(".calc-outp");
        if (outps.length === 0)
          throw new Error(`Failed to populate list of output elements`);
        outps.forEach((o, i) => {
          try {
            if (!(o instanceof HTMLElement))
              throw new Error(`Failed to validate instance of output element`);
            let rel = o.dataset.name;
            if (!rel || rel === "") {
              console.warn(
                `Dataset for Element ${
                  o.id || "unidentified"
                } has no name property. Fallbacking to name if available, but this is not the adequate assignment.`
              );
              rel = (o as any).name;
            }
            if (!rel || rel === "")
              throw new Error(`Failed to fetch operation name.`);
            const f = gM.get(rel);
            if (!f) throw new Error(`Failed to get factor in Group ${g} Map`);
            const res = Math.round(v_n * f * 10 ** 5) / 10 ** 5;
            const resV = res > 0 ? res : err;
            o.innerText = `${resV || err}`;
            if (o.innerText === err) {
              o.classList.add("calc-alert");
              setTimeout(() => {
                if (o) {
                  o.classList.remove("calc-alert");
                  o.innerText = "";
                }
              }, 2000);
            }
          } catch (e) {
            console.error(
              `Error executing iteration ${i}, output ${
                o.id || "unidentified"
              }, ks ${ks.id || ks.className || ks.tagName}:\n${
                (e as Error).message
              }`
            );
            o instanceof HTMLElement
              ? (o.innerText = err)
              : (o.innerHTML = err);
            if (
              (o instanceof HTMLElement && o.innerText === err) ||
              o.innerHTML === err
            ) {
              o.classList.add("calc-alert");
              setTimeout(() => {
                if (o) o.classList.remove("calc-alert");
                o instanceof HTMLElement
                  ? (o.innerText = "")
                  : o.innerHTML === "";
              }, 2000);
            }
          }
        });
      } catch (e) {
        console.error(
          `Error executing handleOperations for ${
            ks?.id || ks?.className || ks?.tagName || "undefined"
          }:\m${(e as Error).message}`
        );
      }
    };
    if (g === "main") {
      const kitSects = document.querySelectorAll(".kit-sect");
      const kitsWrapper = document.getElementById("kits-wrapper");
      if (kitSects.length === 0)
        throw new Error(`Error populating list of Kits Sections.`);
      if (
        kitsWrapper &&
        kitsWrapper.querySelectorAll("section").length !== kitSects.length
      )
        console.warn(
          `Incompatible numer of sections in the Kits Wrapper and length of kit sections!`
        );
      const grps = Array.from(kitSects)
        .map(ks => {
          return ks instanceof HTMLElement && ks.dataset.group
            ? ks.dataset.group
            : "";
        })
        .filter(g => g !== "");
      if (grps.length === 0)
        throw new Error(`Error populating list of Group names.`);
      if (grps.length !== kitSects.length)
        console.warn(
          `Incompatible number of kit group names and length of kit sections list!`
        );
      grps.forEach((g, i) => {
        try {
          const relG = document.querySelector(`.kit-sect[data-group="${g}"]`);
          if (!(relG instanceof HTMLElement))
            throw new Error(`Failed to fetch related group.`);
          handleOperations(relG, g);
        } catch (e) {
          console.error(
            `Error executing iteration ${i}, group ${g} when handling calculations:\n${
              (e as Error).message
            }`
          );
        }
      });
    } else {
      const grp = document.querySelector(`.kit-sect[data-group="${g}"]`);
      if (!(grp instanceof HTMLElement))
        throw new Error(`Failed to fetch Kit Section using dataset group`);
      handleOperations(grp, g);
    }
  } catch (e) {
    console.error(`Error executing calcKits:\n${(e as Error).message}`);
  }
}
