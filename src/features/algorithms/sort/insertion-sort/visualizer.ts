import {
  DataItem,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";

export const insertionSortVisualizer = (
  value: SortChange,
  update: (id: string, val: Partial<DataItem<number>>) => void,
  data: DataItem<number>[]
) => {
  const change = value.changes;

  if (value.type == SortChangeType.PROCESSING) {
    Object.values(change).forEach((c: any) => {
      update(c.id, {
        borderColor: "border-pink-600",
      });
    });
  }

  if (value.type == SortChangeType.SWAP) {
    const keys = Object.keys(change);
    keys.forEach((k, i) => {
      const isLast = i == keys.length - 1;
      const itm = data[k];
      const newVal = change[k].value;
      update(itm.id, {
        value: newVal,
        bgColor: isLast ? "bg-pink-600 text-pink-300" : "",
        resetTimeout: isLast ? 500 : 0,
      });
    });
  }

  if (value.type == SortChangeType.SORTED) {
    Object.keys(change).forEach((k) => {
      const itm = data[k];
      update(itm.id, {
        isSorted: true,
      });
    });
  }
};
