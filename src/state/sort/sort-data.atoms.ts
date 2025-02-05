import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  UndoOutlined
} from "@ant-design/icons";
import { atom, atomFamily, selectorFamily } from "recoil";
import { v4 as uuidv4 } from "uuid";
import {
  ChildPlayerActions,
  ChildSelectedPlayerAction,
  DataItem,
  DaTaItemParam,
  PlayerAction,
  PlayerActionType,
  SortAlgoTypes,
  SourceDataMap,
} from "../../shared/models";

const playAtom = atom<PlayerAction>({
  key: "sortState.play",
  default: {
    name: "Play",
    type: PlayerActionType.PLAY,
    component: PlayCircleOutlined,
    isEnable: true,
    isSelected: false,
  },
});

const pauseAtom = atom<PlayerAction>({
  key: "sortState.pause",
  default: {
    name: "Pause",
    type: PlayerActionType.PAUSE,
    component: PauseCircleOutlined,
    isEnable: false,
    isSelected: false,
  },
});

const resetAtom = atom<PlayerAction>({
  key: "sortState.reset",
  default: {
    name: "Reset",
    type: PlayerActionType.RELOAD,
    component: UndoOutlined,
    isEnable: true,
    isSelected: false,
  },
});

const selectedPlayerActionAtom = atom<PlayerAction | undefined>({
  key: "sortState.selectedAction",
  default: undefined,
});

const sourceDataLengthAtom = atom<number>({
  key: "sortState.sourceDataLength",
  default: undefined,
});

const sortSpeedAtom = atom<number>({
  key: "sortState.sortSpeed",
  default: 100,
});

const sourceRowDataColAtom = atom<Array<number>>({
  key: "sortState.sourceRowDataCol",
  default: [],
});

const sourceDataColAtom = atom<SourceDataMap>({
  key: "sortState.sourceDataCol",
  default: {},
});

const childSortControls = atom<ChildPlayerActions>({
  key: "sortState.bubbleSort.controls",
  default: [
    {
      name: "Play",
      type: PlayerActionType.PLAY,
      component: PlayCircleOutlined,
      isEnable: true,
      isSelected: false,
    },
    {
      name: "Pause",
      type: PlayerActionType.PAUSE,
      component: PauseCircleOutlined,
      isEnable: true,
      isSelected: false,
    },
    {
      name: "Reset",
      type: PlayerActionType.RELOAD,
      component: UndoOutlined,
      isEnable: true,
      isSelected: false,
    },
  ],
});

const childSelectedPlayerAction = atom<ChildSelectedPlayerAction>({
  key: "sortState.child.selectedActions",
  default: {
    [SortAlgoTypes.BUBBLE_SORT]: undefined,
    [SortAlgoTypes.SELECTION_SORT]: undefined,
    [SortAlgoTypes.INSERTION_SORT]: undefined,
  },
});

const dataItemFamily = atomFamily<DataItem<number>, DaTaItemParam>({
  key: "sortState.dataItem.family",
  default: selectorFamily({
    key: "itemsFamily/Default",
    get:
      ({ id, type }) =>
      ({ get }) => {
        const dataSet = get(sourceDataColAtom)?.[type as SortAlgoTypes];
        return (
          dataSet.find((d) => d.id == id) || {
            id: uuidv4(),
            value: 0,
          }
        );
      },
  }),
});

export const SortState = {
  play: playAtom,
  pause: pauseAtom,
  reset: resetAtom,
  speed: sortSpeedAtom,
  selectedAction: selectedPlayerActionAtom,
  rowData: sourceRowDataColAtom,
  sourceData: sourceDataColAtom,
  sourceDataLength: sourceDataLengthAtom,
  childControls: {
    selectedControls: childSelectedPlayerAction,
    actions: childSortControls,
  },
  dataItemFamily,
};
