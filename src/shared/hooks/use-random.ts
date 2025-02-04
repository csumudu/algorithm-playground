import { useEffect, useState } from "react";
import { getRandomCol } from "../utils/misc";

export const useRandom = <T>(
  len: number = 100
): [Array<T>, () => void, (size: number) => void] => {
  const [listSize, setListSize] = useState(len);
  const [randomValuesCol, setRandomValuesCol] = useState<Array<T>>([]);

  useEffect(() => {
    regenerate();
  }, [listSize]);

  const regenerate = () => {
    const col = getRandomCol(listSize);
    setRandomValuesCol(col as Array<T>);
  };

  return [randomValuesCol, regenerate, setListSize];
};
