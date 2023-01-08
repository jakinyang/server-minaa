import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { typeDefs } from "./schema.js";
import Query from "./resolvers/Query.js";
import { PrismaClient } from "@prisma/client";

const __dirname = dirname(new URL(import.meta.url).pathname);
const prisma = new PrismaClient();

const resolvers = {
  Query,
}

// const typeDefs = readFileSync(join(__dirname , "schema.graphql"), "utf8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: prisma,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);