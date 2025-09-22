import {
  DataItem,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";

export function* heapSort(
  col: Array<DataItem<number>>
): Generator<SortChange> {
  const source = [...col];
  const n = source.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    yield* heapify(source, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    const temp = source[0];
    source[0] = source[i];
    source[i] = temp;

    yield {
      type: SortChangeType.SWAP,
      changes: {
        [0]: source[0],
        [i]: source[i],
      },
    };

    // Mark the element as sorted
    yield {
      type: SortChangeType.SORTED,
      changes: {
        sortedIndex: i,
      },
    };

    // Call heapify on the reduced heap
    yield* heapify(source, i, 0);
  }

  // Mark the first element as sorted (it's the smallest)
  yield {
    type: SortChangeType.SORTED,
    changes: {
      sortedIndex: 0,
    },
  };
}

function* heapify(
  arr: Array<DataItem<number>>,
  n: number,
  i: number
): Generator<SortChange> {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // left child
  const right = 2 * i + 2; // right child

  // Highlight the current node being processed
  yield {
    type: SortChangeType.PROCESSING,
    changes: {
      [i]: arr[i],
    },
  };

  // If left child is larger than root
  if (left < n && arr[left].value > arr[largest].value) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right].value > arr[largest].value) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    yield {
      type: SortChangeType.SWAP,
      changes: {
        [i]: arr[i],
        [largest]: arr[largest],
      },
    };

    // Recursively heapify the affected sub-tree
    yield* heapify(arr, n, largest);
  }
}
