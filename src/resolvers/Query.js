function test(parent, args, context, info) {
  return "This is the test query!";
}

function users(parent, args, context, info) {
  return context.prisma.user.findMany();
}

function reports(parent, args, context, info) {
  return context.prisma.report.findMany();
}

function user(parent, args, context) {
  return context.prisma.user.findUnique({
    where: {
      id: args.id
    }
  });
}

function report(parent, args, context) {
  return context.prisma.report.findUnique({
    where: {
      id: args.id
    }
  });
}

function userReports(parent, args, context) {
  return context.prisma.user.findMany({
    where: {
      id: parent.id
    }
  });
}

function reportUser(parent, args, context) {
  return context.prisma.report.findUnique({
    where: {
      id: parent.id
    }
  });
}

export default {
  test,
  users,
  reports,
  user,
  report,
  userReports,
  reportUser
};