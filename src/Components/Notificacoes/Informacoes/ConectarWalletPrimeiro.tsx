import I from "@/Components/Icons/I";

export default function ConectarWalletPrimeiro(){
  return(
    <div className="flex items-center gap-5 bg-black bg-opacity-20 w-[400px] border-l-[3px] border-[#00E0FF] p-2 pl-4 py-4 rounded-r-md">
      <div className="flex items-center justify-center bg-[#00E0FF] rounded-[50%] w-[50px] h-[50px]">
        <I></I>
      </div>

      <div>
        <h1 className="text-white font-Archivo text-18 font-bold tracking-wider leading-normal letter-spacing-0.9">Info</h1>
        <h1 className="text-white font-Archivo text-16 font-normal tracking-wide leading-normal letter-spacing-0.8">Você deve conectar sua wallet primeiro</h1>
      </div>

    </div>
  )
}