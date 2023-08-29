import ArrowDown from "../Icons/ArrowDown";
import Circle from "../Icons/Circle";
import IdCard from "../Icons/IdCard";

export default function DetalhesVaca(){
  

  return(
    <div className="flex flex-col w-full bg-white">

      <div className="flex flex-col items-center">

        <div className="flex w-full items-center rounded-lg shadow-2xl">
        <div className="absolute flex items-center gap-2 top-0 left-0 p-2 pl-3">
            <h1 className=" text-white font-semibold">AO VIVO</h1>
            <Circle/>         
        </div>

          <div className="flex w-full">
            <img src="/images/vaquinha3.png" className="rounded-lg h-full w-full" alt="" />
          </div>

        </div>

        <div className="flex items-center justify-between mt-[15px] p-3 px-4 w-full bg-white rounded-lg shadow-2xl">

            <div className="flex items-center gap-2">
              <IdCard/>
              <h1 className="text-black font-Archivo text-18 font-semibold leading-normal">Detalhes</h1>
            </div>

            <ArrowDown/>
          
        </div>

      </div>

    </div>
  )
}