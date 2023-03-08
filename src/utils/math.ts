export const checkIfNumberOrBlank = (
  value: any,
  callback: (number: number) => void
) => {
  const parsed = parseInt(value);
  callback(parsed);
};

export const parseIntWithUndefined = (value: string | number | undefined) =>
  typeof value === 'number' ? value : value ? parseInt(value) : undefined;
