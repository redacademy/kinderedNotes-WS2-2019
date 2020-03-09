const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {getUserId} = require('../../utils')

const auth = {
  async signup(parent, args, context) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({
      ...args,
      password,
      interests: {
        create: [
          {
            title: 'Banana',
          },
          {
            title: 'Apples',
          },
        ],
      },
    })

    return {
      token: jwt.sign({userId: user.id}, process.env.APP_SECRET),
      user,
    }
  },

  async login(parent, {username, password}, context) {
    const user = await context.prisma.user({username})
    if (!user) {
      throw new Error(`No user found for username: ${username}`)
    }
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }
    return {
      token: jwt.sign({userId: user.id}, process.env.APP_SECRET),
      user,
    }
  },

  async updateInterests(parent, {interests}, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: {id: userId},
      data: {
        interests: {
          upsert: interests.map(i => ({title: i})),
        },
      },
    })
  },
}

module.exports = {auth}
