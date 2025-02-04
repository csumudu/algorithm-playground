import { Card } from "antd";
import { useEffect, useRef } from "react";
import DataGrid from "../../../../shared/components/data-grid";
import PlayControls from "../../../../shared/components/play-controls";
import { useGetSortWidgetParams } from "../../../../shared/hooks/get-sort-widget-params";
import {
  SortAlgoTypes,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";
import { useUpdateItem } from "../../../../state/hooks/use-update-item";
import { bubbleSort } from "./algo";

const BubbleSortMain = () => {
  const {
    data,
    isSorting,
    speed,
    selectedControl,
    playControls,
    selectControlHandler,
  } = useGetSortWidgetParams(SortAlgoTypes.BUBBLE_SORT);

  const iterRef = useRef(null);

  const update = useUpdateItem(SortAlgoTypes.BUBBLE_SORT);

  useEffect(() => {
    iterRef.current = bubbleSort(data);
  }, [data]);

  useEffect(() => {
    let timer = null;
    if (isSorting) {
      const iter = iterRef.current;
      timer = setInterval(() => {
        const v = iter.next();
        if (!v.done) {
          const value: SortChange = v.value;

          if (value.type == SortChangeType.SWAP) {
            const changes = value.changes;

            Object.keys(changes).forEach((key) => {
              const one = data[+key];
              const to = changes[+key];

              update(one.id, {
                value: to.value,
                borderColor: "border-pink-600",
              });
            });
          }
          if (value.type == SortChangeType.SORTED) {
            const changes = value.changes;
            const itm = data[changes.sortedIndex];

            update(itm.id, {
              isSorted: true,
            });
          }
        }
      }, speed);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [isSorting, speed]);

  return (
    <Card
      title="Bubble Sort"
      extra={
        <PlayControls
          selected={selectedControl}
          actions={playControls}
          onSelect={selectControlHandler}
        />
      }
    >
      <div className="h-min">
        <DataGrid data={data} type={SortAlgoTypes.BUBBLE_SORT} />
      </div>
    </Card>
  );
};

export default BubbleSortMain;
