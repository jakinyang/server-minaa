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

// Dummy Data
const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: "password",
    phone: "1234567890",
    dateOfBirth: "1990-01-01",
    avatarUrl: "https://www.google.com",
    qualification: "BASE",
    reports: [
      {
        id: 1,
        longitude: 123.456,
        latitude: 123.456,
        radius: 100,
        description: "This is a test report",
        statusCategory: "REPORTED",
        reportCategory: "UNCLEAR",
        user: 1,
        createdAt: "2021-01-01",
        updatedAt: "2021-01-01",
      },
    ],
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
];


const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
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
    }
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