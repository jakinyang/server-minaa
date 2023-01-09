export function reports (parent, args, context) {
  return context.prisma.report.findMany({
    where: {
      userId: +parent.id
    }
  })
}