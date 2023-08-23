import { create } from "zustand";

interface useModalStore {
  showModalWallet: boolean;
  setShowModalWallet: (showAuthModal: boolean) => void;
  showModalCotas: boolean;
  setShowModalCotas: (showModalCotas: boolean) => void;
}

export const useModalStore = create<useModalStore>((set) => ({
  showModalWallet: false,
  setShowModalWallet: (showModalWallet) => set({ showModalWallet }),
  showModalCotas: false,
  setShowModalCotas: (showModalCotas) => set({ showModalCotas }),
}));
