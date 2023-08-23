import CiclosSection from "../CiclosSection";

export default function HomeFirstSection() {
  return (
    <div className="flex flex-col w-full bg-white shadow-xl ">
      <div className="flex flex-col items-center  ">
        <div className="flex items-center gap-96 justify-between">
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
      </div>

      <div className="flex flex-col items-center m-10 ">
        <div className="flex items-center gap-7 justify-between">
          <CiclosSection />
        </div>
      </div>
    </div>
  );
}
