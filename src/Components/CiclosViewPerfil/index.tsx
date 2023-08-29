import Image from "next/image";
import CiclosViewInfo from "../CiclosViewInfo";
import BtnRoxo from "../BtnRoxo";

export default function CiclosViewPerfil() {
  return (
    <div className="bg-white relative flex flex-col items-center h-[440px] w-full">
      <div className="flex flex-col w-full">

        <div className="flex h-[300px] w-full">
          <img
            src="/images/PerfilBanner.png"
            className="cover h-full w-full"
            alt=""
          />
        </div>

        <div className="flex absolute rounded-xl border-4 shadow-2xl border-white top-[200px] left-[5%] w-[230px] h-[200px]">
          <img
            src="/images/vaquinha2.png"
            className="rounded-xl w-full h-full shadow-2xl"
            alt=""
          />
        </div>

        <div className="w-full justify-between">

          <div className="flex flex-col ml-[5%] md:ml-[350px] mr-[5%] h-[100px]">
            
            <h1 className="text-black font-archivo text-2xl font-bold leading-normal tracking-wider mt-[10px]">
              Vagros 1° stake ciclo de produção
            </h1>

            <div className="flex w-full justify-between items-center">
              <CiclosViewInfo />

              <div className="flex w-[30%] h-[50px]">
                <BtnRoxo>VISUALIZAR LEILÃO</BtnRoxo>
              </div>
            </div>

          </div>

        </div>


      </div>
      <div className="border-b-[1px] w-[90%] border-[#252525] border-opacity-25 w-7/10 mx-auto absolute bottom-0"></div>
      
    </div>
  );
}
