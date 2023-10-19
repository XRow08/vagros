"use client";
import type { ICiclo, INFT } from "@/interfaces";
import DetalhesVaca from "@/Components/Ciclos/DetalhesVaca";
import NftData from "@/Components/NftData";
const Chart = dynamic(() =>
  import("@/Components/Chart").then((mod) => mod.Chart)
);
import { StorageHelper } from "@/helpers";
import { useCicleStore } from "@/stores/cicleStore";
import { useNFTStore } from "@/stores/nftStore";
import { useEffect } from "react";
import LoadingScreen from "@/Components/LoadingScreen";
import dynamic from "next/dynamic";

export default function NftView({ params }: { params: { id: string } }) {
  const { selectedCicle, setSelectedCicle } = useCicleStore();
  const { selectedNFT, setSelectedNFT } = useNFTStore();

  useEffect(() => {
    async function getAlls() {
      try {
        const nftAll: INFT[] = await StorageHelper.getItem("nfts");
        const ciclesAll: ICiclo[] = await StorageHelper.getItem("cicles");
        const nft = nftAll.find((e) => e.tokenId === Number(params.id));
        const cicle = ciclesAll.find((e) => e.cycleId === nft?.cycleId);
        setSelectedCicle(cicle!);
        setSelectedNFT(nft!);
      } catch (error) {
        console.log(error);
      }
    }
    getAlls();
  }, [params]);

  if (!selectedNFT || !selectedCicle) return <LoadingScreen />;

  return (
    <div className="flex flex-col items-center w-full h-full bg-white px-[10%] py-40">
      <div className="flex justify-center gap-14 w-full h-full">
        <DetalhesVaca cicle={selectedCicle} />

        <div className="w-full space-y-6">
          <NftData cicle={selectedCicle} item={selectedNFT} />
          <Chart />
        </div>
      </div>
    </div>
  );
}
