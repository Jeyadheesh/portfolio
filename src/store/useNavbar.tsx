import { create } from "zustand";

interface useNavbarType {
  activeElement: Pages;
  setActiveElement: (val: Pages) => void;
}

export const useNavbar = create<useNavbarType>()((set) => ({
  activeElement: "home",
  setActiveElement: (val: Pages) => set({ activeElement: val }),
}));
