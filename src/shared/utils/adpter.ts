import { DataItem } from "../models";
import { v4 as uuidv4 } from "uuid";

export const fromValueToDataItem = <T>(data: Array<T>) => {
  return (data || []).map(
    (d): DataItem<T> => ({
      id: uuidv4(),
      value: d as T,
    })
  );
};
