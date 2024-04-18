type ClassDictionary = { [id: string]: boolean | undefined | null };
type ClassArray = Array<ClassValue>;
type ClassValue =
  | string
  | number
  | ClassDictionary
  | ClassArray
  | undefined
  | null;

/*
 * Function that takes a variety of input types and generates a string of class names.
 * It uses helper functions handleArray and handleObject to handle array and object inputs, respectively.
 */
const composeClasses = (...args: ClassValue[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg.toString());
    } else if (Array.isArray(arg) && arg.length) {
      const inner = composeClasses(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (typeof arg === "object") {
      const argObject = arg as ClassDictionary;
      if (
        argObject.toString !== Object.prototype.toString &&
        !argObject.toString.toString().includes("[native code]")
      ) {
        classes.push(argObject.toString());
      } else {
        for (const key in argObject) {
          if (
            Object.prototype.hasOwnProperty.call(argObject, key) &&
            argObject[key]
          ) {
            classes.push(key);
          }
        }
      }
    }
  }

  return classes.join(" ");
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const composeClassNames = (prefix: string, props: any) => {
  const { className, ...otherProps } = props;

  const classes = [prefix, className];

  Object.entries(otherProps).forEach(([key, value]) => {
    if (value !== undefined && value !== false) {
      switch (key) {
        case "as":
          classes.push(`as-${value}`);
          break;
        case "direction":
        case "wrap":
        case "appearance":
          classes.push(`${prefix}--${value}`);
          break;
        default:
          classes.push(`${prefix}--${key}-${value}`);
          break;
      }
    }
  });

  return composeClasses(...classes);
};

export { composeClasses, composeClassNames };
