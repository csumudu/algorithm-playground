import { useRecoilTransaction_UNSTABLE } from "recoil";
import { Config, PlayerAction } from "../../shared/models";
import { SortState } from "../sort/sort-data.atoms";

export const useInitReducer = (defaultConfig: Config) => {
  const initReducer = useRecoilTransaction_UNSTABLE<
    Array<PlayerAction | undefined>
  >(({ set }) => () => {
    set(SortState.sourceDataLength, defaultConfig.defaultCollectionSize);
    set(SortState.speed, defaultConfig.defaultIntervaleTimeout);
  });

  return { initReducer };
};
