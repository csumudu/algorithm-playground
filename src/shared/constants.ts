import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  StopOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { PlayerAction, PlayerActionType } from "./models";

export const AllPlayerActions: Array<PlayerAction> = [
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
  },
  {
    name: "Stop",
    type: PlayerActionType.STOP,
    component: StopOutlined,
  },
  {
    name: "Reload",
    type: PlayerActionType.RELOAD,
    component: UndoOutlined,
  },
];
