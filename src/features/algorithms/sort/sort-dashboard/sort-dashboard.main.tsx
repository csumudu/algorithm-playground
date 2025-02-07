import { SortAlgoTypes } from "../../../../shared/models";
import SortWidget from "./sort-widget";

const SortDashboardMain = () => {
  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] ">
      <SortWidget title="Quick Sort" type={SortAlgoTypes.QUICK_SORT} />
      <SortWidget title="Merge Sort" type={SortAlgoTypes.MERGE_SORT} />
      <SortWidget title="Bubble Sort" type={SortAlgoTypes.BUBBLE_SORT} />
      <SortWidget title="Insertion Sort" type={SortAlgoTypes.INSERTION_SORT} />
      <SortWidget title="Selection Sort" type={SortAlgoTypes.SELECTION_SORT} />
    </div>
  );
};

export default SortDashboardMain;
