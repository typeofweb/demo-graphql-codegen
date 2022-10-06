import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl04864ta158801xo95gsh9od/master",
  cache: new InMemoryCache(),
});

export const authorizedApolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl04864ta158801xo95gsh9od/master",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});
