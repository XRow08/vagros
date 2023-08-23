import Link from "next/link";
import Diamond from "../Icons/Diamond";
import Grafico1 from "../Icons/Grafico1";
import Grafico2 from "../Icons/Grafico2";
import Relogio from "../Icons/Relogio";
import Card1Item from "./Card1Item";
import Circle from "../Icons/Circle";

export default function Card1(){
    return(
        <div className="flex flex-col justify-between rounded-xl shadow-2xl w-72 bg-white text-black ">

                

        <div className="relative">
        <img src="/images/card-img.png" alt="" className="w-full h-auto" /> 
        <div className="absolute flex items-center gap-2 top-0 left-0 p-2 pl-3">
            <h1 className=" text-white font-semibold">AO VIVO</h1>
            <Circle/>         
        </div>
        <img src="/images/Vicon.svg" alt="" className="absolute top-0 right-0 p-4" /> 
        </div>

                <div className="flex flex-col gap-3">
                    <div className="shadow-sm p-1 pl-2">
                        <h1 className="text-black font-archivo font-semibold text-18 leading-normal tracking-wide">Vagros 1 stake ciclo de produção</h1>
                    </div>
                    <div className="flex flex-col gap-2 ml-3">
                        <div className="flex items-center gap-2"><div className="bg-white rounded-[50%] w-fit p-2 shadow-xl"><Grafico1/></div><Card1Item/></div>
                        <div className="flex items-center gap-2"><div className="bg-white rounded-[50%] w-fit p-2 shadow-xl"><Grafico2/></div ><Card1Item/></div>
                        <div className="flex items-center gap-2"><div className="bg-white rounded-[50%] w-fit p-2 shadow-xl"><Diamond/></div><Card1Item/></div>
                        <div className="flex items-center gap-2"><div className="bg-white rounded-[50%] w-fit p-2 shadow-xl"><Relogio/></div><Card1Item/></div>
                    </div>
                    <Link href="/CiclosView">
                        <div className="h-[53px] bg-gradient-to-r from-yellow-300 to-orange-500 flex items-center justify-center rounded-bl-[8px] rounded-br-[8px]">
                        <h1 className="text-black font-archivo font-semibold text-18 leading-normal">DESCOBRIR MAIS</h1>
                        </div>
                    </Link>
                </div>
        </div>
            
        
    )
}