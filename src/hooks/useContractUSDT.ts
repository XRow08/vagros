import { useState } from "react";
import { Vagros_fakeUSDT__factory } from "@/contracts";
import { fakeUsdt_address, marketplace_address } from "@/constants";
import { calculateGasLimit, getEthersSigner } from "@/helpers";
import { ethers } from "ethers";
import toast from "react-hot-toast";

export function useContractUSDT() {
  const [isLoading, setIsLoading] = useState(false);
  const signer = getEthersSigner();
  const contract = Vagros_fakeUSDT__factory.connect(fakeUsdt_address, signer!);

  async function onApprove(price: string) {
    setIsLoading(true);
    const newPrice = price.split(",")[0];
    const amountEther = ethers.utils.parseEther(newPrice);
    try {
      const gasLimit = await calculateGasLimit(contract, "approve", [
        marketplace_address,
        amountEther,
      ]);
      const transactionAprove = await contract.approve(
        marketplace_address,
        amountEther,
        { gasLimit }
      );
      console.log("transactionAprove: ", transactionAprove);
      const tx = await transactionAprove.wait();
      console.log("txTransactionAprove: ", tx);
    } catch (error) {
      toast.error("Erro ao realizar a compra, tente novamente!");
      setIsLoading(false);
      console.error(error);
    }
  }

  return {
    isLoading,
    onApprove,
  };
}
