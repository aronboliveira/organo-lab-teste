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
