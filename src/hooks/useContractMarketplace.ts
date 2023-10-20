import { useState } from "react";
import { Vagros_marketplace__factory } from "@/contracts";
import { marketplace_address } from "@/constants";
import { calculateGasLimit, getEthersSigner } from "@/helpers";
import { useContractUSDT } from "./useContractUSDT";
import toast from "react-hot-toast";

export function useContractMarketplace() {
  const [isLoading, setIsLoading] = useState(false);
  const signer = getEthersSigner();
  const contract = Vagros_marketplace__factory.connect(
    marketplace_address,
    signer!
  );
  const { onApprove } = useContractUSDT();

  async function onBuyCicle(cicleId: number, amount: string) {
    setIsLoading(true);
    try {
      toast.loading("Carregando a compra, aguarde um minuto!", {
        duration: 2000,
      });
      const gasLimit = await calculateGasLimit(contract, "buyCycle", [
        cicleId,
        Number(amount),
      ]);
      const gas = { gasLimit };
      await onApprove("99999999999");
      const transaction = await contract.buyCycle(cicleId, Number(amount), gas);
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

  async function onRequestReward(cicleId: number) {
    setIsLoading(true);
    try {
      toast.loading("Retirando fundos, aguarde um minuto!", {
        duration: 2000,
      });
      const gasLimit = await calculateGasLimit(contract, "requestReward", [
        cicleId,
      ]);
      const gas = { gasLimit };
      const transaction = await contract.requestReward(cicleId, gas);
      console.log("transaction: ", transaction);
      const tx = await transaction.wait();
      console.log("tx: ", tx);
      toast.success("Fundos retirados com sucesso!");
      setIsLoading(false);
    } catch (error) {
      toast.error("Erro ao retirar fundos, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  return {
    isLoading,
    onBuyCicle,
    onRequestReward,
  };
}
