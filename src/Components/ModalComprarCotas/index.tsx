"use client";
import X from "../Icons/X";
import { useModalStore } from "@/stores";
import BtnRoxo from "../BtnRoxo";
import { TLogoIcon } from "../Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContractMarketplace } from "@/hooks/useContractMarketplace";

export default function ModalComprarCotas() {
  const { onBuyCicle, isLoading } = useContractMarketplace();
  const { setShowModalComprarCotas } = useModalStore();
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const priceCicle = "150000";
  const priceReal = Number(priceCicle) * Number(price) * Number(amount);

  useEffect(() => {
    async function getUSDT() {
      try {
        const { data } = await axios.get(
          "https://economia.awesomeapi.com.br/last/USDT-BRL"
        );
        setPrice(data.USDBRLT.high);
      } catch (error) {
        console.error(error);
      }
    }
    getUSDT();
  }, []);

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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            maxLength={3}
            max={3}
            placeholder="0"
            className="bg-transparent w-1/2 text-[30px] font-bold outline-none"
          />
        </label>
        <div className="flex flex-col items-end">
          <p className="text-xs">R$ {price}/USDT</p>
          <h1 className="flex items-center gap-1">
            USDT:
            <p className="text-[20px] font-bold">
              {Number(priceCicle).toLocaleString("pt-BR")}
            </p>
            <TLogoIcon />
          </h1>
          <p className="text-xs">BRL: {priceReal.toLocaleString("pt-BR")}</p>
        </div>
      </div>
      <div className="h-14 w-1/2" onClick={() => onBuyCicle("1", amount)}>
        <BtnRoxo>SUPPLY USDT</BtnRoxo>
      </div>
    </div>
  );
}
