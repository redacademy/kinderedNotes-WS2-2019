const Note = {
  author: ({id}, args, context) => context.prisma.note({id}).author(),

  viewers: ({id}, args, context) =>
    context.prisma.note({id}).viewers(),

  responses: ({id}, args, context) =>
    context.prisma.note({id}).responses(),

  topic: ({id}, args, context) => context.prisma.note({id}).topic(),
}

module.exports = {
  Note,
}
