import { useRecoilTransaction_UNSTABLE } from "recoil";
import {
  ChildSelectedPlayerAction,
  PlayerAction,
  PlayerActionType,
} from "../../shared/models";
import { SortState } from "../sort/sort-data.atoms";
import { fromValueToDataItem } from "../../shared/utils/adpter";

export const useChildPlayActionReducer = () => {
  const childPlayerActionReducer = useRecoilTransaction_UNSTABLE<
    Array<ChildSelectedPlayerAction>
  >(({ set, get }) => (allSelected) => {
    Object.keys(allSelected).forEach((type) => {
      const selected: PlayerAction = allSelected[type];

      if (selected?.type == PlayerActionType.RELOAD) {
        const source = get(SortState.sourceData)?.[type] || [];
        const val = source.map((s) => s.value);

        set(SortState.childControls.selectedControls, (s) => {
          const sourceDiff = fromValueToDataItem<number>(val);
          set(SortState.sourceData, (pre) => {
            return {
              ...pre,
              [type]: sourceDiff,
            };
          });
          return { ...s, [type]: undefined };
        });
      }
    });
  });

  return { childPlayerActionReducer };
};
