export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const getGcd = (a, b) => {
  if (b !== 0) {
    return getGcd(b, a % b);
  }
  return a;
};
