const {getUserId} = require('../../utils')

const note = {
  async createNote(parent, {message, tags, font, color, style}, context) {
    const userId = getUserId(context)
    const interests = await context.prisma.interests()
    const {existingInterests, newInterests} = tags.reduce(
      (interestSummary, interest) => {
        const existingEntry =
          interests && interests.find(({title}) => title === interest)
        if (existingEntry) {
          return {
            ...interestSummary,
            existingInterests: [
              ...interestSummary.existingInterests,
              existingEntry.id,
            ],
          }
        } else {
          return {
            ...interestSummary,
            newInterests: [...interestSummary.newInterests, interest],
          }
        }
      },
      {existingInterests: [], newInterests: []},
    )

    return context.prisma.createNote({
      message,
      font,
      color,
      style,
      author: {connect: {id: userId}},
      topic: {
        create: newInterests.map(title => ({title})),
        connect: existingInterests.map(id => ({id})),
      },
    })
  },

  async viewNote(parent, {id}, context) {
    const userId = getUserId(context)

    return context.prisma.updateNote({
      where: {id},
      data: {
        viewers: {
          connect: [{id: userId}],
        },
      },
    })
  },

  async favoriteNote(parent, {id}, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: {id: userId},
      data: {
        favoriteNotes: {
          connect: {id},
        },
      },
    })
  },

  async unfavoriteNote(parent, {id}, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: {id: userId},
      data: {
        favoriteNotes: {
          disconnect: {id},
        },
      },
    })
  },

  async createNoteResponse(parent, {id, message}, context) {
    const userId = getUserId(context)

    return context.prisma.updateNote({
      where: {id},
      data: {
        responses: {
          create: {message, author: {connect: {id: userId}}},
        },
      },
    })
  },
}

module.exports = {note}
