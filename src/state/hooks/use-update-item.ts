import { useRecoilCallback } from "recoil";
import { DataItem, SortAlgoTypes } from "../../shared/models";
import { SortState } from "../sort/sort-data.atoms";

export const useUpdateItem = (type: SortAlgoTypes) => {
  const updateCB = useRecoilCallback(
    ({ set }) =>
      (id: string, val: Partial<DataItem<number>>) => {
        set(SortState.dataItemFamily({ id, type }), (x) => ({
          ...x,
          ...val,
        }));
      }
  );
  return updateCB;
};
