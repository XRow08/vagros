'use client'
import { useState } from "react";
import ArrowDown from "../Icons/ArrowDown";
import IdCard from "../Icons/IdCard";
import Books from "../Icons/Books";

export function Details(){
  const [open, setOpen] = useState(false)
  
  
  const estado1= "flex flex-col items-center justify-between mt-[15px] p-3 px-4 w-full bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out"
  const estado2= "flex flex-col items-center justify-between mt-[15px] p-3 px-4 w-full h-[300px] bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out"
  
  return(
    <div className={open ? estado1 : estado2}>
            <div  onClick={() => setOpen(!open)} className="flex items-center justify-between w-full cursor-pointer">
              <div className="flex items-center gap-2">
                <IdCard/>
                <h1 className="text-black font-Archivo text-18 font-semibold leading-normal">Detalhes</h1>
              </div>
              <div className={open ? "rotate-180": ""}><ArrowDown/></div>
            </div>

            <span className="w-full h-full">
              {
                !open ? (
                  <div className="grid grid-cols-2 w-full h-full mt-[20px]">
                    <div>
                      <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">Contract address</h1>
                      <div className="flex gap-2">
                        <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">0x60...a7c6</h1>
                        <Books/>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">Token ID</h1>
                      <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">9241</h1>
                    </div>

                    <div>
                      <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">Token standard</h1>
                      <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">ERC721</h1>
                    </div>

                    <div>
                      <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">Blockchain</h1>
                      <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">Polygon</h1>
                    </div>

                    <div>
                      <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">Token supply</h1>
                      <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">1x50...d8c9</h1>
                    </div>

                    <div>
                      <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">Creator</h1>
                      <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">0321...x131</h1>
                    </div>

                  </div>
                ) : ""
              }
            </span>
    </div>
  )
}