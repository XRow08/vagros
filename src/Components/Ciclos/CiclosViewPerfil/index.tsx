import CiclosViewInfo from "../CiclosViewInfo";
import BtnRoxo from "../../BtnRoxo";
import { useCicleStore } from "@/stores/cicleStore";

export default function CiclosViewPerfil() {
  const { selectedCicle } = useCicleStore();
  return (
    <div className="bg-white relative flex flex-col items-center h-[440px] w-full">
      <div className="flex flex-col w-full items-center">
        <div className="flex h-[300px] w-full">
          <img
            src="/images/PerfilBanner.png"
            className="object-cover object-center h-full w-full"
            alt="PerfilBanner"
          />
        </div>
        <div className="lg:absolute rounded-xl overflow-hidden border-4 shadow-2xl border-white -mt-24 lg:-mt-0 lg:top-[240px] lg:left-[10%] w-[230px] h-[200px]">
          <img
            src={selectedCicle?.thumbnail}
            draggable={false}
            className="w-full h-full shadow-2xl"
            alt="vaquinha2"
          />
        </div>
        <div className="flex flex-col lg:mx-[calc(10%+250px)] lg:pl-[35%] hd:pl-[30%] xl:pl-[30%] 2xl:pl-[25%] w-full lg:h-[100px] lg:px-[10%] px-4">
          <h1 className="text-black text-[30px] font-bold leading-normal tracking-wider mt-[10px]">
            {selectedCicle?.description}
          </h1>
          <div className="border-b-[1px] border-[#252525] border-opacity-25 w-[90%] lg:hidden block mb-4" />
          <div className="flex flex-col lg:flex-row w-full justify-between items-center">
            <CiclosViewInfo />
            <div className="border-b-[1px] border-[#252525] border-opacity-25 w-full lg:hidden block my-4" />
            <a
              href={`/auction/${selectedCicle?.cycleId}`}
              className="hidden lg:flex w-full lg:w-[25%] h-[56px]"
            >
              <BtnRoxo>VISUALIZAR LEILÃO</BtnRoxo>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
