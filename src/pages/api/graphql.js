import { ApolloServer, gql } from 'apollo-server-micro'
import data from './data.json'

const typeDefs = gql`
  type Transaction {
    id: Int!
    title: String
    description: String
    date: String
    amount: Float
    status: String
  }

  type Query {
    getData: [Transaction]
    getByStatus(status: String!): [Transaction]
    getByString(str: String!): [Transaction]
    order: [Transaction]
  }
`

data = data.data

const resolvers = {
  Query: {
    getData: async () => {
      try {
        return data
      } catch (error) {
        throw error
      }
    },

    getByStatus: async (_, args) => {
      try {
        return data.filter((e) => {
          return e.status == args.status
        })
      } catch (error) {
        throw error
      }
    },

    getByString: async (_, args) => {
      try {
        return data.filter((e) => {
          return (
            e.title.indexOf(args.str) !== -1 ||
            e.description.indexOf(args.str) !== -1
          )
        })
      } catch (error) {
        throw error
      }
    },

    order: async () => {
      try {
        return data.sort((a, b) => {
          return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
        })
      } catch (error) {
        throw error
      }
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

const startServer = apolloServer.start()

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'http://localhost:3000/api/graphql'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
