import { gql, ApolloServer } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    data {
      id
      title
      description
      date
      amount
      status
    }
`

const resolvers = {
  Query: {
    sayHello() {
      return 'Hello'
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const handle = apolloServer.createHandler({ path: '/api/graphql' })(req, res)
export const config = { api: { bodyParser: false } }
export default handle

// https://rickandmortyapi.com/graphql
