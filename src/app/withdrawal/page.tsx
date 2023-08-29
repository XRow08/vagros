import DetalhesVaca from "@/Components/DetalhesVaca";
import WithdrawalDescription from "@/Components/WithdrawalDescription";
import WithdrawalPanel from "@/Components/WithdrawalPanel";

export default function withdrawal(){
  return(
    <div className="flex w-full gap-10 bg-white p-10 pt-[100px] pb-[300px]">

      <div className="w-[60%]">
        <DetalhesVaca></DetalhesVaca>
      </div>

      <div className="flex flex-col w-full gap-10">
        <WithdrawalPanel/>
        <WithdrawalDescription></WithdrawalDescription>
      </div>

    </div>
  )
}