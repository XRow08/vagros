"use client";
import Card3 from "@/Components/Card3";
import Card3Withdraw from "@/Components/Card3Withdraw";
import { Chart } from "@/Components/Chart";
import BolaQuadrado from "@/Components/Icons/BolaQuadrado";
import CircleYang from "@/Components/Icons/CircleYang";
import BtnPerfil from "@/Components/PerfilUsuario/BtnPerfil";
import { useModalStore } from "@/stores";
import { useState } from "react";

export default function Usuario() {
  const [activeCycles, setActiveCycles] = useState(true);
  const [activeDashboard, setActiveDashboard] = useState(false);
  const [enterCycles, setEnterCycles] = useState(false);
  const [enterDashboard, setEnterDashboard] = useState(false);

  const { setShowModalEditarPerfil } = useModalStore();

  const nome = "Alice Alves";

  const rendimentos = {
    fornecimento: "125.000,00",
    ganhos: "50.000,00",
    stake: "100.000,00",
    totalRetirada: "25.000,00",
  };

  const data = [
    {
      nftName: "Nelore#2540",
      priceUsdt: "20",
      priceBrl: "100",
      address: "cro41.....9012",
      date: {
        days: "3",
        hours: "5",
        mins: "20",
        segs: "53",
      },
    },
    {
      nftName: "Nelore#2540",
      priceUsdt: "20",
      priceBrl: "100",
      address: "cro41.....9012",
      date: {
        days: "3",
        hours: "5",
        mins: "20",
        segs: "53",
      },
    },
    {
      nftName: "Nelore#2540",
      priceUsdt: "20",
      priceBrl: "100",
      address: "cro41.....9012",
      date: {
        days: "3",
        hours: "5",
        mins: "20",
        segs: "53",
      },
    },
  ];

  return (
    <div className="flex items-center flex-col bg-white w-full min-h-screen">
      <div className="flex flex-col items-center w-full">
        <div className="bg-white relative flex flex-col items-center w-full">
          <div className="flex flex-col w-full">
            <div className="flex relative bg-[url('/images/PerfilBanner.jpg')] bg-cover bg-center h-[300px] w-full shadow-2xl">
              <div
                onClick={() => setShowModalEditarPerfil(true)}
                className="flex items-center justify-end absolute bottom-0 w-full h-[50px] bg-black bg-opacity-40"
              >
                <div className="bg-white p-1 px-6 rounded-md mr-4 cursor-pointer">
                  <h1 className="text-black font-Archivo text-sm font-semibold tracking-wide leading-normal">
                    EDITAR PERFIL
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between pt-6 pb-8 gap-2 absolute rounded-xl border-black border-opacity-10 border-[1px] shadow-2xl  bg-white top-[160px] left-20 w-[300px] ">
              <div className="flex flex-col shadow-2xl items-center rounded-[50%] border-[3px] border-white w-[130px] h-[130px] bg-[url('/images/PerfilFoto.jpg')] bg-cover bg-center"></div>

              <div className="flex justify-center border-black border-opacity-20 pt-1 pb-3 border-b-[1px] w-[90%]">
                <h1 className="text-black font-Archivo text-xl font-medium tracking-wide leading-normal letter-spacing-1">
                  {nome}
                </h1>
              </div>

              <div className="flex flex-col mt-[5px] w-[90%] gap-4">
                <div
                  onMouseEnter={() => setEnterCycles(true)}
                  onMouseLeave={() => setEnterCycles(false)}
                  onClick={() => {
                    if (setActiveDashboard) {
                      setActiveDashboard(false);
                      setActiveCycles(false);
                    }
                    setActiveCycles(true);
                  }}
                  className="flex h-[40px] cursor-pointer"
                >
                  <BtnPerfil state={activeCycles}>
                    <div className="flex gap-2">
                      <CircleYang
                        color={
                          activeCycles
                            ? "white"
                            : enterCycles
                            ? "white"
                            : "black"
                        }
                      />
                      <h1 className=" font-Archivo text-md font-bold leading-normal">
                        MEUS CICLOS
                      </h1>
                    </div>
                  </BtnPerfil>
                </div>

                <div
                  onMouseEnter={() => setEnterDashboard(true)}
                  onMouseLeave={() => setEnterDashboard(false)}
                  onClick={() => {
                    if (activeCycles) {
                      setActiveCycles(false);
                    }
                    setActiveDashboard(true);
                  }}
                  className="flex h-[40px] cursor-pointer "
                >
                  <BtnPerfil state={activeDashboard}>
                    <div className="flex w-full h-full gap-2">
                      <BolaQuadrado
                        color={
                          activeDashboard
                            ? "white"
                            : enterDashboard
                            ? "white"
                            : "black"
                        }
                      />
                      <h1 className="font-Archivo text-md font-bold leading-normal">
                        DASHBOARD
                      </h1>
                    </div>
                  </BtnPerfil>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full">
          <div className="flex flex-col gap-28 w-full ml-[400px] mr-4 my-8 shadow-2xl px-20 rounded-md border-[1px] border-black border-opacity-10 ">
            <div className="flex items-center justify-center hover:rounded-b-sm border-b-[3px] border-[#B338FF] p-4 cursor-pointer w-[200px] h-[50px]">
              <h1 className="text-black font-Archivo text-20 font-semibold leading-normal">
                {activeCycles ? "Meus ciclos" : "Meus rendimentos"}
              </h1>
            </div>
          </div>
        </div>
        {activeCycles ? (
          <div className="grid grid-cols-3 gap-5 w-3/4 pl-[400px] pr-4 items-center pb-[30px]">
            <Card3Withdraw />
            <Card3Withdraw />
            <Card3Withdraw />
            {data.map((item, index) => {
              return <Card3 key={index} item={item} />;
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <div className="w-full">
              <div className="flex items-center justify-between px-4 2xl:px-16 h-[100px] ml-[400px] mr-4 gap-4 2xl:gap-14 mb-8 shadow-2xl rounded-md border-[1px] border-black border-opacity-10">
                <div className="flex items-center pl-6 pr-6 bg-gradient-to-r from-[#FF6B00] to-[#FF9C27] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
                  <div className="flex flex-col">
                    <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">
                      Fornecimento total
                    </h1>
                    <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">
                      USDT {rendimentos.fornecimento}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 bg-gradient-to-r from-[#0057D9]  to-[#02D1FF] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
                  <div className="flex flex-col">
                    <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">
                      Ganhos após ciclos
                    </h1>
                    <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">
                      USDT {rendimentos.ganhos}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-6 pr-6 bg-gradient-to-r from-[#3200C0]  to-[#06F] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
                  <div className="flex flex-col">
                    <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">
                      Stake ciclo bloqueado
                    </h1>
                    <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">
                      USDT {rendimentos.stake}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center pl-4 pr-6 bg-gradient-to-r from-[#007B1B]  to-[#06D50E] rounded-lg border-white border-[2px] shadow-lg h-[80%] w-[25%]">
                  <div className="flex flex-col">
                    <h1 className="text-white font-Archivo text-sm font-normal leading-normal tracking-wide letter-spacing-0.8">
                      Total para retirada
                    </h1>
                    <h1 className="text-white font-Archivo text-lg font-bold tracking-wide leading-normal letter-spacing-1.05">
                      USDT {rendimentos.totalRetirada}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[400px] w-full pr-4 mb-[10rem]">
              <Chart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
