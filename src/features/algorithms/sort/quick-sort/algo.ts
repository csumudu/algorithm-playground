import {
    DataItem,
    SortChange,
    SortChangeType,
} from "../../../../shared/models";

export function* quickSort(
  col: Array<DataItem<number>>
): Generator<SortChange> {
  const source = [...col];
  yield* sort(source, 0, source.length - 1) as any;
  yield {
    type: SortChangeType.COMPLETED,
    changes: {
      item: source,
    },
  };
}

function* sort(
  col: Array<DataItem<number>>,
  startIndex: number,
  endIndex: number
): Generator<SortChange> {
  let j = startIndex;
  let i = j - 1;
  let pivot = endIndex;

  const swap = (index: number): SortChange => {
    i = i + 1;
    const tmp = col[i];
    col[i] = col[index];
    col[index] = tmp;

    return {
      type: SortChangeType.SWAP,
      changes: {
        [i]: col[i],
        [index]: col[index],
      },
    };
  };

  for (j; j <= endIndex; j++) {
    if (col[j].value < col[pivot].value) {
      const res = swap(j);
      yield res;
    }
  }
  const res = swap(pivot);
  yield res;
  pivot = i;

  yield {
    type: SortChangeType.SORTED,
    changes: {
      [pivot]: col[pivot],
    },
  };

  if (pivot - 1 - startIndex > 0) {
    yield* sort(col, startIndex, pivot - 1);
  } else {
    yield {
      type: SortChangeType.SORTED,
      changes: {
        [pivot - 1]: col[pivot - 1],
      },
    };
  }

  if (endIndex - pivot + 1 > 1) {
    yield* sort(col, pivot + 1, endIndex);
  }
}
