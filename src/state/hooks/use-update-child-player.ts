import { useRecoilCallback } from "recoil";
import { PlayerAction, SortAlgoTypes } from "../../shared/models";
import { SortState } from "../sort/sort-data.atoms";

export const useChildSelectedAction = () => {
  const setSelectedAction = useRecoilCallback(
    ({ set }) =>
      (type: SortAlgoTypes, val: PlayerAction) => {
        set(SortState.childControls.selectedControls, (x) => ({
          ...x,
          [type]: val,
        }));
      }
  );

  return { setSelectedAction };
};
