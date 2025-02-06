import {
  DataItem,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";

export function* insertionSort(
  col: Array<DataItem<number>>
): Generator<SortChange> {
  const source = [...col];

  for (let a = 0; a < source.length; a++) {
    let outerIndex = a;
    let innerIndex = outerIndex - 1;

    while (innerIndex >= 0) {
      let outerVal = source[outerIndex].value;
      let innerVal = source[innerIndex].value;

      yield {
        type: SortChangeType.PROCESSING,
        changes: {
          [outerIndex]: source[outerIndex],
        },
      };

      if (innerVal > outerVal) {
        const tmp = source[innerIndex];

        source[innerIndex] = source[outerIndex];
        source[outerIndex] = tmp;

        yield {
          type: SortChangeType.SWAP,
          changes: {
            [innerIndex]: source[innerIndex],
            [outerIndex]: source[outerIndex],
          },
        };

        outerIndex = innerIndex;
      }else{
        break;
      }
      --innerIndex;
    }
    yield {
      type: SortChangeType.SORTED,
      changes: {
        [a]: source[a],
      },
    };
  }
}
