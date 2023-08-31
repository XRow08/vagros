'use client'
import Link from "next/link";
import BtnRoxo from "../BtnRoxo";
import X from "../Icons/X";
import { useModalStore } from "@/stores";


export default function ModalRetirarGanhos() {
  const data = {
    usdtPrice: "477.00",
    brlPrice: "100.00",
  }

  const { setShowModalRetirarGanhos } = useModalStore()


  return (
   

      <div className="flex flex-col items-center w-full h-full ">
        <div className="flex flex-col items-center inset-1  w-[550px]  gap-4 px-4 pb-10 rounded-lg border-[2px] border-gray-300 bg-white text-black shadow-xl">

          <div className="flex w-full items-center justify-between pt-4">
            <h1 className="text-black font-Archivo text-lg font-bold tracking-wider leading-normal">Retirar os meus ganhos</h1>
            <X onClick={() => setShowModalRetirarGanhos(false)}/>
          </div>

          
          <div className="flex flex-col w-full border-[1px] gap-2 border-gray-300 px-4 py-2 rounded-lg">
            <h1 className="text-black font-Archivo text-sm font-bold tracking-wide leading-normal  letter-spacing-1">Disponível para saque:</h1>
            <div className="flex items-center gap-4 border-y-[1px] border-gray-300 py-8">
              <div className="flex items-center gap-2">
                <h1 className="text-black font-Archivo text-2xl font-bold tracking-wide leading-normal letter-spacing-1.75">USDT: $ {data.usdtPrice}</h1>
                <img src="/images/usdt.png" alt="" />
              </div>

              <div className="flex items-center gap-2">
                <h1 className="text-black font-Archivo text-md font-normal tracking-wide leading-normal letter-spacing-1">(BRL: R$ {data.brlPrice})</h1>
                <img src="/images/brl.png" alt="" />
              </div>
            </div>

            <div className="flex w-[50%] h-[50px] my-2 cursor-pointer">
              <BtnRoxo>RETIRAR FUNDOS</BtnRoxo>
            </div>
          </div>



        </div>
      </div>

    
  )
}