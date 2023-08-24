import CiclosViewPerfil from "@/Components/CiclosViewPerfil";
import PerfilUsuario from "@/Components/PerfilUsuario";
import ProgressBar from "@/Components/ProgressBar";
import SearchBar from "@/Components/SearchBar";

export default function Usuario() {
  return (
    <div className="flex items-center flex-col bg-white w-full h-full">

      <div className="flex flex-col items-center w-full">
        <PerfilUsuario></PerfilUsuario>

        <div className="flex items-center w-full">
          <div className="flex gap-28 w-full ml-[400px] mr-4 mt-8 shadow-2xl px-20 rounded-md border-[1px] border-black border-opacity-10 ">
            <div className="flex items-center justify-center hover:rounded-b-sm border-b-[3px] border-white hover:border-b-[3px] hover:border-[#B338FF] p-4 cursor-pointer w-[30%] h-[50px]">
              <h1 className="text-black font-Archivo text-20 font-normal leading-normal">
                Meus rendimentos
              </h1>
            </div>
          </div> 
        </div>


        <div className="flex items-center w-full">
          <div className="flex items-center justify-between px-4 w-full h-[100px] ml-[400px] mr-4 gap-2 mt-8 mb-8 shadow-2xl rounded-md border-[1px] border-black border-opacity-10">

            <div className="flex items-center pl-4 pr-8 bg-gradient-to-r from-[#FF6B00] to-[#FF9C27] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
              <div className="flex flex-col">
                <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">Fornecimento total</h1>
                <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">USDT 125.000,00</h1>
              </div>
            </div>

            <div className="flex items-center pl-4 pr-8 bg-gradient-to-r from-[#0057D9]  to-[#02D1FF] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
              <div className="flex flex-col">
                <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">Ganhos após ciclos</h1>
                <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">USDT 50.000,00</h1>
              </div>
            </div>

            <div className="flex items-center pl-4 pr-8 bg-gradient-to-r from-[#3200C0]  to-[#06F] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
              <div className="flex flex-col">
                <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">Stake ciclo bloqueado</h1>
                <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">USDT 100.000,00</h1>
              </div>
            </div>

            <div className="flex items-center pl-4 pr-8 bg-gradient-to-r from-[#007B1B]  to-[#06D50E] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
              <div className="flex flex-col">
                <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">Total para retirada</h1>
                <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">USDT 25.000,00</h1>
              </div>
            </div>

          </div> 
        </div>


      </div>

    </div>
  );
}
