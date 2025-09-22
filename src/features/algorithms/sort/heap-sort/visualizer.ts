import {
  SortChange,
  DataItem,
  SortChangeType,
} from "../../../../shared/models";

export const heapSortVisualizer = (
  value: SortChange,
  update: (id: string, val: Partial<DataItem<number>>) => void,
  data: DataItem<number>[]
) => {
  if (value.type === SortChangeType.SWAP) {
    const changes = value.changes;

    Object.keys(changes).forEach((key) => {
      const item = data[+key];
      const newValue = changes[+key];

      update(item.id, {
        value: newValue.value,
        borderColor: "border-orange-500",
      });
    });
  }

  if (value.type === SortChangeType.PROCESSING) {
    const changes = value.changes;

    Object.keys(changes).forEach((key) => {
      const item = data[+key];

      update(item.id, {
        borderColor: "border-blue-500",
        bgColor: "bg-blue-100",
      });
    });
  }

  if (value.type === SortChangeType.SORTED) {
    const changes = value.changes;
    const item = data[changes.sortedIndex];

    update(item.id, {
      isSorted: true,
      borderColor: "border-green-500",
      bgColor: "bg-green-100",
    });
  }
};
