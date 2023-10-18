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
      className="w-[237px] h-[50px] bg-gradient-to-r active:scale-95 transition-all duration-300 ease-in-out hover:opacity-80 from-yellow-300 to-orange-500 text-black font-bold text-16 rounded-[8px] "
    >
      {address ? result : "CONECTAR CARTEIRA"}
    </button>
  );
}
