"use client"
import DetalhesVaca from "@/Components/DetalhesVaca";
import NftData from "@/Components/NftData";
const Chart = dynamic(() =>
  import("@/Components/Chart").then((mod) => mod.Chart)
);
import NFTCard from "@/Components/NFTCard";
import dynamic from "next/dynamic";

export default function NftView() {
  const nftData = {
    name: "Nelore#2435",
    usdtPrice: "477.00",
    brlPrice: "100.00",
    date: {
      days: "3",
      hours: "5",
      mins: "20",
      segs: "53",
    },
  };
  const data = [
    {
      id: "1",
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
    <div className="flex flex-col items-center w-full h-full bg-white px-[10%] py-40">
      <div className="flex justify-center gap-14 w-full h-full">
        <div className="w-full">
          <DetalhesVaca />
        </div>

        <div className="w-full space-y-6">
          <NftData item={nftData} />
          <Chart />
        </div>
      </div>

      <div className="flex flex-col w-full gap-3 mt-4">
        <h1 className="text-black text-xl font-bold tracking-wide leading-normal letter-spacing-1.5">
          Explorar Ciclo
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {data.map((item, index) => {
            return <NFTCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
