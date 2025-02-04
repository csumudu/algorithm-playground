import {
  DataItem,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";

export function* bubbleSort(
  col: Array<DataItem<number>>
): Generator<SortChange> {
  const source = [...col];
  for (let x = 0; x < source.length; x++) {
    const boundary = source.length - 1 - x;
    for (let y = 0; y < boundary; y++) {
      if (source[y].value > source[y + 1].value) {
        const t = source[y];
        source[y] = source[y + 1];
        source[y + 1] = t;

        yield {
          type: SortChangeType.SWAP,
          changes: {
            [y]: source[y],
            [y + 1]: source[y + 1],
          },
        };
      }
    }
    yield {
      type: SortChangeType.SORTED,
      changes: {
        sortedIndex: boundary,
      },
    };
  }
}
