import { DataItem, SortAlgoTypes, SortChange } from "../../../shared/models";
import { bubbleSort } from "../sort/bubble-sort/algo";
import { bubbleSortVisualizer } from "../sort/bubble-sort/visualizer";
import { insertionSort } from "../sort/insertion-sort/algo";
import { insertionSortVisualizer } from "../sort/insertion-sort/visualizer";
import { mergeSort } from "../sort/merge-sort/algo";
import { mergeSortVisualizer } from "../sort/merge-sort/visualizer";
import { quickSort } from "../sort/quick-sort/algo";
import { quickSortVisualizer } from "../sort/quick-sort/visualizer";
import { selectionSort } from "../sort/selection-sort/algo";
import { selectionSortVisualizer } from "../sort/selection-sort/visualizer";

export class AlgorithmFactory {
  static getSortGenerator(
    type: SortAlgoTypes
  ): (col: Array<DataItem<number>>) => Generator<SortChange> {
    switch (type) {
      case SortAlgoTypes.BUBBLE_SORT:
        return bubbleSort;
      case SortAlgoTypes.INSERTION_SORT:
        return insertionSort;
      case SortAlgoTypes.SELECTION_SORT:
        return selectionSort;
      case SortAlgoTypes.QUICK_SORT:
        return quickSort;
      case SortAlgoTypes.MERGE_SORT:
        return mergeSort;
    }
  }

  static getVisualizer(type: SortAlgoTypes) {
    switch (type) {
      case SortAlgoTypes.QUICK_SORT:
        return quickSortVisualizer;
      case SortAlgoTypes.INSERTION_SORT:
        return insertionSortVisualizer;
      case SortAlgoTypes.BUBBLE_SORT:
        return bubbleSortVisualizer;
      case SortAlgoTypes.SELECTION_SORT:
        return selectionSortVisualizer;
      case SortAlgoTypes.MERGE_SORT:
        return mergeSortVisualizer;
    }
  }
}
