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
import { insertionSor } from "./algo";

const InsertionSortMain = () => {
  const {
    data,
    isSorting,
    speed,
    selectedControl,
    playControls,
    selectControlHandler,
  } = useGetSortWidgetParams(SortAlgoTypes.INSERTION_SORT);

  const iterRef = useRef(null);

  const update = useUpdateItem(SortAlgoTypes.INSERTION_SORT);

  useEffect(() => {
    if (data) {
      iterRef.current = insertionSor([...data]);
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

          if (value.type == SortChangeType.SWAP) {
            const keys = Object.keys(change);
            keys.forEach((k, i) => {
              const isLast = i == keys.length - 1;
              const itm = data[k];
              const newVal = change[k].value;
              update(itm.id, {
                value: newVal,
                bgColor: isLast ? "bg-pink-600 text-pink-300" : "",
                resetTimeout: isLast ? 500 : 0,
              });
            });
          }

          if (value.type == SortChangeType.SORTED) {
            console.log(change);
            Object.keys(change).forEach((k, i) => {
              const itm = data[k];
              update(itm.id, {
                isSorted: true,
              });
            });
          }
        } else {
          selectControlHandler(undefined);
        }
      }, speed);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [iterRef.current, isSorting, speed]);

  return (
    <Card
      title="Insertion Sort"
      extra={
        <PlayControls
          selected={selectedControl}
          actions={playControls}
          onSelect={selectControlHandler}
        />
      }
    >
      <div className="h-min">
        <DataGrid data={data} type={SortAlgoTypes.INSERTION_SORT} />
      </div>
    </Card>
  );
};

export default InsertionSortMain;
