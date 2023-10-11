import { Contract, BigNumber, ethers } from "ethers";

const GASLIMIT_DEFAULT = "500000";

export async function calculateGasLimit(
  contract: Contract,
  functionName: string,
  params: any[]
): Promise<BigNumber> {
  try {
    const estimateGas = await contract.estimateGas[functionName](...params);
    return estimateGas;
  } catch (error) {
    return ethers.BigNumber.from(GASLIMIT_DEFAULT);
  }
}

export const getEthersSigner = () => {
  if (typeof window !== "undefined") {
    // @ts-ignore
    return new ethers.providers.Web3Provider(window?.ethereum).getSigner();
  }
  return null;
};
