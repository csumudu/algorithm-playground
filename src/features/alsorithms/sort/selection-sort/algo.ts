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
      }

      if (col[x].value < min.item.value) {
        min = { index: x, item: col[x] };
        yield getEvent(SortChangeType.HIGHLIGHT, x, min);
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

  console.log("*********->", col);
}

const getEvent = (type, index, item) => {
  return {
    type: type,
    changes: {
      [index]: item,
    },
  };
};
