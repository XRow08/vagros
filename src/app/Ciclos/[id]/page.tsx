import CiclosViewPerfil from "@/Components/CiclosViewPerfil";
import ProgressBar from "@/Components/ProgressBar";
import SearchBar from "@/Components/SearchBar";
import NFTCard from "@/Components/NFTCard";
import BtnRoxo from "@/Components/BtnRoxo";

export default function CicloView() {
  const dataCiclosViewPerfil = {
    title: "Vagros 1° stake ciclo de produção",
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
    <div className="flex items-center flex-col bg-white pb-20">
      <CiclosViewPerfil item={dataCiclosViewPerfil} />
      <div className="flex flex-col relative w-full px-4 lg:px-[10%] mt-[12rem] lg:mt-[20px] pb-[20px]">
        <div className="border-b-[1px] border-[#252525] hidden lg:block border-opacity-25 w-full my-4" />
        <ProgressBar />
        <div className="border-b-[1px] border-[#252525] border-opacity-25 w-full my-4" />
        <a
          href="/auction"
          className="lg:hidden flex w-full lg:w-[25%] h-[50px]"
        >
          <BtnRoxo>VISUALIZAR LEILÃO</BtnRoxo>
        </a>
        <div className="border-b-[1px] border-[#252525] lg:hidden block border-opacity-25 w-full my-4" />
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
          {data.map((item, index) => {
            return <NFTCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
