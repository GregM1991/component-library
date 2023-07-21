type IndexableObject = { [key: string]: any };

export const toVarNames = <T extends IndexableObject>(
  obj: T,
  prefix: string = "-"
): T => {
  const vars: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      vars[key] = toVarNames(value, `${prefix}-${key}`);
    } else {
      vars[key] = `var(${prefix}-${key})`;
    }
  }
  return vars as T;
};

export const toVars = (obj: IndexableObject, prefix: string = "-") => {
  const vars: IndexableObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      const nestedVars = toVars(value, `${prefix}-${key}`);
      for (const [nestedKey, nestedValue] of Object.entries(nestedVars)) {
        vars[nestedKey] = nestedValue;
      }
    } else {
      vars[`${prefix}-${key}`] = value;
    }
  }
  return vars;
};
