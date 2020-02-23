const {getUserId} = require('../utils')

const Query = {
  feed(parent, args, context) {
    return context.prisma.notes()
  },
  users(parent, args, context) {
    return context.prisma.users()
  },
  note(parent, {id}, context) {
    return context.prisma.note({id})
  },
  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({id})
  },
}

module.exports = {Query}
