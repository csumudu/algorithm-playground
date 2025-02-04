import { FC } from "react";
import { PlayerAction } from "../models";
import PlayControlIcon from "./play-control-icon";

const PlayControls: FC<{
  actions: Array<PlayerAction>;
  onSelect: (e: PlayerAction) => void;
  selected?: PlayerAction;
}> = ({ actions, onSelect, selected }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      {actions.map((ctrl) => {
        const isMatch = ctrl.type == selected?.type;

        const adapted: PlayerAction = {
          ...ctrl,
          isSelected: ctrl.isSelected || isMatch,
        };

        return (
          <PlayControlIcon key={ctrl.name} ctrl={adapted} onSelect={onSelect} />
        );
      })}
    </div>
  );
};

export default PlayControls;
