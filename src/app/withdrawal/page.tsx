import DetalhesVaca from "@/Components/DetalhesVaca";
import WithdrawalDescription from "@/Components/WithdrawalDescription";
import WithdrawalPanel from "@/Components/WithdrawalPanel";

export default function withdrawal(){
  const data = {
    title: "Vagros 1° stake ciclo de produção",
    name: "Nelore#2435",
    usdtPrice: "477.00",
    brlPrice: "100.00",
    wallet: "cro41.....9012"
  }
  return(
    <div className="flex w-full justify-center  bg-white p-10 pt-[100px] pb-[300px]">

      <div className="flex justify-center gap-10 w-[90%]">
        <div className="w-[60%]">
          <DetalhesVaca></DetalhesVaca>
        </div>
        <div className="flex flex-col w-full gap-10">
          <WithdrawalPanel item={data}/>
          <WithdrawalDescription></WithdrawalDescription>
        </div>
      </div>

    </div>
  )
}