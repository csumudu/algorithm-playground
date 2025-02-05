import BubbleSortMain from "../alsorithms/sort/bubble-sort/bubble-sort-main";
import InsertionSortMain from "../alsorithms/sort/insertion-sort/insertion-sort-main";
import MergeSortMain from "../alsorithms/sort/merge-sort/merge-sort.main";
import QuickSortMain from "../alsorithms/sort/quick-sort/quick-sort.main";
import SelectionSortMain from "../alsorithms/sort/selection-sort/selection-sort.main";

const DashboardMain = () => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] ">
      <BubbleSortMain />
      <SelectionSortMain />
      <InsertionSortMain />
      <MergeSortMain />
      <QuickSortMain />
    </div>
  );
};

export default DashboardMain;
