import { atom } from "recoil";
import { MenuKeys } from "../../shared/constants";

export const selectedMainMenuAtom = atom<MenuKeys>({
  key: "app.menu.selected",
  default: undefined,
});
