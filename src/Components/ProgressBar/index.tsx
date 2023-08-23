export default function ProgressBar(){
  return(
    <div className="flex flex-col relative items-center w-full bg-white">
      <div className="flex flex-col w-full">

        <div className="flex justify-between mb-1 text-black">
          <span className="text-base font-medium">Status: <span className="text-sm font-medium">61.75%</span></span>
          <span className="text-sm font-medium">R$ 250.000,00</span>
        </div>

        <div className="w-full rounded-sm bg-[#DFDFDF] h-[20px] shadow-2xl">
          <div className="bg-gradient-to-r rounded-sm from-yellow-300 to-orange-500 h-full w-[61.75%]"></div>
        </div>

        <div className="flex flex-col items-end w-full">
          <span className="text-sm text-black font-medium ">Volume total</span>
        </div>
        
      </div>
      
    </div>
  )
}