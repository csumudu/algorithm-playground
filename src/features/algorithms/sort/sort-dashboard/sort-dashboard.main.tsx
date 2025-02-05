import BubbleSortMain from "../bubble-sort/bubble-sort-main";
import HeapSortMain from "../heap-sort/heap-sort.main";
import InsertionSortMain from "../insertion-sort/insertion-sort-main";
import MergeSortMain from "../merge-sort/merge-sort.main";
import QuickSortMain from "../quick-sort/quick-sort.main";
import SelectionSortMain from "../selection-sort/selection-sort.main";

const SortDashboardMain = () => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] ">
      <BubbleSortMain />
      <SelectionSortMain />
      <InsertionSortMain />
      <MergeSortMain />
      <QuickSortMain />
      <HeapSortMain />
    </div>
  );
};

export default SortDashboardMain;
