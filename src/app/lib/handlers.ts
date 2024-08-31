import { rMouseEvent } from "@/app/declarations/types";

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
