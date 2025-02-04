import { useRef } from "react";
import { useRecoilTransaction_UNSTABLE } from "recoil";
import { GET, SET } from "../../shared/models";
import { getRandomCol } from "../../shared/utils/misc";
import { SortState } from "../sort/sort-data.atoms";

export const useChangeConfigReducer = () => {
  const cachedParamRef = useRef<{ length: number; speed: number }>({
    length: null,
    speed: null,
  });

  const changeConfigReducer = useRecoilTransaction_UNSTABLE<[number, number]>(
    ({ set, get }) =>
      (length, speed) => {
        if (isLengthChanged(length)) {
          updateCollection(get, set, length);
        }

        cachedParamRef.current = {
          length,
          speed,
        };
      }
  );

  const isLengthChanged = (length: number) => {
    const pre = cachedParamRef.current;
    return pre.length != length;
  };

  const updateCollection = (
    get: GET<any>,
    set: SET<Array<number>>,
    length: number
  ) => {
    let rowData = get(SortState.rowData);
    let updated = [];

    if (rowData.length > length) {
      updated = rowData.slice(0, length);
    } else {
      const diff = length - rowData.length;
      const rnd = getRandomCol(diff);
      updated = rowData.concat(rnd);
    }
    set(SortState.rowData, updated);
  };

  return { changeConfigReducer };
};
