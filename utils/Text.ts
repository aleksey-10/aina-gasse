export const toCamelCase = (value: string) => {
  const splitted: string[] = value.split(' ');

  return splitted.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};

export const priceFormatter = (price: number) => {
  return `₴ ${price}`;
};
