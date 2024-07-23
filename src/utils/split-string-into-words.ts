export const splitStringIntoWords = (string: string) => {
  return string
    .split(/(?=[A-Z])/)
    .map((word, index) => {
      return index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase();
    })
    .join(' ');
};
