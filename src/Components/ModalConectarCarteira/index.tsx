import { useModalStore } from "@/stores/modalStore";
import Metamask from "../Icons/Metamask";
import X from "../Icons/X";
import Link from "next/link";
import { useAuthContext } from "@/Contexts";

export default function ModalConectarCarteira() {
  const { setShowModalWallet } = useModalStore();
  const { login } = useAuthContext();

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col items-center inset-1 w-[490px] px-[20px] py-[30px] h-[320px] rounded-lg border-[2px] border-gray-300 bg-white text-black shadow-xl">
        <div className="flex flex-col gap-4 border-b-2 border-gray-300 pb-[20px]">
          <div className="flex items-center justify-between">
            <h1 className="text-black font-Archivo text-lg font-bold leading-normal tracking-wider">
              Conecte sua wallet para continuar
            </h1>
            <X onClick={() => setShowModalWallet(false)} />
          </div>

          <div className="">
            <h1 className="text-black font-Archivo text-md font-normal leading-normal tracking-wider">
              Conectando sua wallet, você vai ter o acesso completo a toda
              plataforma Vagros.
              <Link
                href="/create-wallet"
                onClick={() => setShowModalWallet(false)}
              >
                <span className="text-blue-500"> Saiba mais...</span>
              </Link>
            </h1>
          </div>
        </div>

        <div className="flex flex-col w-full mt-[20px] items-center">
          <div className="flex flex-col gap-4 items-center w-[90%]">
            <div className="flex flex-col items-center gap-3 w-full border-gray-300 border-2 shadow-lg rounded-lg cursor-pointer py-1">
              <div className="flex items-center">
                <Metamask />
                <h1 onClick={login} className="text-black font-Archivo text-20 font-normal leading-normal">
                  Conectar pela <strong>MetaMask</strong>
                </h1>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 w-full border-gray-300 border-2 shadow-lg rounded-lg cursor-pointer py-1">
              <div className="flex items-center">
                <img src="/images/trust.png" alt="" />
                <h1 className="text-black font-Archivo text-20 font-normal leading-normal">
                  Conectar pela <strong>WalletConnect</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
