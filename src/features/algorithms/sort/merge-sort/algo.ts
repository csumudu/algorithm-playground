import {
  DataItem,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";

type DataItemCol = Array<DataItem<number>>;
type SplitRes = {
  source: DataItemCol;
  children: Array<SplitRes>;
};

export function* mergeSort(
  col: Array<DataItem<number>>
): Generator<SortChange> {
  const source = [...col];
  const result = divide(source);
  console.log("Tree-->", result);
 // const merge = join(result);

  yield {
    type: SortChangeType.COMPLETED,
    changes: {
      result: [],
    },
  };
}

function divide(col: Array<DataItem<number>>): SplitRes {
  if (col.length > 1) {
    const mid = Math.floor(col.length / 2);

    const left = col.slice(0, mid);
    const right = col.slice(mid, col.length);
    return {
      source: col,
      children: [divide(left), divide(right)],
    };
  } else {
    return {
      source: col,
      children: [],
    };
  }
}

// function join(tree: SplitRes) {
//   if (tree.source.length > 2) {
//    tree.children.forEach(c=>{
//         if(c.children.length){
//             join(c)
//         }else{
//             tree.source.forEach((s,i)=>{
//                 if(s.value> c.source[0]?.value){
//                     tree.source[i] = c.source[0]
//                 }
//             })
//         }
//    })
//   } else {
//     const [a, b] = tree.source;
//     if (a?.value > b?.value) {
//       const tmp = tree.source[0];
//       tree.source[0] = tree.source[1];
//       tree.source[1] = tmp;
//     }
//   }
// }
