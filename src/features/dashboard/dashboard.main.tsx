import { Card } from "antd";
import BubbleSortMain from "../alsorithms/sort/bubble-sort/bubble-sort-main";
import SelectionSortMain from "../alsorithms/sort/selection-sort/selection-sort.main";
import InsertionSortMain from "../alsorithms/sort/insertion-sort/insertion-sort-main";

const DashboardMain = () => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] ">
      <BubbleSortMain />
      <SelectionSortMain />
      <InsertionSortMain />
      <Card title="Merge Sort">
        <div className="h-20"></div>
      </Card>
      <Card title="Quick Sort">
        <div className="h-20"></div>
      </Card>
    </div>
  );
};

export default DashboardMain;
