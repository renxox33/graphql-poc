const { GraphQLServer } = require('graphql-yoga')

let feed = [
    {
        id: 1,
        desc: 'Post 1'
    }, 
    {
        id: 2,
        desc: 'Post 2'
    }
]

const currentUser = {
    name: 'Leo'
}

const resolvers = {
    Query: {
        name: () => currentUser.name,
        feed: () => feed
    },
    Mutation: {
        post: (parent, args) => {
            const newPost =  {
                id: feed.length + 1,
                desc: args.desc + Number(feed.length+1)
            }
            feed.push(newPost)
            return newPost
        },

        updatePost: (parent, args) => {
            const index = args.id - 1
            const desc = args.desc 
            feed[index].desc = desc
            return feed[index]
        },

        deletePost: (parent, args) => {
            const index = args.id - 1
            const postToBeDeleted = feed[index]
            feed = feed.filter(feed => feed.id !== args.id)
            return postToBeDeleted
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})

server.start(() => console.log('Server is  running'))