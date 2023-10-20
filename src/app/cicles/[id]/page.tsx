"use client";
import CiclosViewPerfil from "@/Components/Ciclos/CiclosViewPerfil";
import ProgressBar from "@/Components/ProgressBar";
import SearchBar from "@/Components/SearchBar";
import BtnRoxo from "@/Components/BtnRoxo";
import { useCicleStore } from "@/stores/cicleStore";
import { useEffect } from "react";
import { StorageHelper } from "@/helpers";
import { ICiclo } from "@/interfaces";
import { useGetUSDT } from "@/hooks/useGetUSDT";
import { NFTService } from "@/services";
import { useNFTStore } from "@/stores/nftStore";
import NFTCard from "@/Components/NFTCard";
import LoadingScreen from "@/Components/LoadingScreen";

export default function CiclesId({ params }: { params: { id: string } }) {
  const { setSelectedCicle, selectedCicle } = useCicleStore();
  const { setNFTs, NFTs } = useNFTStore();
  const { price } = useGetUSDT();

  useEffect(() => {
    async function getAlls() {
      try {
        const cicles: ICiclo[] = StorageHelper.getItem("cicles");
        const cicle = cicles.find((e) => e.cycleId === Number(params.id));
        setSelectedCicle(cicle!);
        const nftAll = StorageHelper.getItem("nfts");
        if (nftAll) setNFTs(nftAll);
        const nfts = await NFTService.getAllNFT();
        const cyclesNFT = nfts.filter((e) => e.cycleId === Number(params.id));
        StorageHelper.setItem("nfts", cyclesNFT);
        setNFTs(cyclesNFT);
      } catch (error) {
        console.log(error);
      }
    }
    getAlls();
  }, [params]);

  const totalValue = Number(selectedCicle?.totalValue).toLocaleString("pt-BR");
  const totalValueBRL = (
    Number(selectedCicle?.totalValue) * price
  ).toLocaleString("pt-BR");

  if (!selectedCicle) return <LoadingScreen />;

  return (
    <div className="flex items-center flex-col bg-white pb-20">
      <CiclosViewPerfil />
      <div className="flex flex-col relative w-full px-4 lg:px-[10%] mt-[12rem] lg:mt-[20px] pb-[20px]">
        <div className="border-b-[1px] border-[#252525] hidden lg:block border-opacity-25 w-full my-4" />
        <ProgressBar
          status={selectedCicle.percentage}
          curValue={totalValue}
          curValueBRL={totalValueBRL}
        />
        <div className="border-b-[1px] border-[#252525] border-opacity-25 w-full my-4" />
        <a
          href={`/auction/${selectedCicle?.cycleId}`}
          className="lg:hidden flex w-full lg:w-[25%] h-[50px]"
        >
          <BtnRoxo>VISUALIZAR LEILÃO</BtnRoxo>
        </a>
        <div className="border-b-[1px] border-[#252525] lg:hidden block border-opacity-25 w-full my-4" />
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {NFTs.map((e, i) => {
            return <NFTCard key={i} item={e} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
