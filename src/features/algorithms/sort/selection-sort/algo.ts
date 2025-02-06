import {
  DataItem,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";

type Min = {
  index: number;
  item: DataItem<number>;
};

export function* selectionSort(
  col: Array<DataItem<number>>
): Generator<SortChange> {
  for (let y = 0; y < col.length; y++) {
    let min: Min = null;
    for (let x = y; x < col.length; x++) {
      yield getEvent(SortChangeType.PROCESSING, x, col[x]);

      if (min == null) {
        min = { index: x, item: col[x] };
        yield getEvent(SortChangeType.MARK, x, col[x]);
      }

      if (col[x].value < min.item.value) {
        yield getEvent(SortChangeType.UNMARK, x, min.item);
        min = { index: x, item: col[x] };
        yield getEvent(SortChangeType.MARK, x, min.item);
      }
    }
    if (y !== min.index) {
      const tmp = col[y];
      col[y] = min.item;
      col[min.index] = tmp;

      yield {
        type: SortChangeType.SORTED,
        changes: {
          [y]: col[y],
          [min.index]: col[min.index],
        },
      };
    } else {
      yield {
        type: SortChangeType.SORTED,
        changes: {
          [y]: col[y],
        },
      };
    }
  }
}

const getEvent = (type, index, item) => {
  if (type == SortChangeType.MARK || type == SortChangeType.UNMARK) {
    return {
      type,
      changes: {
        item,
      },
    };
  }
  return {
    type: type,
    changes: {
      [index]: item,
    },
  };
};
