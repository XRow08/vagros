import BtnRoxo from "../BtnRoxo";
import Card1Item from "../Card1/Card1Item";
import Diamond from "../Icons/Diamond";
import Grafico1 from "../Icons/Grafico1";
import Grafico2 from "../Icons/Grafico2";
import Relogio from "../Icons/Relogio";
import ProgressBar from "../ProgressBar";

export default function CiclosViewInfoSection() {
  return (
    <div className="flex flex-col w-[60%] h-[470px] bg-white rounded-lg p-5  shadow-lg">
      <div className="flex flex-col gap-4 w-full h-full">
        
        <h1 className="text-black font-Archivo text-2xl font-bold leading-normal tracking-wider">Vagros 1° stake ciclo de produção</h1>

        <div className="flex gap-20">

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico1 />
              </div>
              <Card1Item />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico2 />
              </div>
              <Card1Item />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Diamond />
              </div>
              <Card1Item />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Relogio />
              </div>
              <Card1Item />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico1 />
              </div>
              <Card1Item />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-[50%] w-fit p-2 shadow-xl">
                <Grafico2 />
              </div>
              <Card1Item />
            </div>
          </div>

        </div>

        <ProgressBar></ProgressBar>


        <div className="flex items-center justify-between">

          <div className="flex flex-col w-[40%]">
            
            <div className="flex items-center gap-2 justify-between w-full">

              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">

                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                  3
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  dias
                </h2>

              </div>

              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                  5
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  horas
                </h2>
              </div>

              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                  20
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  min
                </h2>
              </div>

              <div className="flex flex-col items-center bg-white rounded-md w-[30%] pt-[2%] pb-[2%] bg-opacity-40 backdrop-blur-md shadow-xl">
                <h1 className="text-black font-Archivo text-base font-normal leading-normal tracking-wider">
                  53
                </h1>
                <h2 className="text-black font-Archivo text-xs font-normal leading-normal tracking-wider">
                  seg
                </h2>
              </div>

            </div>

          </div>

          <div className="flex w-[40%]">
            <BtnRoxo>PARTICIPAR DO CICLO</BtnRoxo>
          </div>
          
        </div>

      </div>
    </div>
  );
}
