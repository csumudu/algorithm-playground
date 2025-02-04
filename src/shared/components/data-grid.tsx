import { FC } from "react";
import { DataItem, SortAlgoTypes } from "../models";
import DataCell from "./data-cell";

const DataGrid: FC<{ data: Array<DataItem<number>>; type: SortAlgoTypes }> = ({
  data,
  type,
}) => {
  return (
    <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(2rem,1fr))]">
      {(data || []).map((itm) => (
        <DataCell key={itm.id} itemId={itm.id} type={type} />
      ))}
    </div>
  );
};

export default DataGrid;
