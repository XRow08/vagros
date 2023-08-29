import Circle from "../Icons/Circle";
import { Details } from "./Details";

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

        <Details></Details>

      </div>

    </div>
  )
}