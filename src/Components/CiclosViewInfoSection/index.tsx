'use client'
import { ICiclosViewInfoSection } from "@/interfaces/ICiclosViewInfoSection";
import BtnRoxo from "../BtnRoxo";
import Bull2 from "../Icons/Bull2";
import Diamond from "../Icons/Diamond";
import Grafico1 from "../Icons/Grafico1";
import Grafico2 from "../Icons/Grafico2";
import InterrogacaoIcon from "../Icons/InterrogacaoIcon";
import Relogio from "../Icons/Relogio";
import ProgressBar from "../ProgressBar";
import { useModalStore } from "@/stores";


export default function CiclosViewInfoSection({ item }: { item: ICiclosViewInfoSection }) {

  const { setShowModalComprarCotas } = useModalStore()

  return (
    <div className="flex flex-col w-full h-[480px] bg-white rounded-lg p-5  shadow-lg">
      <div className="flex flex-col gap-4 w-full h-full">
        <h1 className="text-black font-Archivo text-2xl font-bold leading-normal tracking-wider">
          Vagros 1° stake ciclo de produção
        </h1>

        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico1 />
              </div>

              <div className="text-black">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">
                  Stake Beef
                  </h1>
                  <InterrogacaoIcon />
                </div>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                {item.stakeBeef} APY
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico2 />
              </div>

              <div className="text-black">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">
                    Produção Alvo
                  </h1>
                  <InterrogacaoIcon />
                </div>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                 {item.producaoAlvo} @
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Diamond />
              </div>

              <div className="text-black">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">
                    Valor do ciclo
                  </h1>
                  <InterrogacaoIcon />
                </div>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  R$ {item.cycleValue}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Relogio />
              </div>

              <div className="text-black">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">
                    Prazo
                  </h1>
                  <InterrogacaoIcon />
                </div>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                 {item.prazo} Dias
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
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">
                    Valor mínimo
                  </h1>
                  <InterrogacaoIcon />
                </div>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  R$ {item.minValue}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico2 />
              </div>

              <div className="text-black">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">
                    Modalidade
                  </h1>
                  <InterrogacaoIcon />
                </div>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                  {item.modalidade}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Bull2 />
              </div>

              <div className="text-black">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-black font-archivo font-normal text-20 leading-normal tracking-wide">
                    Quantidade
                  </h1>
                  <InterrogacaoIcon />
                </div>

                <h2 className="text-black font-archivo font-semibold text-20 leading-normal tracking-wide">
                 {item.quantidade} @
                </h2>
              </div>
            </div>
          </div>
        </div>

        <ProgressBar></ProgressBar>

        <div className="flex items-center justify-between">
          <div className="flex flex-col w-[40%]">
            <div className="flex items-center gap-2 justify-between w-full">
              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                  {item.date.days}
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  dias
                </h2>
              </div>

              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                {item.date.hours}
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  horas
                </h2>
              </div>

              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                {item.date.mins}
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  min
                </h2>
              </div>

              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                {item.date.segs}
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  seg
                </h2>
              </div>
            </div>
          </div>

          <div onClick={() => setShowModalComprarCotas(true)} className="flex w-[40%] h-[50px]">
            <BtnRoxo>PARTICIPAR DO CICLO</BtnRoxo>
          </div>
        </div>
      </div>
    </div>
  );
}
