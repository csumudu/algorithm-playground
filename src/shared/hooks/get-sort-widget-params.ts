import { useRecoilValue } from "recoil";
import { useChildSelectedAction } from "../../state/hooks/use-update-child-player";
import { SortState } from "../../state/sort/sort-data.atoms";
import {
  isSortStart,
  selectChildControls,
  selectChildSelectedControl,
} from "../../state/sort/sort-data.selectors";
import { PlayerAction, SortAlgoTypes, SortChange } from "../models";
import { useEffect, useRef } from "react";
import { useUpdateItem } from "../../state/hooks/use-update-item";
import { AlgorithmFactory } from "../../features/algorithms/services/algo-factory";

export const useGetSortWidgetParams = (type: SortAlgoTypes) => {
  const data = useRecoilValue(SortState.sourceData)[type];
  const isSorting = useRecoilValue(isSortStart(type));
  const speed = useRecoilValue(SortState.speed);

  const playControls = useRecoilValue(selectChildControls(type));

  const selectedControl = useRecoilValue(selectChildSelectedControl(type));

  const { setSelectedAction } = useChildSelectedAction();

  const iterRef = useRef(null);
  const visualizer = AlgorithmFactory.getVisualizer(type);

  const update = useUpdateItem(type);

  useEffect(() => {
    if (data) {
      const generator = AlgorithmFactory.getSortGenerator(type);
      iterRef.current = generator([...data]);
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
          visualizer(value, update, data);
        } else {
          selectControlHandler(undefined);
        }
      }, speed);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [iterRef.current, isSorting, speed]);

  const selectControlHandler = (e: PlayerAction) => {
    setSelectedAction(type, e);
  };

  return {
    data,
    speed,
    isSorting,
    playControls,
    selectedControl,
    selectControlHandler,
  };
};
