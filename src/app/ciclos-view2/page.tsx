import AboutProject from "@/Components/AboutProject";
import CiclosViewInfoSection from "@/Components/CiclosViewInfoSection";
import DetalhesVaca from "@/Components/DetalhesVaca";
import ModalComprarCotas from "@/Components/ModalComprarCotas";
import ModalConectarCarteira from "@/Components/ModalConectarCarteira";

export default function CiclosView2(){
  return(
    <div className="flex flex-col items-center w-full h-full bg-white">
      <div className="flex w-[90%] mt-[100px] gap-10">

        <div className="w-[50%]">
          <DetalhesVaca />
        </div>

        <CiclosViewInfoSection />
      </div>

      <div className="flex">
        <AboutProject />
      </div>
    </div>
  )
}