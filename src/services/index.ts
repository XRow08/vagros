import { ApolloClient, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://vagros-api.onrender.com/graphql",
    cache: new InMemoryCache(),
  });
};

export * from "./cicles.service";
export * from "./nft.service";
