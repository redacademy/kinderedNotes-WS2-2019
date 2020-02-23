const User = {
  sentNotes: ({id}, args, context) => {
    return context.prisma.user({id}).notes()
  },
}

module.exports = {
  User,
}
