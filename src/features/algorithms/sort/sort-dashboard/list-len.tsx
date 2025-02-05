import { InputNumber } from "antd";
import { useDeferredValue, useTransition } from "react";
import { useRecoilState } from "recoil";
import { SortState } from "../../../../state/sort/sort-data.atoms";

const ListLength = () => {
  const [_, startTransition] = useTransition();
  const [length, setSourceLen] = useRecoilState(SortState.sourceDataLength);

  const defLen = useDeferredValue(length);

  const updateLengthHandler = (length: number) => {
    startTransition(() => {
      setSourceLen(length);
    });
  };

  return (
    <div>
      <label className="text-gray-500 text-sm">Number of Items</label>
      <InputNumber
        style={{ width: "100%" }}
        min={1}
        value={defLen}
        onChange={updateLengthHandler}
      />
    </div>
  );
};

export default ListLength;
