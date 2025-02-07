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

  if (value.type == SortChangeType.MOVED) {
    Object.keys(change).forEach((k) => {
      update(data[k].id, {
        value: change[k].value,
        borderColor: "border-pink-500",
      });
    });
  }

  if (value.type == SortChangeType.SORTED) {
    Object.keys(change).forEach((k) => {
      update(data[k].id, {
        isSorted: true,
      });
    });
  }
};
