import { useRecoilValue } from "recoil";
import { useChildSelectedAction } from "../../state/hooks/use-update-child-player";
import { SortState } from "../../state/sort/sort-data.atoms";
import {
  isSortStart,
  selectChildControls,
  selectChildSelectedControl,
} from "../../state/sort/sort-data.selectors";
import { PlayerAction, SortAlgoTypes } from "../models";

export const useGetSortWidgetParams = (type: SortAlgoTypes) => {
  const data = useRecoilValue(SortState.sourceData)[type];
  const isSorting = useRecoilValue(isSortStart(type));
  const speed = useRecoilValue(SortState.speed);

  const playControls = useRecoilValue(selectChildControls(type));

  const selectedControl = useRecoilValue(selectChildSelectedControl(type));

  const { setSelectedAction } = useChildSelectedAction();

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
