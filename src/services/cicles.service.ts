import { ICiclo } from "@/interfaces";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://vagros-api.onrender.com/graphql",
    cache: new InMemoryCache(),
  });
};

export const CiclesService = {
  async getAllCicles(): Promise<ICiclo[]> {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query {
          Cycles {
            id
            stakeBeef
            description
            thumbnail
            video
            minValue
            curValue
            totalValue
            closingDate
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
            stakeBeef
            description
            thumbnail
            video
            minValue
            curValue
            totalValue
            closingDate
          }
        }
      `,
    });
    return data.Cycle;
  },
};
