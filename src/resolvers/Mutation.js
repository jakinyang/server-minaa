function createUser(parent, args, context, info) {
  return context.prisma.user.create({
    data: {
      firstName: args.data.firstName,
      lastName: args.data.lastName,
      email: args.data.email,
      password: args.data.password,
      phone: args.data.phone,
      dateOfBirth: args.data.dateOfBirth,
      avatarUrl: args.data.avatarUrl,
      qualification: args.data.qualification
    }
  })
}

function createReport(parent, args, context, info) {
  return context.prisma.report.create({
    data: {
      longitude: args.data.longitude,
      latitude: args.data.latitude,
      radius: args.data.radius,
      description: args.data.description,
      statusCategory: args.data.statusCategory,
      reportCategory: args.data.reportCategory,
      userId: args.data.userId,
      imageUrl: args.data.imageUrl
    }
  })
}

export {
  createUser,
  createReport
}