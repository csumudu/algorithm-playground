import { DataItem, SortChange } from "../../../../shared/models";

export function* insertionSort(
  col: Array<DataItem<number>>
): Generator<any> {
  const source = [...col];

  for (let x = 1; x < source.length; x++) {
    const c = source[x];
    for (let y = x - 1; y >= 0; y--) {
      const p = source[y];
      if (p.value > c.value) {
        const tmp = p.value;
        p.value = c.value;
        c.value = tmp;
      }
    }
  }

  console.log("sorted-->", source);
  yield source;
}


export function insertionSor2(
  col: Array<DataItem<number>>
):any {
  const source = [...col];

  for (let x = 1; x < source.length; x++) {
    const c = source[x];
    for (let y = x - 1; y >= 0; y--) {
      const p = source[y];
      if (p.value > c.value) {
        const tmp = p.value;
        p.value = c.value;
        c.value = tmp;
      }
    }
  }

  console.log("sorted-->", source);
 
}
