export interface ICiclo {
  id: string;
  stakeBeef: number;
  description: string;
  thumbnail: string;
  video: string;
  chainId?: number;
  tokenSupply: number;
  contractAddress: string;
  blockchainNetwork: string;
  creatorAddress: string;
  tokenId: number;
  cycleId: number;
  minValue: number;
  curValue: number;
  totalValue: number;
  closingDate: string;
  targetProduct: number;
  quantity: number;
  percentage: number;
  modality: string;
}
