export const getRandomCol = (listSize: number): Array<number> => {
  const array = Array.from({ length: listSize }, () =>
    Math.floor(Math.random() * 1000)
  );

  return array;
};
