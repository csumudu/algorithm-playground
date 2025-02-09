import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { APP_CONFIG } from "../../config/app-config";
import { useChangeConfigReducer } from "../../state/reducers/change-config.reducer";
import { useDataReducer } from "../../state/reducers/data-reducer";
import { useInitReducer } from "../../state/reducers/init-state.reducer";
import { usePlayActionReducer } from "../../state/reducers/play-action.reducer";
import { SortState } from "../../state/sort/sort-data.atoms";
import { useChildPlayActionReducer } from "../../state/reducers/child-play-action.reducer";

const TransactionObserver = () => {
  const selectedAction = useRecoilValue(SortState.selectedAction);
  const length = useRecoilValue(SortState.sourceDataLength);
  const speed = useRecoilValue(SortState.speed);
  const rowData = useRecoilValue(SortState.rowData);
  const selectedChildControls = useRecoilValue(
    SortState.childControls.selectedControls
  );

  const { playerActionReducer } = usePlayActionReducer();
  const { initReducer } = useInitReducer(APP_CONFIG);
  const { changeConfigReducer } = useChangeConfigReducer();
  const { dataReducer } = useDataReducer();
  const { childPlayerActionReducer } = useChildPlayActionReducer();

  useEffect(() => {
    initReducer();
  }, []);

  useEffect(() => {
    childPlayerActionReducer(selectedChildControls);
  }, [selectedChildControls]);

  useEffect(() => {
    changeConfigReducer(length, speed);
  }, [length, speed]);

  useEffect(() => {
    playerActionReducer(selectedAction);
  }, [selectedAction]);

  useEffect(() => {
    dataReducer(rowData);
  }, [rowData]);

  return null;
};

export default TransactionObserver;
