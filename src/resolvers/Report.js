export function user (parent, args, context) {
  return context.prisma.user.findUnique({
    where: {
      id: +parent.userId
    }
  });
}