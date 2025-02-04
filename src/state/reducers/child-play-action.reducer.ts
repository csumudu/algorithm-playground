import { useRecoilTransaction_UNSTABLE } from "recoil";
import { ChildSelectedPlayerAction, PlayerAction } from "../../shared/models";
import { SortState } from "../sort/sort-data.atoms";

export const useChildPlayActionReducer = () => {
  const childPlayerActionReducer = useRecoilTransaction_UNSTABLE<
    Array<ChildSelectedPlayerAction>
  >(({ set }) => (allSelected) => {
    Object.keys(allSelected).forEach((type) => {
      const selected: PlayerAction = allSelected[type];
      set(SortState.childControls.actions, (pre) => {
        return {
          ...pre,
          [type]: [...pre[type]].map((a: PlayerAction) => ({
            ...a,
            isSelected: a.type == selected.type,
          })),
        };
      });
    });
  });

  return { childPlayerActionReducer };
};
