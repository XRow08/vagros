import BtnRoxo from "@/Components/BtnRoxo";
import YellowWord from "@/Components/YellowWord";

export default function Parceiros() {
  return (
    <div className=" flex flex-col items-center fixed w-screen h-screen inset-0 bg-[url('/images/ParceirosBanner.png')] bg-cover bg-center backdrop-filter backdrop-blur-md">
      <div className="flex flex-col items-center w-[70%] h-full">

        <div className="flex items-center justify-between text-white mt-[150px]">

          <div className="flex flex-col gap-3 w-[50%]">
            <h1 className="text-white font-Archivo font-bold text-3xl leading-normal tracking-wider">CONECTE-SE COM A <YellowWord>VAGROS</YellowWord> E REALIZE SEU LEILÃO</h1>
            <p className="text-white font-Archivo text-sm font-normal leading-normal tracking-wider">
              Com tecnologia blockchain apresentamos seu rebanho para o mundo.
              Junte-se a nós e descubra como nossa plataforma pode transformar
              sua atividade agropecuária.
            </p>
          </div>

          <div className="flex flex-col items-center w-[350px] h-[350px]">

            <div className="flex flex-col relative items-center w-full h-full">
              <img src="/images/FotoPessoa.png" className="w-full h-full" alt="" />
              <h1 className="absolute bottom-3 text-white font-Archivo text-xl font-semibold leading-normal tracking-wide">ÁREA DO PRODUTOR</h1>
            </div>

            <div className="flex flex-col items-center bg-[#212121] w-full h-full mt-4">
              <div className="flex w-[90%]">
                <BtnRoxo><h1 className="text-white font-Archivo text-sm leading-normal">LEILOAR MEU REBANHO</h1></BtnRoxo>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
