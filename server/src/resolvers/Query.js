const {getUserId} = require('../utils')

const Query = {
  users(parent, args, context) {
    return context.prisma.users()
  },

  note(parent, {id}, context) {
    return context.prisma.note({id})
  },

  inbox: async (parent, args, context) => {
    const userId = getUserId(context)
    const interests = await context.prisma
      .user({id: userId})
      .interests()

    return context.prisma.notes({
      where: {
        AND: [
          {
            author: {
              id_not: userId,
            },
          },

          {
            topic_some: {
              title_in: interests.map(d => d.title),
            },
          },
        ],
      },
    })
  },

  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({id})
  },
}

module.exports = {Query}
