import { Slider } from "antd";
import { useRecoilState } from "recoil";
import { APP_CONFIG } from "../../config/app-config";
import { SortState } from "../../state/sort/sort-data.atoms";

const AppSlider = () => {
  const [speed, setSeed] = useRecoilState(SortState.speed);
  return (
    <Slider
      defaultValue={speed}
      value={speed}
      onChange={setSeed}
      styles={{
        track: {
          background: "var(--color-blue-700)",
        },
      }}
      min={APP_CONFIG.minTimeout}
      max={APP_CONFIG.maxTimeout}
    />
  );
};

export default AppSlider;
