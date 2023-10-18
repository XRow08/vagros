import Diamond from "../../Icons/Diamond";
import Grafico1 from "../../Icons/Grafico1";
import Grafico2 from "../../Icons/Grafico2";
import Relogio from "../../Icons/Relogio";
import InterrogacaoIcon from "../../Icons/InterrogacaoIcon";
import type { ICiclo } from "@/interfaces/ICiclo";
import BtnAmarelo from "../../BtnAmarelo";
import { useGetUSDT } from "@/hooks/useGetUSDT";

export default function CicleCard({ item }: { item: ICiclo }) {
  const { price } = useGetUSDT();
  const minValue = Number(item.minValue).toLocaleString("pt-BR");
  const minValueBRL = (Number(item.minValue) * price).toLocaleString("pt-BR");
  const totalValue = Number(item.totalValue).toLocaleString("pt-BR");
  const totalValueBRL = (Number(item.totalValue) * price).toLocaleString(
    "pt-BR"
  );
  return (
    <div className="flex flex-col justify-between rounded-xl overflow-hidden shadow-2xl w-full bg-white text-black transition-all duration-300 ease-in-out hover:-translate-y-2">
      <img
        src={item.thumbnail}
        alt="card-img"
        className="w-full h-[360px] object-fill object-center"
      />

      <div className="flex flex-col gap-3">
        <div className="shadow-sm p-1 pl-2">
          <h1 className="text-black font-archivo font-semibold text-18 leading-normal tracking-wide">
            {item.description}
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
                {item.stakeBeef}% APY
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
                USDT {minValue} / BRL {minValueBRL}
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
                USDT {totalValue} / BRL {totalValueBRL}
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
                150 dias
              </h2>
            </div>
          </div>
        </div>
        <a
          href={`/cicles/${item.id}`}
          className="h-14 overflow-hidden rounded-b-xl"
        >
          <BtnAmarelo>DESCOBRIR MAIS</BtnAmarelo>
        </a>
      </div>
    </div>
  );
}
