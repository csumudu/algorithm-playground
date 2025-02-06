import {
  SortChange,
  DataItem,
  SortChangeType,
} from "../../../../shared/models";

export const selectionSortVisualizer = (
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

  if (value.type == SortChangeType.MARK) {
    update(change.item.id, {
      isMarked: true,
    });
  }

  if (value.type == SortChangeType.UNMARK) {
    update(change.item.id, {
      isMarked: false,
    });
  }

  if (value.type == SortChangeType.SORTED) {
    Object.keys(change).forEach((k, i) => {
      const itm = data[k];
      const newVal = change[k].value;
      update(itm.id, {
        value: newVal,
        isSorted: i == 0,
        isMarked: false,
      });
    });
  }
};
