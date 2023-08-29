import AboutProject from "@/Components/AboutProject";
import CiclosViewInfoSection from "@/Components/CiclosViewInfoSection";
import DetalhesVaca from "@/Components/DetalhesVaca";
import ModalComprarCotas from "@/Components/ModalComprarCotas";
import ModalConectarCarteira from "@/Components/ModalConectarCarteira";

export default function CiclosView2(){

  const dataCiclosViewInfoSection = 
    {
      stakeBeef: "20%",
      producaoAlvo: "660",
      cycleValue: "250.000,00",
      prazo: "150",
      minValue: "5.000,00",
      modalidade: "Arroba produzida",
      quantidade: "450",
      date: {
        days: "3",
        hours: "5",
        mins: "19",
        segs: "53",
      }
    }
  

  return(
    <div className="flex flex-col items-center w-full h-full bg-white">
      <div className="flex w-[90%] mt-[100px] gap-10">

        <div className="w-[50%]">
          <DetalhesVaca />
        </div>

        <CiclosViewInfoSection item={dataCiclosViewInfoSection}/>
      </div>

      <div className="flex">
        <AboutProject />
      </div>
    </div>
  )
}