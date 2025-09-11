export function isNullOrUndefined(val: unknown): val is null | undefined {
  return val === null || val === undefined;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
