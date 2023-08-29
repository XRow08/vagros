import BtnRoxo from "../BtnRoxo";
import Wallet from "../Icons/Wallet";

export default function WithdrawalPanel(){
  return(
    <div className="flex flex-col w-full  bg-white rounded-lg p-5 shadow-2xl">
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex flex-col">
          <h1 className="text-black font-Archivo text-3xl font-bold tracking-wide leading-normal letter-spacing-1.5">
          Vagros 1° stake ciclo de produção
          </h1>
          <h1 className="text-black font-Archivo text-2xl font-bold tracking-wide leading-normal letter-spacing-1.5">
            Nelore#2435
          </h1>
          <div className="flex items-center justify-between w-[25%]">
            
          </div>
        </div>

        <div className="flex flex-col w-[95%] border-gray-200 rounded-sm border-[1px] px-5 py-3 mt-[15px]">
          <div className="flex pb-3">
            <h1 className="text-black font-Archivo text-sm font-bold tracking-wide leading-normal letter-spacing-1">Preço atual:</h1>
          </div>

          <div className="flex items-center gap-3 py-10 mb-3 border-y-[1px] border-gray-200">
            <h1 className="text-black font-Archivo text-3xl font-bold tracking-wide leading-normal letter-spacing-1.75">USDT: $ 477.00</h1>
            <h1 className="text-black font-Archivo text-md font-normal tracking-wide leading-normal letter-spacing-1">(BRL: R$ 100.00)</h1>
          </div>


          <div className="w-[30%] h-[50px]">
            <BtnRoxo>RETIRAR FUNDOS</BtnRoxo>
          </div>
        </div>

        <div className="flex gap-3">
          <Wallet></Wallet>
          <h1 className="text-black font-Archivo text-md font-semibold tracking-wide leading-normal letter-spacing-1">
          cro41.....9012
          </h1>
        </div>
      </div>
    </div>
  )
}