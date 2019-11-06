import { ApolloServer, ServerInfo, IMocks } from 'apollo-server';
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;
const books = [{ title: 'Jurassic Park', author: 'Michael Crichton', },];
const resolvers = { Query: { books: () => books, },};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});