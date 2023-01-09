import { GraphQLScalarType, Kind } from 'graphql';

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

export const resolvers = {
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
  },
  User: {
    reports: function (parent, args, context) {
      return context.prisma.report.findMany({
        where: {
          userId: +parent.id
        }
      });
    }
  },
  Report: {
    user: function (parent, args, context) {
      return context.prisma.user.findUnique({
        where: {
          id: +parent.userId
        }
      });
    }
  },
  DateTime: DateTime,
}