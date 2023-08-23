import { useModalStore } from "@/stores/modalStore"

export default function ConnectWalletButton() {
  const { setShowModalWallet } = useModalStore()
  return (
    <div onClick={() => setShowModalWallet(true)} className="w-[237px] h-[51px] bg-gradient-to-r from-yellow-300 to-orange-500 flex items-center justify-center rounded-[8px] ">
      <h1 className="text-black font-archivo font-bold text-16 leading-normal">CONECTAR CARTEIRA</h1>
    </div>
  )
}