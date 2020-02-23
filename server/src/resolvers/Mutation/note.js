const {getUserId} = require('../../utils')

const note = {
  async createNote(parent, {message}, context) {
    const userId = getUserId(context)
    return context.prisma.createNote({
      message,
      fontFamily: 'sans-serif',
      fontColor: '#000',
      backgroundColor: '#fff',
      author: {connect: {id: userId}},
    })
  },
}

module.exports = {note}
