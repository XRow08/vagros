"use client";
import CiclosViewPerfil from "@/Components/Ciclos/CiclosViewPerfil";
import ProgressBar from "@/Components/ProgressBar";
import SearchBar from "@/Components/SearchBar";
import BtnRoxo from "@/Components/BtnRoxo";
import { useCicleStore } from "@/stores/cicleStore";
import { useEffect } from "react";
import { StorageHelper } from "@/helpers";
import { ICiclo } from "@/interfaces";

export default function CiclesId({ params }: { params: { id: string } }) {
  const { setSelectedCicle, selectedCicle } = useCicleStore();

  useEffect(() => {
    const cicles: ICiclo[] = StorageHelper.getItem("cicles");
    const cicle = cicles.find((e) => e.id === params.id);
    setSelectedCicle(cicle!);
  }, [params]);

  return (
    <div className="flex items-center flex-col bg-white pb-20">
      <CiclosViewPerfil />
      <div className="flex flex-col relative w-full px-4 lg:px-[10%] mt-[12rem] lg:mt-[20px] pb-[20px]">
        <div className="border-b-[1px] border-[#252525] hidden lg:block border-opacity-25 w-full my-4" />
        <ProgressBar />
        <div className="border-b-[1px] border-[#252525] border-opacity-25 w-full my-4" />
        <a
          href={`/auction/${selectedCicle?.id}`}
          className="lg:hidden flex w-full lg:w-[25%] h-[50px]"
        >
          <BtnRoxo>VISUALIZAR LEILÃO</BtnRoxo>
        </a>
        <div className="border-b-[1px] border-[#252525] lg:hidden block border-opacity-25 w-full my-4" />
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {/* {cicles.map((item, index) => {
            return <NFTCard key={index} item={item} />;
          })} */}
        </div>
      </div>
    </div>
  );
}
