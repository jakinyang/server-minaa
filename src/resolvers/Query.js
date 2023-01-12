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

// Search users with variable filter fields
function usersSearch(parent, args, context) {

  return context.prisma.user.findMany({
    where: {...args.search}
  });
}

// Search reports with variable filter fields
function reportsSearch(parent, args, context) {
  
    return context.prisma.report.findMany({
      where: {...args.search}
    });
}
// Filter users with variable filter fields
function usersFilter(parent, args, context) {
  const where = {};
  if (args.filter.firstNameIn) {
    where.firstName = {
      in: [...args.filter.firstNameIn]
    }
  }
  console.log(where)
  if (args.filter.lastNameIn) {
    where.lastName = {
      in: [...args.filter.lastNameIn]
    }
  }

  if (args.filter.qualificationIn) {
    where.qualification = {
      in: [...args.filter.qualificationIn]
    }
  }

  if (args.filter.phoneIn) {
    where.phone = {
      in: [...args.filter.phoneIn]
    }
  }

  if (args.filter.firstNameContains) {
    where.firstName = {
      contains: args.filter.firstNameContains
    }
  }

  if (args.filter.lastNameContains) {
    where.lastName = {
      contains: args.filter.lastNameContains
    }
  }

  if (args.filter.phoneContains) {
    where.phone = {
      contains: args.filter.phoneContains
    }
  }
  return context.prisma.user.findMany({
    where,
  });
}

// Filter reports with variable filter fields
function reportsFilter(parent, args, context) {
    return context.prisma.report.findMany({
      
    });
}

export {
  test,
  users,
  reports,
  user,
  report,
  usersSearch,
  reportsSearch,
  usersFilter,
  reportsFilter,
};