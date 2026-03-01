// Minimal fallback replacement for missing 'clsx' and typing
type ClassValue = string | number | false | null | undefined | ClassDictionary | ClassArray;
type ClassDictionary = Record<string, any>;
interface ClassArray extends Array<ClassValue> {}

// Simplified clsx implementation
function clsx(...args: ClassValue[]): string {
  const classes: string[] = [];
  for (const arg of args) {
    if (!arg) continue;
    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = clsx(...arg);
        if (inner) classes.push(inner);
      }
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && (arg as ClassDictionary)[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(' ');
}

// Minimal fallback for 'tailwind-merge' (just returns the input; doesn't actually merge duplicates)
function twMerge(input: string): string {
  return input;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}