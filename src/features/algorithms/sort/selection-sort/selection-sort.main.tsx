import { Card } from "antd";
import DataGrid from "../../../../shared/components/data-grid";
import PlayControls from "../../../../shared/components/play-controls";
import { useGetSortWidgetParams } from "../../../../shared/hooks/get-sort-widget-params";
import {
  SortAlgoTypes,
  SortChange,
  SortChangeType,
} from "../../../../shared/models";
import { useEffect, useRef } from "react";
import { selectionSort } from "./algo";
import { useUpdateItem } from "../../../../state/hooks/use-update-item";

const SelectionSortMain = () => {
  const {
    data,
    isSorting,
    speed,
    selectedControl,
    playControls,
    selectControlHandler,
  } = useGetSortWidgetParams(SortAlgoTypes.SELECTION_SORT);

  const iterRef = useRef(null);

  const update = useUpdateItem(SortAlgoTypes.SELECTION_SORT);

  useEffect(() => {
    if (data) {
      iterRef.current = selectionSort([...data]);
    }
  }, [data]);

  useEffect(() => {
    let timer = null;
    if (isSorting && iterRef.current) {
      const iter = iterRef.current;
      timer = setInterval(() => {
        const v = iter.next();
        if (!v.done) {
          const value: SortChange = v.value;
          const change = value.changes;

          if (value.type == SortChangeType.PROCESSING) {
            Object.values(change).forEach((c: any) => {
              update(c.id, {
                borderColor: "border-pink-600",
              });
            });
          }

          if (value.type == SortChangeType.MARK) {
            update(change.item.id, {
              isMarked: true,
            });
          }
          
          if (value.type == SortChangeType.UNMARK) {
            update(change.item.id, {
              isMarked: false,
            });
          }

          if (value.type == SortChangeType.SORTED) {
            Object.keys(change).forEach((k, i) => {
              const itm = data[k];
              const newVal = change[k].value;
              update(itm.id, {
                value: newVal,
                isSorted: i == 0,
                isMarked: false
              });
            });
          }
        }
      }, speed);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [iterRef.current, isSorting, speed]);

  return (
    <Card
      title="Selection Sort"
      extra={
        <PlayControls
          selected={selectedControl}
          actions={playControls}
          onSelect={selectControlHandler}
        />
      }
    >
      <div className="h-min">
        <DataGrid data={data} type={SortAlgoTypes.SELECTION_SORT} />
      </div>
    </Card>
  );
};

export default SelectionSortMain;
