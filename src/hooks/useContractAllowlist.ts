import { useState } from "react";
import { Vagros_allowlist__factory } from "@/contracts";
import { useAuthContext } from "@/Contexts";
import { allowlist_address } from "@/constants";
import { StorageHelper } from "@/helpers";

export function useContractAllowlist() {
  const [isLoading, setIsLoading] = useState(false);
  const address = StorageHelper.getItem("address");
  const { provider } = useAuthContext();
  const contract = Vagros_allowlist__factory.connect(
    allowlist_address,
    provider
  );

  async function onFunction() {
    setIsLoading(true);
    try {
      const wat = contract.filters["BeaconUpgraded(address)"](address);
      console.log(wat);
      /* const gasLimit = await calculateGasLimit(contract, "borrow", [
        value,
        tbaAddress,
      ]);
      const gas = { gasLimit };
      const transaction = await contractz(value, tbaAddress!, gas);
      console.log("transaction: ", transaction);
      const tx = await transaction.wait();
      console.log("tx: ", tx);
      setIsLoading(false);
      return tx; */
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return {
    isLoading,
    onFunction,
  };
}
