"use client";
import AboutProject from "@/Components/AboutProject";
import CiclosViewInfoSection from "@/Components/Ciclos/CiclosViewInfoSection";
import DetalhesVaca from "@/Components/Ciclos/DetalhesVaca";
import LoadingScreen from "@/Components/LoadingScreen";
import { StorageHelper } from "@/helpers";
import { ICiclo } from "@/interfaces";
import { useCicleStore } from "@/stores/cicleStore";
import { useEffect } from "react";

export default function Auction({ params }: { params: { id: string } }) {
  const { setSelectedCicle, selectedCicle } = useCicleStore();

  useEffect(() => {
    const cicles: ICiclo[] = StorageHelper.getItem("cicles");
    const cicle = cicles.find((e) => e.id === params.id);
    setSelectedCicle(cicle!);
  }, [params]);

  if (!selectedCicle) return <LoadingScreen />;

  return (
    <div className="flex flex-col w-full pt-[10rem] bg-white px-[10%]">
      <div className="flex w-full gap-10">
        <DetalhesVaca cicle={selectedCicle} />
        <CiclosViewInfoSection item={selectedCicle} />
      </div>
      <AboutProject video={selectedCicle.video} />
    </div>
  );
}
