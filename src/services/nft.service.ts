import { INFT } from "./../interfaces/INFT";
import { ICiclo } from "@/interfaces";
import { createApolloClient } from "./index";
import { gql } from "@apollo/client";

export const NFTService = {
  async getAllNFT(): Promise<INFT[]> {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query {
          Nfts {
            tokenId
            cycleId
            owner
            uri
            totalAmount
          }
        }
      `,
    });
    return data.Nfts;
  },

  async getOneNFT(cycleId: string): Promise<ICiclo> {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query {
          Nft(
            owner: "0x35c227074dbae33dc344341bcbcf08c46963800b"
            tokenId: 2
            cicleId: 2
          ) {
            tokenId
            cycleId
            owner
            uri
            totalAmount
          }
        }
      `,
    });
    return data.Cycle;
  },
};
