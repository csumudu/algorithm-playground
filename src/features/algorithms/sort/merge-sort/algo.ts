import { DataItem, SortChangeType } from "../../../../shared/models";

export function* mergeSort(
  arr: Array<DataItem<number>>,
  start = 0,
  end = arr.length - 1
) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  yield* mergeSort(arr, start, mid);
  yield* mergeSort(arr, mid + 1, end);
  yield* merge(arr, start, mid, end);
}

function* merge(
  arr: Array<DataItem<number>>,
  start: number,
  mid: number,
  end: number
) {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);
  let i = 0,
    j = 0,
    k = start;

  while (i < left.length && j < right.length) {
    if (left[i].value <= right[j].value) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    yield {
      type: SortChangeType.MOVED,
      changes: { [k]: arr[k] },
    };
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    yield {
      type: SortChangeType.MOVED,
      changes: { [k]: arr[k] },
    };
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    yield {
      type: SortChangeType.MOVED,
      changes: { [k]: arr[k] },
    };
    j++;
    k++;
  }

  for (let x = start; x <= end; x++) {
    if (
      (x === 0 || arr[x].value >= arr[x - 1].value) &&
      (x === arr.length - 1 || arr[x].value <= arr[x + 1].value)
    ) {
      yield {
        type: SortChangeType.SORTED,
        changes: { [x]: arr[x] },
      };
    }
  }
}
