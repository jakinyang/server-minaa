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
      contains: args.filter.firstNameContains,
      mode: 'insensitive'
    }
  }

  if (args.filter.lastNameContains) {
    where.lastName = {
      contains: args.filter.lastNameContains,
      mode: 'insensitive'
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
  const where = {};
  
    if (args.filter.longitudeGreaterThan) {
      if (where.longitude) {
        where.longitude.gt = args.filter.longitudeGreaterThan
      }
      where.longitude = {
        gt: args.filter.longitudeGreaterThan
      }
    }

    if (args.filter.latitudeGreaterThan) {
      if (where.latitude) {
        where.latitude.gt = args.filter.latitudeGreaterThan
      }
      where.latitude = {
        gt: args.filter.latitudeGreaterThan
      }
    }

    if (args.filter.longitudeLessThan) {
      if (where.longitude) {
        where.longitude.lt = args.filter.longitudeLessThan
      }
      where.longitude = {
        lt: args.filter.longitudeLessThan
      }
    }

    if (args.filter.latitudeLessThan) {
      if (where.latitude) {
        where.latitude.lt = args.filter.latitudeLessThan
      }
      where.latitude = {
        lt: args.filter.latitudeLessThan
      }
    }

    if (args.filter.statusCategoryIn) {
      where.statusCategory = {
        in: [...args.filter.statusCategoryIn]
      }
    }

    if (args.filter.reportCategoryIn) {
      where.reportCategory = {
        in: [...args.filter.reportCategoryIn]
      }
    }

    if (args.filter.radiusIn) {
      where.radius = {
        in: [...args.filter.radiusIn]
      }
    }

    if (args.filter.descriptionContains) {
      where.description = {
        contains: args.filter.descriptionContains
      }
    }

    if (args.filter.userIdIn) {
      where.userId = {
        in: args.filter.userIdIn
      }
    }

    if (args.filter.createdBefore) {
      if (where.createdAt) {
        where.createdAt.lt = args.filter.createdBefore
      }
      where.createdAt = {
        lt: args.filter.createdBefore
      }
    }

    if (args.filter.createdAfter) {
      if (where.createdAt) {
        where.createdAt.gt = args.filter.createdAfter
      }
      where.createdAt = {
        gt: args.filter.createdAfter
      }
    }

    return context.prisma.report.findMany({
      where,
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