import type { IProvider } from "@web3auth/base";
import Web3 from "web3";

export default class EthereumRpc {
  private provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  async getChainId(): Promise<string> {
    try {
      const web3 = new Web3(this.provider as any);
      const chainId = await web3.eth.getChainId();

      return chainId.toString();
    } catch (error) {
      return error as string;
    }
  }

  async getAccounts(): Promise<string[] | undefined> {
    try {
      const web3 = new Web3(this.provider as any);
      const address = await web3.eth.getAccounts();
      console.log(address);
      return address;
    } catch (error) {
      console.error(error);
    }
  }

  async getBalance(): Promise<string> {
    try {
      const web3 = new Web3(this.provider as any);
      const address = (await web3.eth.getAccounts())[0];
      const balance = web3.utils.fromWei(
        await web3.eth.getBalance(address),
        "ether"
      );

      return balance;
    } catch (error) {
      return error as string;
    }
  }

  async sendTransaction(): Promise<any> {
    try {
      const web3 = new Web3(this.provider as any);
      const fromAddress = (await web3.eth.getAccounts())[0];

      const destination = fromAddress;

      const amount = web3.utils.toWei("0.001", "ether");
      const receipt = await web3.eth.sendTransaction({
        from: fromAddress,
        to: destination,
        value: amount,
        maxPriorityFeePerGas: "5000000000",
        maxFeePerGas: "6000000000000",
      });

      return receipt;
    } catch (error) {
      return error as string;
    }
  }

  async signMessage(message: string) {
    try {
      const web3 = new Web3(this.provider as any);
      const fromAddress = (await web3.eth.getAccounts())[0];
      return await web3.eth.personal.sign(
        message,
        fromAddress,
        "test password!"
      );
    } catch (error) {
      return error as string;
    }
  }

  async getPrivateKey(): Promise<any> {
    try {
      return await this.provider.request({
        method: "eth_private_key",
      });
    } catch (error) {
      return error as string;
    }
  }
}
