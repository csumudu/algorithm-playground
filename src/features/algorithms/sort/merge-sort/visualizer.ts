import {
  SortChange,
  DataItem,
  SortChangeType,
} from "../../../../shared/models";

export const mergeSortVisualizer = (
  value: SortChange,
  update: (id: string, val: Partial<DataItem<number>>) => void,
  data: DataItem<number>[]
) => {
  const change = value.changes;

  if (value.type == SortChangeType.COMPLETED) {
    console.log("Completed-->", change);
  }
};
