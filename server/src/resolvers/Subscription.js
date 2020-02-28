const Subscription = {
  inboxSub: {
    subscribe: async (parent, args, context) =>
      context.prisma.$subscribe
        .note({
          mutation_in: ['CREATED'],
        })
        .node(),
    resolve: payload => payload,
  },
}

module.exports = {Subscription}
