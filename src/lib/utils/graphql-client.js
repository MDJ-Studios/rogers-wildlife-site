import { GraphQLClient } from "graphql-request";

const endpoint = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clysy0mt400de06w9f1w5t1ne/master";

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.TOKEN}`,
    },
});

export default graphQLClient;
