
import CiclosViewPerfil from "@/Components/CiclosViewPerfil";
import ProgressBar from "@/Components/ProgressBar";
import SearchBar from "@/Components/SearchBar";
import Card3 from "@/Components/card3";

export default function CiclosView(){
    return(
        <div className="flex items-center flex-col bg-white ">
            <CiclosViewPerfil/>
            
            <div className="flex relative w-[80%] mt-[20px] pb-[20px]">
              <ProgressBar/>
              <div className="border-b-[1px] border-[#252525] border-opacity-25 w-full mx-auto absolute bottom-0"></div>
            </div>
            <SearchBar/>

            <div className="flex flex-col items-center h-full gap-14 bg-white px-[5%] pt-[2%] pb-[5%] pr-[20%] pl-[20%]">
              <div className="flex items-center gap-5">
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
              </div>
              <div className="flex items-center gap-5">
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
              </div>
              <div className="flex items-center gap-5">
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
              </div>
            </div>
        </div>
    )
}