import { Logger, Patcher } from 'dium';

export const debugFunctionsInObj = (
  obj: any,
  options?: {
    searchProtos?: boolean;
    name?: string;
    filter?: ([key, value]: [key: any, value: any]) => boolean;
  }
): (() => void)[] => {
  if (!obj) return [];

  const unpatchFunctions: (() => void)[] = [];

  Object.entries(obj)
    .filter(([key, value]) => typeof value === 'function')
    .forEach(
      ([key, value]) =>
        (!options?.filter || options.filter([key, value])) &&
        unpatchFunctions.push(
          Patcher.after(obj, key, (data) => {
            Logger.log(
              `${options?.name ? `[${options.name}] ` : ''}[${key}]`,
              data
            );
          })
        )
    );

  if (options?.searchProtos)
    return [
      ...unpatchFunctions,
      ...debugFunctionsInObj(obj.__proto__, options),
    ];

  return unpatchFunctions;
};
