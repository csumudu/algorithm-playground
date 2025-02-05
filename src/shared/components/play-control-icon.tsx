import { FC } from "react";
import { PlayerAction } from "../models";

const PlayControlIcon: FC<{
  ctrl: PlayerAction;
  onSelect: (e: PlayerAction) => void;
}> = ({ ctrl,onSelect }) => {
  

  const IconComp = ctrl.component;
  return (
    <IconComp
      className={`text-2xl`}
      style={{
        color: ctrl.isSelected
          ? "var(--color-pink-700)"
          : ctrl.isEnable
          ? "var(--color-blue-700)"
          : "var(--color-gray-800)",
        cursor: ctrl.isEnable ? "pointer" : "not-allowed",
      }}
      onClick={() => onSelect(ctrl)}
    />
  );
};

export default PlayControlIcon;
