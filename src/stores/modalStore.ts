import { create } from "zustand";

interface useModalStore {
  showModalWallet: boolean;
  setShowModalWallet: (showAuthModal: boolean) => void;
  showModalEditarPerfil: boolean;
  setShowModalEditarPerfil: (showModalEditarPerfil: boolean) => void;
  showModalComprarCotas: boolean;
  setShowModalComprarCotas: (showModalComprarCotas: boolean) => void;
  showModalRetirarGanhos: boolean;
  setShowModalRetirarGanhos: (showModalRetirarGanhos: boolean) => void;
}

export const useModalStore = create<useModalStore>((set) => ({
  showModalWallet: false,
  setShowModalWallet: (showModalWallet) => set({ showModalWallet }),
  showModalEditarPerfil: false,
  setShowModalEditarPerfil: (showModalEditarPerfil) => set({ showModalEditarPerfil }),
  showModalComprarCotas: false,
  setShowModalComprarCotas: (showModalComprarCotas) => set({ showModalComprarCotas }),
  showModalRetirarGanhos: false,
  setShowModalRetirarGanhos: (showModalRetirarGanhos) => set({ showModalRetirarGanhos }),
}));
