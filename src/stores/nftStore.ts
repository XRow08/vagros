import type { INFT } from "@/interfaces";
import { create } from "zustand";

interface useNFTStore {
  NFTs: INFT[];
  setNFTs: (NFTs: INFT[]) => void;
  selectedNFT: INFT | undefined;
  setSelectedNFT: (selectedNFT: INFT) => void;
}

export const useNFTStore = create<useNFTStore>((set) => ({
  NFTs: [],
  setNFTs: (NFTs) => set({ NFTs }),
  selectedNFT: undefined,
  setSelectedNFT: (selectedNFT) => set({ selectedNFT }),
}));
