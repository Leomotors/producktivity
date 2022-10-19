import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { authorizationLocalStorageKey } from "@producktivity/constants";

export function createApolloClient(url: string) {
  const httpLink = createHttpLink({
    uri: url,
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(authorizationLocalStorageKey);

    return {
      headers: {
        ...headers,
        authorization: token ?? "",
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
