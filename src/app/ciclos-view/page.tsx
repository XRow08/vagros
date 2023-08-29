
import CiclosViewPerfil from "@/Components/CiclosViewPerfil";
import ProgressBar from "@/Components/ProgressBar";
import SearchBar from "@/Components/SearchBar";
import Card3 from "@/Components/Card3";

export default function CiclosView(){
  const data1 = [
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

  const data2 = [
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

  const data3 = [
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

    return(
        <div className="flex items-center flex-col bg-white ">
            <CiclosViewPerfil/>
            
            <div className="flex flex-col relative w-[90%] mt-[20px] pb-[20px]">
              <ProgressBar/>
              <div className="border-b-[1px] border-[#252525] border-opacity-25 w-full mx-auto absolute bottom-0"></div>
              
            </div>
            <SearchBar/>
            

            <div className="flex flex-col items-center h-full gap-14 bg-white py-[30px]">
              <div className="flex items-center gap-5">
              {data1.map((item, index) => {
              return <Card3 key={index} item={item} />;
            })}
              </div>
              <div className="flex items-center gap-5">
              {data2.map((item, index) => {
              return <Card3 key={index} item={item} />;
            })}
              </div>
              <div className="flex items-center gap-5">
              {data3.map((item, index) => {
              return <Card3 key={index} item={item} />;
            })}
              </div>
            </div>
        </div>
    )
}