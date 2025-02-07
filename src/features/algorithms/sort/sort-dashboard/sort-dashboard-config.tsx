import { Card } from "antd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import AppSlider from "../../../../shared/components/app-slider";
import PlayControls from "../../../../shared/components/play-controls";
import { SortState } from "../../../../state/sort/sort-data.atoms";
import { selectPlayerActions } from "../../../../state/sort/sort-data.selectors";
import ListLength from "./list-len";

const SortDashboardConfig = () => {
  const playerControls = useRecoilValue(selectPlayerActions);
  const speed = useRecoilValue(SortState.speed);
  const setSelectedAction = useSetRecoilState(SortState.selectedAction);
  return (
    <div className="pl-5">
      <Card title={<div className="hidden sm:block">Configurations</div>}>
        <div className="flex flex-col gap-5 ">
          <ListLength />
          <div className="hidden md:block">
            <label className="text-gray-500 text-sm">Speed : {speed} ms</label>
            <AppSlider />
          </div>
          <div>
            <PlayControls
              actions={playerControls}
              onSelect={setSelectedAction}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SortDashboardConfig;
