'use client'
import { useState } from "react";
import Link from "next/link";
import BtnBranco from "../BtnBranco";
import BtnRoxo from "../BtnRoxo";
import CiclosViewInfo from "../CiclosViewInfo";
import BolaQuadrado from "../Icons/BolaQuadrado";
import CircleYang from "../Icons/CircleYang";

export default function PerfilUsuario(){
  const [active, setActive] = useState(false)
  return(
    <div className="bg-white relative flex flex-col items-center w-full">
      <div className="flex flex-col w-full">

        <div className="flex relative bg-[url('/images/PerfilBanner.jpg')] bg-cover bg-center h-[300px] w-full shadow-2xl">
          
          <div className="flex items-center justify-end absolute bottom-0 w-full h-[50px] bg-black bg-opacity-40">
            <div className="bg-white p-1 px-6 rounded-md mr-4 cursor-pointer">
              <h1 className="text-black font-Archivo text-sm font-semibold tracking-wide leading-normal">EDITAR PERFIL</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-6 pb-8 gap-2 absolute rounded-xl border-black border-opacity-10 border-[1px] shadow-2xl  bg-white top-[160px] left-20 w-[300px] ">

          <div className="flex flex-col shadow-2xl items-center rounded-[50%] border-[3px] border-white w-[130px] h-[130px] bg-[url('/images/PerfilFoto.jpg')] bg-cover bg-center">
            
          </div>

          <div className="flex justify-center border-black border-opacity-20 pt-1 pb-3 border-b-[1px] w-[90%]">
            <h1 className="text-black font-Archivo text-xl font-medium tracking-wide leading-normal letter-spacing-1">Alice Alves</h1>
          </div>

          <div className="flex flex-col mt-[5px] w-[90%] gap-4">
            
            <Link href="/user">
              <div onClick={() => setActive(!active)} className="flex h-[40px] cursor-pointer">
                <BtnRoxo>
                  <div className="flex gap-2">
                    <CircleYang></CircleYang>
                    <h1 className="text-white font-Archivo text-md font-semibold leading-normal">MEUS CICLOS</h1>
                  </div>
                </BtnRoxo>
              </div>
            </Link>

            <Link href="/userIncome">
              <div onClick={() => setActive(active)} className="flex h-[40px] cursor-pointer">
                <BtnBranco>
                    <div className="flex gap-2">
                      <BolaQuadrado></BolaQuadrado>
                      <h1 className="text-black font-Archivo text-md font-bold leading-normal">DASHBOARD</h1>
                    </div>
                </BtnBranco>
              </div>
            </Link>
          </div>


        </div>
        
      </div> 
    </div>
  )
}