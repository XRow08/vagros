import { ICiclo } from "@/interfaces";
import { createApolloClient } from "./index";
import { gql } from "@apollo/client";

export const CiclesService = {
  async getAllCicles(): Promise<ICiclo[]> {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query {
          Cycles {
            id
            cycleId
            tokenId
            contractAddress
            blockchainNetwork
            tokenSupply
            stakeBeef
            description
            thumbnail
            video
            minValue
            curValue
            totalValue
            closingDate
            creatorAddress
            targetProduct
            quantity
            percentage
            modality
          }
        }
      `,
    });
    return data.Cycles;
  },

  async getOneCicle(cycleId: string): Promise<ICiclo> {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query {
          Cycle(id: "${cycleId}") {
            id
            cycleId
            tokenId
            contractAddress
            blockchainNetwork
            tokenSupply
            stakeBeef
            description
            thumbnail
            video
            minValue
            curValue
            totalValue
            closingDate
            creatorAddress
            targetProduct
            quantity
            percentage
            modality
          }
        }
      `,
    });
    return data.Cycle;
  },
};
