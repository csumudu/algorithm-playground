import {
  PauseCircleOutlined,
  PlayCircleOutlined,
  StopOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import { PlayerAction, PlayerActionType } from "./models";
import { MenuProps, MenuItemProps } from "antd";
import SortDashboardMain from "../features/algorithms/sort/sort-dashboard/sort-dashboard.main";
import { ElementType } from "react";
import SearchDashboard from "../features/algorithms/search/search-dashboard";
import StackDashboard from "../features/algorithms/stack/stack-dashboard";
import QueueDashboard from "../features/algorithms/queue/queue-dashboard";
import { BreadcrumbItemType } from "antd/es/breadcrumb/Breadcrumb";

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

export interface RouteConfig {
  key: MenuKeys;
  path: string;
  component: ElementType;
  isIndex?: boolean;
}

export enum MenuKeys {
  SORT = "SORT",
  SEARCH = "SEARCH",
  STACK = "STACK",
  QUEUE = "QUEUE",
}

export const APP_ROUTES: Array<RouteConfig> = [
  {
    key: MenuKeys.SORT,
    path: "/sort",
    isIndex: true,
    component: SortDashboardMain,
  },
  {
    key: MenuKeys.SEARCH,
    path: "/search",
    component: SearchDashboard,
  },
  {
    key: MenuKeys.STACK,
    path: "/stack",
    component: StackDashboard,
  },
  {
    key: MenuKeys.QUEUE,
    path: "/queue",
    component: QueueDashboard,
  },
];

export const MainMenuItems: MenuProps["items"] = [
  {
    key: MenuKeys.SORT,
    label: "Sort",
  },
  {
    key: MenuKeys.SEARCH,
    label: "Search",
  },
  {
    key: MenuKeys.STACK,
    label: "Stack",
  },
  {
    key: MenuKeys.QUEUE,
    label: "Queue",
  },
];

export const BreadcrumbConfig: {
  [keys in MenuKeys]: Array<Partial<BreadcrumbItemType>>;
} = {
  [MenuKeys.SORT]: [
    {
      title: "SORT",
    },
  ],
  [MenuKeys.SEARCH]: [
    {
      title: "SEARCH",
    },
  ],
  [MenuKeys.QUEUE]: [
    {
      title: "QUEUE",
    },
  ],
  [MenuKeys.STACK]: [
    {
      title: "STACK",
    },
  ],
};
