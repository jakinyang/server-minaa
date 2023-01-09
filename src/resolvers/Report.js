export function user (parent, args, context) {
  return context.prisma.user.findUnique({
    where: {
      userId: +parent.id
    }
  });
}