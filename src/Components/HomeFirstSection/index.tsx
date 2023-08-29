import CiclosSection from "../CiclosSection";

export default function HomeFirstSection() {
  return (
    <div className="flex flex-col items-center w-full bg-white shadow-xl z-40">

      <div className="flex flex-col items-center w-[90%] ">

        <div className="flex w-full items-center gap-96 justify-between">
          
          <div>
            <h1 className="text-black font-archivo text-2xl font-bold tracking-wider">
              Novos ciclos disponíveis
            </h1>
            <h2 className="text-black font-archivo text-base font-normal leading-normal tracking-wider">
              Conheça os novos ciclos exclusivos da Vagros
            </h2>
          </div>
          <div>
            <h2 className="text-black font-archivo">Ver todos</h2>
          </div>

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
