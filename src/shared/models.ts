import { ElementType, ReactNode } from "react";
import { RecoilState, RecoilValue, SerializableParam } from "recoil";

export interface AppMenuItem {
  key: string;
  label: string | ReactNode;
  paths: Array<string>;
  component?: React.ReactNode;
  subMenu?: Array<AppMenuItem>;
}

export interface DataItem<T> {
  id: string;
  value: T;
  bgColor?: string;
  animationName?: string;
  borderColor?: string;
  isSorted?: boolean;
  resetTimeout?: number;
  isMarked?:boolean;
}

export enum PlayerActionType {
  PLAY = "PLAY",
  PAUSE = "PAUSE",
  STOP = "STOP",
  RELOAD = "RELOAD",
}

export interface PlayerAction {
  name: string;
  type: PlayerActionType;
  component: ElementType;
  isEnable?: boolean;
  isSelected?: boolean;
}

export enum SortChangeType {
  SWAP = "SWAP",
  SORTED = "SORTED",
  MOVED = "MOVED",
  HIGHLIGHT = "HIGHLIGHT",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  MARK = "MARK",
  UNMARK = "UNMARK",
}

export interface SortChange {
  type: SortChangeType;
  changes: any;
}

export interface Config {
  defaultCollectionSize: number;
  defaultIntervaleTimeout: number;
  minTimeout: number;
  maxTimeout: number;
}

export enum SortAlgoTypes {
  BUBBLE_SORT = "BUBBLE_SORT",
  SELECTION_SORT = "SELECTION_SORT",
  INSERTION_SORT = "INSERTION_SORT",
}

export type SourceDataMap = {
  [key in SortAlgoTypes]?: Array<DataItem<number>>;
};

export type ChildSelectedPlayerAction = {
  [key in SortAlgoTypes]?: PlayerAction;
};

export type ChildPlayerActions = Array<PlayerAction>;

export type SET<T> = (s: RecoilState<T>, u: ((currVal: T) => T) | T) => void;
export type GET<T> = (a: RecoilValue<T>) => T;

export type DaTaItemParam = {
  id: SerializableParam;
  type: SerializableParam;
};
