export function kebabToCamel(s: string): string {
  try {
    if (typeof s !== "string")
      throw new Error(`Wrong type argumented to kebabToCamel`);
    return /[_\-]/g.test(s)
      ? `${s.replace(/[-_]([a-z])/gi, (_, c) => c.toUpperCase())}`
      : s;
  } catch (e) {
    console.error(`Error executing kebabToCamel:\n${(e as Error).message}`);
    return s.toString() ?? "";
  }
}
export function regularToCamel(s: string): string {
  try {
    if (typeof s !== "string")
      throw new Error(`Wrong type argument to regularToCamel`);
    return /\s/g.test(s)
      ? s
          .split(" ")
          .map((f, i) =>
            i === 0
              ? f.toLowerCase()
              : `${f.charAt(0).toUpperCase()}${f.slice(1)}`
          )
          .join("")
      : s.toLowerCase();
  } catch (e) {
    console.error(`Error executing regularToCamel:\n${(e as Error).message}`);
    return s.toString() ?? "";
  }
}
export function regularToPascal(s: string): string {
  try {
    if (typeof s !== "string")
      throw new Error(`Wrong type argument to regularToPascal`);
    return /\s/g.test(s)
      ? s
          .split(" ")
          .map(f => `${f.charAt(0).toUpperCase()}${f.slice(1)}`)
          .join("")
      : s.toLowerCase();
  } catch (e) {
    console.error(`Error executing regularToPascal:\n${(e as Error).message}`);
    return s.toString() ?? "";
  }
}
export function removeAccents(s: string): string {
  try {
    if (typeof s !== "string")
      throw new Error(`Wrong type argumented to removeAccents`);
    if (s.length === 0) return s;
    return s
      .replace(/[\u00C0-\u00C6]/gu, "A")
      .replace(/[\u00E0-\u00E6]/gu, "a")
      .replace(/[\u00C7]/gu, "C")
      .replace(/[\u00E7]/gu, "c")
      .replace(/[\u00C8-\u00CB]/gu, "E")
      .replace(/[\u00E8-\u00EB]/gu, "e")
      .replace(/[\u00CC-\u00CF]/gu, "I")
      .replace(/[\u00EC-\u00EF]/gu, "i")
      .replace(/[\u00D1]/gu, "N")
      .replace(/[\u00F1]/gu, "n")
      .replace(/[\u00D2-\u00D6]/gu, "O")
      .replace(/[\u00F2-\u00F6]/gu, "o")
      .replace(/[\u00D9-\u00DC]/gu, "U")
      .replace(/[\u00F9-\u00FC]/gu, "u")
      .replace(/[\u00DD]/gu, "Y")
      .replace(/[\u00FD\u00FF]/gu, "y");
  } catch (e) {
    console.error(`Error executing removeAccents:\n${(e as Error).message}`);
    return s;
  }
}
