import { useRecoilTransaction_UNSTABLE } from "recoil";
import { SortState } from "../sort/sort-data.atoms";
import { fromValueToDataItem } from "../../shared/utils/adpter";
import { SortAlgoTypes } from "../../shared/models";
import { useTransition } from "react";

const allSourceDataTypes = [
  SortAlgoTypes.BUBBLE_SORT,
  SortAlgoTypes.SELECTION_SORT,
  SortAlgoTypes.QUICK_SORT,
  SortAlgoTypes.INSERTION_SORT,
  SortAlgoTypes.MERGE_SORT,
];

export const useDataReducer = () => {
  const [_, setTransition] = useTransition();

  const dataReducer = useRecoilTransaction_UNSTABLE<[Array<number>]>(
    ({ set, get }) =>
      (rowData) => {
        setTransition(() => {
          const rowStr = rowData.toString();

          allSourceDataTypes.forEach((type) => {
            let source = get(SortState.sourceData)?.[type] || [];
            const sourceStr = source.map((s) => s.value).toString();

            if (rowData.length == source.length) {
              if (rowStr !== sourceStr) {
                const sourceDiff = fromValueToDataItem<number>(rowData);
                set(SortState.sourceData, (m) => ({
                  ...m,
                  [type]: sourceDiff,
                }));
              }
            } else if (rowData.length < source.length) {
              const sourceDiff = source.slice(0, rowData.length);
              set(SortState.sourceData, (m) => ({ ...m, [type]: sourceDiff }));
            } else {
              const diff = rowData.length - source.length;
              const rowDiff = rowData.slice(rowData.length - diff);
              const sourceDiff = fromValueToDataItem<number>(rowDiff);
              set(SortState.sourceData, (pre) => {
                return {
                  ...pre,
                  [type]: (pre[type] || []).concat(sourceDiff),
                };
              });
            }
          });
        });
      }
  );

  return { dataReducer };
};
