import { kitGroups, rMouseEvent } from "@/app/declarations/types";

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
export const factorsKits: Map<string, Map<string, number>> = new Map([
  [
    "coots",
    new Map([
      ["peat", 0],
      ["perlite", 0],
      ["earthworm_humus", 0],
      ["basalt_rp", 0],
      ["shell_ls", 0],
      ["agr_plaster", 0],
      ["sw_flour", 0],
    ]),
  ],
  [
    "gynetcs",
    new Map([
      ["peat", 0],
      ["perlite", 0],
      ["earthworm_humus", 0],
      ["basalt_rp", 0],
      ["shell_ls", 0],
      ["agr_plaster", 0],
      ["biochar", 0],
      ["bakashi", 0],
      ["nt_phosp", 0],
    ]),
  ],
  [
    "matinho",
    new Map([
      ["peat", 0],
      ["perlite", 0],
      ["earthworm_humus", 0],
      ["basalt_rp", 0],
      ["shell_ls", 0],
      ["agr_plaster", 0],
      ["biochar", 0],
      ["bakashi", 0],
      ["sw_flour", 0],
      ["cr_flour", 0],
    ]),
  ],
]);
export function calcKits(v: string = "0", g: kitGroups = "main") {
  try {
    if (typeof v !== "string")
      throw new Error(
        `Inadequate primitive type argumented to calcKits as value`
      );
    let v_n = parseNotNaN(v);
    if (!Number.isFinite(v_n)) {
      console.warn(`Value parsed as Not Finite. Defaulting to -1.`);
      v_n = -1;
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
  } catch (e) {
    console.error(`Error executing calcKits:\n${(e as Error).message}`);
  }
}
