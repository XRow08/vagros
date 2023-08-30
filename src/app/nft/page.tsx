import DetalhesVaca from "@/Components/DetalhesVaca";
import NftChart from "@/Components/NftChart";
import NftData from "@/Components/NftData";
import Card3 from "@/Components/Card3";

export default function NftView() {
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
    <div className="flex flex-col items-center w-full h-full bg-white">
      <div className="flex flex-col items-center gap-20 pb-[100px] justify-between w-[90%] mt-[100px]">

        <div className="flex justify-center gap-14 w-full h-full">

          <div className="w-[40%]">
            <DetalhesVaca></DetalhesVaca>
          </div>

          <div className="flex flex-col w-[60%] gap-6">
            <NftData />
            
          </div>
        </div>

      <div className="flex flex-col w-full gap-3 bg-white">
        <h1 className="text-black font-Archivo text-xl font-bold tracking-wide leading-normal letter-spacing-1.5">Explorar Ciclo</h1>
        <div className="flex justify-center items-center w-full gap-5">
        {data.map((item, index) => {
              return <Card3 key={index} item={item} />;
            })}
        </div>
      </div>

      </div>

      

    </div>
  )
}