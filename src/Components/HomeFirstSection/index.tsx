import CiclosSection from "../Ciclos/CiclosSection";
import { Carroussel } from "./Carroussel";

export default function HomeFirstSection() {
  return (
    <div className="flex flex-col items-center w-full bg-white shadow-xl">
      <div className="flex flex-col items-center p-4 lg:p-0 lg:px-[10%] lg:-mt-[10rem]">
        <Carroussel />
        <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between border-b pb-2 border-black border-opacity-5 lg:mt-10">
          <div>
            <h1 className="text-black font-archivo text-xl lg:text-3xl font-bold tracking-wider">
              Novos ciclos disponíveis
            </h1>
            <h2 className="text-black font-archivo text-lg lg:text-xl font-normal leading-normal tracking-wider">
              Conheça os novos ciclos exclusivos da Vagros
            </h2>
          </div>
          <a href="/ciclos" className="text-black text-base text-end font-normal lg:text-xl font-archivo">
            Ver todos
          </a>
        </div>

        <div className="flex flex-col w-full items-center m-10 ">
          <div className="flex items-center justify-center w-full gap-7">
            <CiclosSection />
          </div>
        </div>
      </div>
    </div>
  );
}
