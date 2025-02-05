import { RecoilState, useRecoilTransaction_UNSTABLE } from "recoil";
import { PlayerAction, PlayerActionType, SET } from "../../shared/models";
import { SortState } from "../sort/sort-data.atoms";
import { APP_CONFIG } from "../../config/app-config";
import { getRandomCol } from "../../shared/utils/misc";

export const usePlayActionReducer = () => {
  const patchActions = (
    set: SET<PlayerAction>,
    patch: Partial<PlayerAction>,
    ...atoms: Array<RecoilState<PlayerAction>>
  ) => {
    (atoms || []).forEach((a) => {
      set(a, (p) => ({ ...p, ...patch }));
    });
  };

  const playerActionReducer = useRecoilTransaction_UNSTABLE<
    Array<PlayerAction | undefined>
  >(
    ({ set }) =>
      (selectedPlayerAction) => {
        switch (selectedPlayerAction?.type) {
          case PlayerActionType.PLAY: {
            patchActions(
              set,
              { isSelected: true, isEnable: false },
              SortState.play
            );
            patchActions(
              set,
              { isSelected: false, isEnable: true },
              SortState.pause,
              SortState.reset
            );

            break;
          }
          case PlayerActionType.PAUSE: {
            patchActions(
              set,
              { isSelected: true, isEnable: false },
              SortState.pause
            );
            patchActions(
              set,
              { isSelected: false, isEnable: true },
              SortState.play,
              SortState.reset
            );

            break;
          }

          case PlayerActionType.RELOAD: {
            patchActions(
              set,
              { isEnable: true, isSelected: false },
              SortState.play,
              SortState.reset
            );
            patchActions(
              set,
              { isSelected: false, isEnable: false },
              SortState.pause,
            );
            set(SortState.selectedAction, undefined);
            set(SortState.sourceDataLength, APP_CONFIG.defaultCollectionSize);
            set(SortState.speed, APP_CONFIG.defaultIntervaleTimeout);
            set(
              SortState.rowData,
              getRandomCol(APP_CONFIG.defaultCollectionSize)
            );
            set(SortState.childControls.selectedControls, {});

            break;
          }
        }
      },
    []
  );

  return { playerActionReducer };
};
