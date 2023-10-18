import Heart from "../Icons/Heart";
import Share from "../Icons/Share";
import Star from "../Icons/Star";
import { ICiclo, INFT } from "@/interfaces";
import { useGetUSDT } from "@/hooks/useGetUSDT";
import { DateFormat } from "@/helpers/DateFormat";
import { useCountDown } from "@/hooks/useCountDown";
import { DateInfo } from "../Ciclos/CiclosViewInfoSection/DateInfo";
import BtnRoxo from "../BtnRoxo";
import { useModalStore } from "@/stores";

export default function NftData({
  item,
  cicle,
}: {
  item: INFT;
  cicle: ICiclo;
}) {
  const { setShowModalRetirarGanhos } = useModalStore();
  const { price } = useGetUSDT();
  const totalValue = Number(item.totalAmount).toLocaleString("pt-BR");
  const totalValueBRL = (Number(item.totalAmount) * price).toLocaleString(
    "pt-BR"
  );
  const { isoToTimestamp } = DateFormat;
  const timestamp = isoToTimestamp(cicle.closingDate);
  const timer = useCountDown(timestamp);

  return (
    <div className="flex flex-col w-full border-2 bg-white rounded-lg p-4 py-8 shadow-2xl">
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex items-center justify-between">
          <h1 className="text-black font-Archivo text-2xl font-bold tracking-wide leading-normal letter-spacing-1.5">
            {item.__typename}
          </h1>
          <div className="flex items-center justify-between w-[25%]">
            <div className="bg-white shadow-xl rounded-[50%] p-2 cursor-pointer">
              <Heart />
            </div>
            <div className="bg-white shadow-xl rounded-[50%] p-2 cursor-pointer">
              <Share />
            </div>
            <div className="bg-white shadow-xl rounded-[50%] p-2 cursor-pointer">
              <Star />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[95%] border-gray-200 rounded-sm border-[1px] px-5 py-3">
          <div className="flex pb-3">
            <h1 className="text-black font-Archivo text-md font-bold tracking-wide leading-normal letter-spacing-1">
              Preço atual:
            </h1>
          </div>
          <div className="flex items-center gap-3 py-10 border-y-[1px] border-gray-200">
            <div className="flex items-center gap-2">
              <h1 className="text-black font-Archivo text-3xl font-bold tracking-wide leading-normal letter-spacing-1.75">
                USDT: $ {totalValue}
              </h1>
              <img src="/images/usdt.png" alt="" />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-black font-Archivo text-md font-normal tracking-wide leading-normal letter-spacing-1">
                (BRL: R$ {totalValueBRL})
              </h1>
              <img src="/images/brl.png" alt="" />
            </div>
          </div>

          {timer! > 0 ? (
            <DateInfo date={cicle.closingDate} />
          ) : (
            <div
              onClick={() => setShowModalRetirarGanhos(true)}
              className="w-[30%] h-[50px] mt-4 mb-2"
            >
              <BtnRoxo>RETIRAR FUNDOS</BtnRoxo>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
