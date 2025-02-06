import {
  SortChange,
  DataItem,
  SortChangeType,
} from "../../../../shared/models";

export const bubbleSortVisualizer = (
  value: SortChange,
  update: (id: string, val: Partial<DataItem<number>>) => void,
  data: DataItem<number>[]
) => {
  if (value.type == SortChangeType.SWAP) {
    const changes = value.changes;

    Object.keys(changes).forEach((key) => {
      const one = data[+key];
      const to = changes[+key];

      update(one.id, {
        value: to.value,
        borderColor: "border-pink-600",
      });
    });
  }
  if (value.type == SortChangeType.SORTED) {
    const changes = value.changes;
    const itm = data[changes.sortedIndex];

    update(itm.id, {
      isSorted: true,
    });
  }
};
