import { ICiclo } from "@/interfaces";
import BtnRoxo from "../../BtnRoxo";
import Bull2 from "../../Icons/Bull2";
import Diamond from "../../Icons/Diamond";
import Grafico1 from "../../Icons/Grafico1";
import Grafico2 from "../../Icons/Grafico2";
import InterrogacaoIcon from "../../Icons/InterrogacaoIcon";
import Relogio from "../../Icons/Relogio";
import ProgressBar from "../../ProgressBar";
import { useModalStore } from "@/stores";
import { useGetUSDT } from "@/hooks/useGetUSDT";
import { DateInfo } from "./DateInfo";

export default function CiclosViewInfoSection({ item }: { item: ICiclo }) {
  const { setShowModalComprarCotas } = useModalStore();
  const { price } = useGetUSDT();
  const totalValue = item.totalValue.toLocaleString("pt-BR");
  const totalValueBRL = (item.totalValue * price).toLocaleString("pt-BR");
  const minValue = item.minValue.toLocaleString("pt-BR");
  const minValueBRL = (item.minValue * price).toLocaleString("pt-BR");

  return (
    <div className="flex flex-col w-full bg-white rounded-lg p-5  shadow-lg">
      <div className="flex flex-col gap-4 w-full h-full">
        <h1 className="text-black font-Archivo text-2xl font-bold leading-normal tracking-wider">
          {item.description}
        </h1>

        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico1 />
              </div>

              <div className="text-black">
                <h1 className="flex items-center gap-2 font-archivo font-normal text-20 leading-normal tracking-wide">
                  Stake Beef
                  <InterrogacaoIcon />
                </h1>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  {item.stakeBeef}% APY
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico2 />
              </div>

              <div className="text-black">
                <h1 className="flex items-center gap-2 font-archivo font-normal text-20 leading-normal tracking-wide">
                  Produção Alvo
                  <InterrogacaoIcon />
                </h1>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  {item.targetProduct} @
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Diamond />
              </div>

              <div className="text-black">
                <h1 className="flex items-center gap-2 font-archivo font-normal text-20 leading-normal tracking-wide">
                  Valor do ciclo
                  <InterrogacaoIcon />
                </h1>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  USDT {totalValue} / BRL {totalValueBRL}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Relogio />
              </div>

              <div className="text-black">
                <h1 className="flex items-center gap-2 font-archivo font-normal text-20 leading-normal tracking-wide">
                  Prazo
                  <InterrogacaoIcon />
                </h1>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  150 Dias
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico1 />
              </div>

              <div className="text-black">
                <h1 className="flex items-center gap-2 font-archivo font-normal text-20 leading-normal tracking-wide">
                  Valor mínimo
                  <InterrogacaoIcon />
                </h1>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  USDT {minValue} / BRL {minValueBRL}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico2 />
              </div>

              <div className="text-black">
                <h1 className="flex items-center gap-2 font-archivo font-normal text-20 leading-normal tracking-wide">
                  Modalidade
                  <InterrogacaoIcon />
                </h1>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  {item.modality}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Bull2 />
              </div>

              <div className="text-black">
                <h1 className="flex items-center gap-2 font-archivo font-normal text-20 leading-normal tracking-wide">
                  Quantidade
                  <InterrogacaoIcon />
                </h1>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  {item.quantity} @
                </h2>
              </div>
            </div>
          </div>
        </div>

        <ProgressBar
          status={item.percentage}
          curValue={totalValue}
          curValueBRL={totalValueBRL}
        />

        <div className="flex items-center justify-between">
          <DateInfo date={item.closingDate} />
          <div
            onClick={() => setShowModalComprarCotas(true)}
            className="flex w-1/3 h-[50px]"
          >
            <BtnRoxo>PARTICIPAR DO CICLO</BtnRoxo>
          </div>
        </div>
      </div>
    </div>
  );
}
