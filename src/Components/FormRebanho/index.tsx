import BtnRoxo from "../BtnRoxo";
import Xwhite from "../Icons/Xwhite";

export default function FormRebanho(){
  return(
    <div className="flex flex-col items-center p-4 px-8 w-[800px]  bg-[#212121] rounded-lg shadow-lg ">
      <div className="flex flex-col gap-8 items-center w-full h-full">
        
          <div className="flex flex-col items-center relative w-full mt-[10px]">
              
              <h1 className="text-white font-Archivo text-xl font-semibold leading-normal tracking-wide">
              REBANHO A LEILOAR
              </h1>
              <div className="absolute right-0 top-3">
                <Xwhite></Xwhite>
              </div>    
          </div>

        <div className="flex flex-col w-full items-center gap-10 mb-[5px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex gap-10 w-full justify-center">
              <div className="flex flex-col gap-4 w-[50%]">
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Nome da fazenda"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="CNPJ"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Endereço"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Inscrição estadual"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Cidade"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Estado"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Chave pix"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="URL de um video de amostra do gado"
              />
          
              </div>
              <div className="flex flex-col gap-4 w-[50%]">
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Raça"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Sexo"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Quantidade"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Idade"
              />
              <input
                type="text"
                className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
                placeholder="Peso"
              />
              </div>
            </div>
          </div>
          <div className="flex w-[40%] cursor-pointer">
            <BtnRoxo>CONCLUIR E ENVIAR</BtnRoxo>
          </div>
        </div>

      </div>
    </div>
  )
}