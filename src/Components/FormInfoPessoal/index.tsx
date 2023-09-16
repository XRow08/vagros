import Link from "next/link";
import BtnRoxo from "../BtnRoxo";
import Xwhite from "../Icons/Xwhite";

export default function FormInfoPessoal() {
  return (
    <div className="flex flex-col items-center p-4 w-[400px] h-[450px] bg-[#212121] rounded-lg shadow-lg ">
      <div className="flex flex-col justify-between items-center w-full h-full">

        <div className="flex flex-col items-center relative w-[90%] mt-[10px]">
          
            <h1 className="text-white font-Archivo text-25 font-semibold leading-normal tracking-wide">
              INFORMAÇÕES PESSOAIS
            </h1>
            <div className="absolute right-0 top-2">
              <Xwhite></Xwhite>
            </div>
          
        </div>

        <div className="flex flex-col gap-6 w-[90%] ">
          <input
            type="text"
            className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
            placeholder="Seu nome"
          />
          <input
            type="text"
            className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
            placeholder="Seu E-mail"
          />
          <input
            type="text"
            className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
            placeholder="Seu celular"
          />
          <input
            type="text"
            className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
            placeholder="Sua cidade"
          />
          <input
            type="text"
            className="w-full bg-transparent border-b p-1 border-[#4D4D4D] text-white placeholder-gray-300 focus:outline-none"
            placeholder="Seu estado"
          />
        </div>

        <div className="w-[65%] h-[50px]"> 
            <BtnRoxo>CONTINUAR</BtnRoxo>
        </div>
        
      </div>
    </div>
  );
}
