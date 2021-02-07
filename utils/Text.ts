export const toCamelCase = (value: string): string => {
  const splitted: string[] = value.split(' ');

  return splitted
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

export const priceFormatter = (price: number): string => {
  return `₴ ${price}`;
};
