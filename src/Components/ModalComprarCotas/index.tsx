"use client";
import X from "../Icons/X";
import { useModalStore } from "@/stores";
import BtnRoxo from "../BtnRoxo";
import { BrasilIcon, TLogoIcon } from "../Icons";

export default function ModalComprarCotas() {
  const { setShowModalComprarCotas } = useModalStore();

  return (
    <div className="flex flex-col items-center inset-1 w-[450px] rounded-lg border-[2px] p-4 gap-4 py-8 border-gray-300 bg-white text-black shadow-xl">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-black font-Archivo text-xl font-bold tracking-wider leading-normal">
          Stake ciclo
        </h1>
        <X onClick={() => setShowModalComprarCotas(false)} />
      </div>
      <div className="border border-[#DFDFDF] rounded-lg bg-[rgba(0,12,117,.08)] w-full p-4 flex items-center justify-between">
        <label className="w-1/2">
          <p className="text-sm font-normal">Amount</p>
          <input
            type="number"
            maxLength={3}
            max={3}
            placeholder="0"
            className="bg-transparent w-1/2 text-[30px] font-bold"
          />
        </label>
        <div className="flex items-center gap-1">
          USDT:
          <p className="text-[20px] font-bold">R$ 1.500.00</p>
          <BrasilIcon />
        </div>
      </div>
      <div className="border border-[#DFDFDF] rounded-lg bg-[rgba(0,12,117,.08)] w-full p-4 flex items-center justify-between">
        <label className="w-1/2">
          <p className="text-sm font-normal">Você paga</p>
          <input
            type="number"
            maxLength={3}
            max={3}
            placeholder="0"
            className="bg-transparent w-1/2 text-[30px] font-bold"
          />
        </label>
        <div className="flex items-center gap-1">
          USDT:
          <p className="text-[20px] font-bold">R$ 1.500.00</p>
          <TLogoIcon />
        </div>
      </div>
      <div className="h-14 w-1/2">
        <BtnRoxo children={"SUPPLY USDT"} />
      </div>
    </div>
  );
}
