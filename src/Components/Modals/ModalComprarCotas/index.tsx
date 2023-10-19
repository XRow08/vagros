"use client";
import X from "../../Icons/X";
import { useModalStore } from "@/stores";
import BtnRoxo from "../../BtnRoxo";
import { TLogoIcon } from "../../Icons";
import { useContractMarketplace } from "@/hooks/useContractMarketplace";
import { useGetUSDT } from "@/hooks/useGetUSDT";
import { useCicleStore } from "@/stores/cicleStore";
import { useEffect } from "react";

export default function ModalComprarCotas() {
  const { onBuyCicle, isLoading } = useContractMarketplace();
  const { setShowModalComprarCotas } = useModalStore();
  const { priceReal, setAmount, amount, price, priceCicle, setPriceCicle } =
    useGetUSDT();
  const { selectedCicle } = useCicleStore();
  const tokenId = selectedCicle?.tokenId;
  const minValue = Number(selectedCicle?.minValue).toLocaleString("pt-BR");
  const minValueBRL = (Number(selectedCicle?.minValue) * price).toLocaleString(
    "pt-BR"
  );
  const valueFinal = (Number(amount) * Number(priceCicle)).toLocaleString(
    "pt-BR"
  );

  useEffect(() => {
    setPriceCicle(selectedCicle?.curValue.toString()!);
  }, []);

  return (
    <div className="flex flex-col items-center inset-1 w-[550px] rounded-lg border-[2px] p-4 gap-4 py-8 border-gray-300 bg-white text-black shadow-xl">
      <div className="flex w-full items-center justify-between mb-12">
        <h1 className="text-black font-Archivo text-xl font-bold tracking-wider leading-normal">
          Stake ciclo
        </h1>
        <X onClick={() => setShowModalComprarCotas(false)} />
      </div>
      <div className="border border-[#DFDFDF] rounded-lg bg-[rgba(0,12,117,.08)] w-full p-6 flex flex-col">
        <div className="flex w-full justify-between text-sm font-normal items-center mb-12">
          <h1 className="flex items-center gap-1">
            USDT: {Number(priceCicle).toLocaleString("pt-BR")}
          </h1>
          <h1 className="flex items-center gap-1">
            Valor mínimo:
            <p>
              USDT {minValue} / BRL {minValueBRL}
            </p>
          </h1>
        </div>
        <div className="flex w-full justify-between items-center">
          <label className="w-1/2">
            <p className="text-sm font-normal">Quantidade</p>
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
          <div className="flex flex-col items-start">
            <h1 className="flex text-base items-center gap-1">
              USDT: {valueFinal}
            </h1>
            <h1 className="flex text-sm items-center gap-1">
              BRL: {priceReal.toLocaleString("pt-BR")}
            </h1>
          </div>
          <TLogoIcon size="w-[40px]" />
        </div>
      </div>
      <div className="h-14 w-1/2" onClick={() => onBuyCicle(tokenId!, amount)}>
        <BtnRoxo>{!isLoading ? "FORNECER USDT" : "CARREGANDO..."}</BtnRoxo>
      </div>
    </div>
  );
}
