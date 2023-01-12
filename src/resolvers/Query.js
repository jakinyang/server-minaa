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
      id: +args.id
    }
  });
}

function report(parent, args, context) {
  return context.prisma.report.findUnique({
    where: {
      id: +args.id
    }
  });
}

// Filter users with variable filter fields
function usersByFilter(parent, args, context) {

  return context.prisma.user.findMany({
    where: {...args.filter}
  });
}

// Filter reports with variable filter fields
function reportsByFilter(parent, args, context) {
  
    return context.prisma.report.findMany({
      where: {...args.filter}
    });
}

export {
  test,
  users,
  reports,
  user,
  report,
  usersByFilter,
  reportsByFilter
};