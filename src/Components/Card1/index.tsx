import Link from "next/link";
import Diamond from "../Icons/Diamond";
import Grafico1 from "../Icons/Grafico1";
import Grafico2 from "../Icons/Grafico2";
import Relogio from "../Icons/Relogio";
import Circle from "../Icons/Circle";
import InterrogacaoIcon from "../Icons/InterrogacaoIcon";
import { ICard1 } from "@/interfaces/ICard1";

export default function Card1({ item }: { item: ICard1 }) {
  return (
    <div className="flex flex-col justify-between rounded-xl shadow-2xl w-full bg-white text-black ">
      <div className="relative">
        <img src="/images/card-img.png" alt="" className="w-full h-auto" />
        {item.live && (
          <div className="absolute flex items-center gap-2 top-0 left-0 p-2 pl-3">
            <h1 className=" text-white font-semibold">AO VIVO</h1>
            <Circle />
          </div>
        )}
        <img src={item.img} alt="" className="absolute top-0 right-0 p-4" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="shadow-sm p-1 pl-2">
          <h1 className="text-black font-archivo font-semibold text-18 leading-normal tracking-wide">
            {item.title}
          </h1>
        </div>

        <div className="flex flex-col gap-2 ml-3">
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
                {item.prazo} dias
              </h2>
            </div>
          </div>
        </div>
        <Link href="/ciclos-view">
          <div className="h-[53px] bg-gradient-to-r cursor-pointer from-yellow-300 to-orange-500 flex items-center justify-center rounded-bl-[8px] rounded-br-[8px]">
            <h1 className="text-black font-archivo font-semibold text-18 leading-normal">
              DESCOBRIR MAIS
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
