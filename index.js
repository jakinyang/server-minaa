import { PrismaClient } from '@prisma/client';
import { startStandaloneServer } from '@apollo/server/standalone'
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './src/schema.js';
import { resolvers } from './src/resolvers.js';

const prisma = new PrismaClient()

// const args = {
//   filter: {
//    id: 1,
//     firstName: 'John',
//     lastName: 'Cena',
//     email: 'jcena@wwe.org',
//     password: '123456',
//     phone: '555-555-5555',
//     dateOfBirth: '1974-02-24T19:18:47.056Z',
//     qualification: 'ADMIN',
//     createdAt: '2023-01-10T02:16:20.038Z',
//     updatedAt: '2023-01-10T02:16:20.038Z'
//   }
// }

// const user = await prisma.user.findMany({
//   where: {...args.filter }
// })
//   console.log(user);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: () => ({ prisma }),
});

console.log(`🚀 Server ready at ${url}`);