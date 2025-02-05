import { FC, memo, useEffect } from "react";
import {
  useRecoilValue,
  useRecoilValueLoadable
} from "recoil";
import { twMerge as tw } from "tailwind-merge";
import { useUpdateItem } from "../../state/hooks/use-update-item";
import { SortState } from "../../state/sort/sort-data.atoms";
import { SortAlgoTypes } from "../models";

const DataCell: FC<{ itemId: string; type: SortAlgoTypes }> = ({
  itemId,
  type,
}) => {
  const loadable = useRecoilValueLoadable(
    SortState.dataItemFamily({ id: itemId, type })
  );
  const speed = useRecoilValue(SortState.speed);
  const update = useUpdateItem(type);

  const item = loadable.contents;

  useEffect(() => {
    if (item?.bgColor || item?.borderColor) {
      setTimeout(() => {
        update(item.id, { bgColor: "", borderColor: "" });
      }, item.resetTimeout || speed);
    }
  }, [loadable.contents, speed]);

  const sorted = item.isSorted ? "bg-blue-700 text-blue-400" : "";

  return (
    <div
      className={tw(
        "overflow-hidden border flex justify-center items-center text-gray-600",
        sorted,
        item.bgColor,
        item.borderColor,
        item.animationName,
      )}
      key={item.id}
    >
      {item.value}
    </div>
  );
};

export default memo(DataCell);
