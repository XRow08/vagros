import DetalhesVaca from "@/Components/DetalhesVaca";
import NftChart from "@/Components/NftChart";
import NftData from "@/Components/NftData";
import Card3 from "@/Components/card3";

export default function NftView() {
  return (
    <div className="flex flex-col items-center w-full h-full bg-white">
      <div className="flex items-center justify-between w-[80%] mt-[100px]">

        <div className="flex justify-center gap-14 w-full h-full">
          <DetalhesVaca></DetalhesVaca>
          <div className="flex flex-col w-[60%] gap-6">
            <NftData />
            <NftChart />
          </div>
        </div>




      </div>

      <div className="flex flex-col items-center w-full h-full gap-14 bg-white px-[5%] pt-[2%] pb-[5%] pr-[20%] pl-[20%]">
        <div className="flex items-center gap-5">
          <Card3 />
          <Card3 />
          <Card3 />
          <Card3 />
        </div>
      </div>

    </div>
  )
}