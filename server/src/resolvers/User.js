const User = {
  interests: ({id}, args, context) =>
    context.prisma.user({id}).interests(),

  favoriteNotes: ({id}, args, context) =>
    context.prisma.user({id}).favoriteNotes(),
}

module.exports = {
  User,
}
