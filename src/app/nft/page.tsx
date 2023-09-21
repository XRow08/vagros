import DetalhesVaca from "@/Components/DetalhesVaca";
import NftData from "@/Components/NftData";
import Card3 from "@/Components/Card3";
import { Chart } from "@/Components/Chart";

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
    <div className="flex flex-col items-center w-full h-full bg-white px-[10%]">
      <div className="flex flex-col items-center gap-20 justify-between my-[10rem]">
        <div className="flex justify-center gap-14 w-full h-full">
          <div className="w-[40%]">
            <DetalhesVaca />
          </div>

          <div className="w-[60%] space-y-6">
            <NftData item={nftData} />
            <Chart />
          </div>
        </div>

        <div className="flex flex-col w-full gap-3 bg-white">
          <h1 className="text-black font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.5">
            Explorar Ciclo
          </h1>
          <div className="flex justify-center items-center w-full gap-12">
            {data.map((item, index) => {
              return <Card3 key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
