import { StepsOrSpaces } from "./types";

export const printCssVars = (varObj: StepsOrSpaces, prefix: string) => {
  const keys = Object.keys(varObj) as Array<keyof StepsOrSpaces>;
  return keys.map((key) => {
    const value = varObj[key];
    return `${prefix+key}: ${value};`;
  })
}
