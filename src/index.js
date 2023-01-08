import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { typeDefs } from "./schema.js";
import Query from "./resolvers/Query.js";
import { PrismaClient } from "@prisma/client";
import { GraphQLScalarType, Kind } from 'graphql';

const __dirname = dirname(new URL(import.meta.url).pathname);
const prisma = new PrismaClient();

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Date custom scalar type',
  serialize(value) {
    const date = new Date(value)

    return date.toISOString();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  },
});

const resolvers = {
  Query: {
    test: () => "Hello World",
    users: function (parent, args, context, info) {
      return context.prisma.user.findMany();
    },
    reports: function (parent, args, context, info) {
      return context.prisma.report.findMany();
    },
    user: function (parent, args, context) {

      return context.prisma.user.findUnique({
        where: {
          id: +args.id
        }
      });
    },
    report: function (parent, args, context) {
      return context.prisma.report.findUnique({
        where: {
          id: +args.id
        }
      });
    },
    userReports: function (parent, args, context) {
      return context.prisma.user.findMany({
        where: {
          id: parent.id
        }
      });
    },
    reportUser: function (parent, args, context) {
      return context.prisma.report.findUnique({
        where: {
          id: parent.id
        }
      })
    },
  },
  DateTime: DateTime,
}

// const typeDefs = readFileSync(join(__dirname , "schema.graphql"), "utf8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      prisma
    }
  }
});

console.log(`🚀 Server listening at: ${url}`);