'use client'
import { useState } from "react";
import ArrowDown from "../Icons/ArrowDown";
import IdCard from "../Icons/IdCard";

export function Details(){
  const [open, setOpen] = useState(false)
  
  return(
    <div className="flex items-center justify-between mt-[15px] p-3 px-4 w-full bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out">
            <div  onClick={() => setOpen(!open)} className="flex items-center justify-between w-full cursor-pointer">
              <div className="flex items-center gap-2">
                <IdCard/>
                <h1 className="text-black font-Archivo text-18 font-semibold leading-normal">Detalhes</h1>
              </div>
              <ArrowDown/>
            </div>
    </div>
  )
}