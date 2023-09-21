"use client";
import { StorageHelper } from "@/helpers";
import { useModalStore } from "@/stores/modalStore";

export default function ConnectWalletButton() {
  const { setShowModalWallet } = useModalStore();
  const address = StorageHelper.getItem("address");
  const firstFour = address?.substring(0, 4);
  const lastFour = address?.slice(-4);
  const result = `${firstFour}...${lastFour}`;

  return (
    <button
      onClick={() => setShowModalWallet(true)}
      disabled={!!address}
      className="w-[237px] h-[51px] bg-gradient-to-r from-yellow-300 to-orange-500 text-black font-bold text-16 rounded-[8px] "
    >
      {address ? result : "CONECTAR CARTEIRA"}
    </button>
  );
}
