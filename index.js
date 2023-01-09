import { PrismaClient } from '@prisma/client';
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './src/schema.js';
import { resolvers } from './src/resolvers.js';

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: () => ({ prisma }),
});

console.log(`🚀 Server ready at ${url}`);