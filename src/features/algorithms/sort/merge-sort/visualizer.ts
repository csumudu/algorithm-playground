import {
  SortChange,
  DataItem,
  SortChangeType,
} from "../../../../shared/models";

export const mergeSortVisualizer = (
  value: SortChange,
  _update: (id: string, val: Partial<DataItem<number>>) => void,
  _data: DataItem<number>[]
) => {
  const change = value.changes;

  if (value.type == SortChangeType.COMPLETED) {
    console.log("Completed-->", change);
  }
};
