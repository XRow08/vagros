'use client'
import Link from "next/link";
import BtnRoxo from "../BtnRoxo";
import X from "../Icons/X";
import { useModalStore } from "@/stores";


export default function ModalComprarCotas() {
  const { setShowModalComprarCotas } = useModalStore()

  return (
    

      <div className="flex flex-col items-center w-full h-full">
        <div className="flex flex-col items-center inset-1  w-[450px] h-[330px] rounded-lg border-[2px] border-gray-300 bg-white text-black shadow-xl">

          <div className="flex w-full items-center justify-between px-8 pt-8">
            <h1 className="text-black font-Archivo text-xl font-bold tracking-wider leading-normal">Stake ciclo</h1>
            <X onClick={() => setShowModalComprarCotas(false)}/>
          </div>

          
          <div className="flex relative border-b border-gray-300 mt-[30px] items-center p-2 rounded">   
              <input
                type="number"
                className="text-center text-black font-Archivo text-xl font-semibold leading-normal tracking-wider w-full flex-grow outline-none"
                onWheel={(e) => e.currentTarget.blur()}
                placeholder=" "
              />
              <span className="absolute right-1 px-2 font-semibold">Amount</span>        

          </div>
          

          <div className="flex flex-col items-center w-full">

            <div className="flex flex-col border-2 w-[50%] p-4 py-2 items-center rounded-lg my-[20px] shadow-lg border-gray-300">
              <div className="flex gap-3">
                <h1>BRL:</h1>
                <span className="text-green-700 text-bold">R$ 1.500.00</span>
              </div>
              <div className="flex gap-3">
                <h1>USDT:</h1>
                <span className="text-green-700 text-bold">$ 1.500.00</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col items-center text-white w-full">
            <div className="flex flex-col shadow-xl w-[50%] h-[40px]">
              <div className="w-full h-full">
                <Link href="">
                  <BtnRoxo>SUPPLY USDT</BtnRoxo>
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>

    
  )
}