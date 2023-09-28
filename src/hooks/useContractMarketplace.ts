import { useState } from "react";
import { Vagros_marketplace__factory } from "@/contracts";
import { allowlist_address, marketplace_address } from "@/constants";
import { calculateGasLimit, getEthersSigner } from "@/helpers";
import toast from "react-hot-toast";

export function useContractMarketplace() {
  const [isLoading, setIsLoading] = useState(false);
  const signer = getEthersSigner();
  const contract = Vagros_marketplace__factory.connect(
    allowlist_address,
    signer!
  );

  async function onBuyCicle(cicleId: string, amount: string) {
    setIsLoading(true);
    try {
      toast.loading("Carregando a compra, aguarde um minuto!", {
        duration: 2000,
      });
      const gasLimit = await calculateGasLimit(contract, "buyCycle", [
        Number(cicleId),
        Number(amount),
      ]);
      const gas = { gasLimit };
      /* const initialize = await contract.initialize(marketplace_address); */
     /*  console.log(initialize); */
      const transaction = await contract.buyCycle(
        Number(cicleId),
        Number(amount),
        gas
      );
      console.log("transaction: ", transaction);
      const tx = await transaction.wait();
      console.log("tx: ", tx);
      toast.success("Compra do ciclo concluida!");
      setIsLoading(false);
      return tx;
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  return {
    isLoading,
    onBuyCicle,
  };
}
