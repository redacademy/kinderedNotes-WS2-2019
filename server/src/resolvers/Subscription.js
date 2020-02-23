const Subscription = {
  feedSubscription: {
    subscribe: async (parent, args, context) => {
      return context.prisma.$subscribe
        .note({
          mutation_in: ['CREATED'],
        })
        .node()
    },
    resolve: payload => {
      return payload
    },
  },
}

module.exports = {Subscription}
