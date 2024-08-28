import { rMouseEvent } from "@/app/declarations/types";

export const removeOverlay = (): void => {
  console.log("removing overlay...");
  document.querySelectorAll(".off-canvas").forEach((el) => el.remove());
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
