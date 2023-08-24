import CiclosViewPerfil from "@/Components/CiclosViewPerfil";
import ModalRetirarGanhos from "@/Components/ModalRetirarGanhos";
import PerfilUsuario from "@/Components/PerfilUsuario";
import ProgressBar from "@/Components/ProgressBar";
import SearchBar from "@/Components/SearchBar";

export default function Usuario() {
  return (
    <div className="flex items-center flex-col bg-white w-full h-full">

      <div className="flex flex-col items-center w-full">
        <PerfilUsuario></PerfilUsuario>

        <div className="flex items-center w-full">
          <div className="flex gap-28 w-full ml-[400px] mr-4 my-8 shadow-2xl px-20 rounded-md border-[1px] border-black border-opacity-10 ">
            <div className="flex items-center justify-center hover:rounded-b-sm border-b-[3px] border-white hover:border-b-[3px] hover:border-[#B338FF] p-4 cursor-pointer w-[20%] h-[50px]">
              <h1 className="text-black font-Archivo text-20 font-normal leading-normal">
                Minhas NFTs
              </h1>
            </div>
          </div>
        </div>

      </div>


    <ModalRetirarGanhos></ModalRetirarGanhos>
    </div>
  );
}