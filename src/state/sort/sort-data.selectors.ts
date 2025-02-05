import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { selector, selectorFamily } from "recoil";
import {
  PlayerAction,
  PlayerActionType,
  SortAlgoTypes,
} from "../../shared/models";
import { fromValueToDataItem } from "../../shared/utils/adpter";
import { getRandomCol } from "../../shared/utils/misc";
import { SortState } from "./sort-data.atoms";

export const selectDataItems = selector({
  key: "sortState.selector.allDataItems",
  get: ({ get }) => {
    const len = get(SortState.sourceDataLength);

    const rowData = getRandomCol(len);
    const adapted = fromValueToDataItem(rowData);
    return adapted;
  },
});

export const selectPlayerActions = selector({
  key: "sortState.selector.allPlayerActions",
  get: ({ get }) => {
    const play = get(SortState.play);
    const pause = get(SortState.pause);
    const reset = get(SortState.reset);

    return [play, pause, reset];
  },
});

export const selectChildSelectedControl = selectorFamily<
  PlayerAction | undefined,
  SortAlgoTypes
>({
  key: "sortState.selector.getSelectedChildControl",
  get:
    (type: SortAlgoTypes) =>
    ({ get }) => {
      const selected = get(SortState.childControls.selectedControls);
      return selected[type];
    },
});

export const selectChildControls = selectorFamily<
  Array<PlayerAction> | undefined,
  SortAlgoTypes
>({
  key: "sortState.selector.getSelectedChildControl",
  get:
    () =>
    ({ get }) => {
      const allControls = get(SortState.childControls.actions);
      return allControls;
    },
});

export const isSortStart = selectorFamily<boolean, SortAlgoTypes>({
  key: "sortState.selector.getSelectedChildControl",
  get:
    (type: SortAlgoTypes) =>
    ({ get }) => {
      const isGlobalPlay =
        get(SortState.selectedAction)?.type == PlayerActionType.PLAY;
      const localType = get(selectChildSelectedControl(type))?.type;
      const localPlay = localType == PlayerActionType.PLAY;
      const localPause = localType == PlayerActionType.PAUSE;

      return (isGlobalPlay || localPlay) && !localPause;
    },
});
