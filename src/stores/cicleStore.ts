import type { ICiclo } from "@/interfaces";
import { create } from "zustand";

interface useCicleStore {
  cicles: ICiclo[];
  setCicles: (cicles: ICiclo[]) => void;
  selectedCicle: ICiclo | undefined;
  setSelectedCicle: (selectedCicle: ICiclo) => void;
}

export const useCicleStore = create<useCicleStore>((set) => ({
  cicles: [],
  setCicles: (cicles) => set({ cicles }),
  selectedCicle: undefined,
  setSelectedCicle: (selectedCicle) => set({ selectedCicle }),
}));
