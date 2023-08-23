import AboutProject from "@/Components/AboutProject";
import CiclosViewInfoSection from "@/Components/CiclosViewInfoSection";
import DetalhesVaca from "@/Components/DetalhesVaca";
import ModalComprarCotas from "@/Components/ModalComprarCotas";
import ModalConectarCarteira from "@/Components/ModalConectarCarteira";

export default function CiclosView2(){
  return(
    <div className="flex flex-col items-center w-full h-full bg-white">
      <div className="flex items-center justify-between w-[80%] mt-[100px]">

        <DetalhesVaca />
        <CiclosViewInfoSection />
      </div>

      <div className="flex">
        <AboutProject />
      </div>
    </div>
  )
}