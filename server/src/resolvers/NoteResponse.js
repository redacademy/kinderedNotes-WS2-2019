const NoteResponse = {
  author: ({id}, args, context) => context.prisma.noteResponse({id}).author(),
}

module.exports = {
  NoteResponse,
}
