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
    order(param: String!): [Transaction]
    getByStatusSearch(status: String!, desc: String!): [Transaction]
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

    getByStatusSearch: async (_, args) => {
      try {
        return data.filter((e) => {
          return (
            e.status === args.status &&
            (e.title.indexOf(args.desc) != -1 ||
              e.description.indexOf(args.desc) != -1)
          )
        })
      } catch (error) {
        throw error
      }
    },

    order: async (_, args) => {
      switch (args.param.toLowerCase()) {
        case 'title':
          return data.sort(compareTitle)
        case 'description':
          return data.sort(compareDescription)
        case 'status':
          return data.sort(compareStatus)
        default:
          return data
      }
    },
  },
}

const compareTitle = (a, b) => {
  if (a.title < b.title) {
    return -1
  }
  if (a.title > b.title) {
    return 1
  }
  return 0
}

const compareDescription = (a, b) => {
  if (a.description < b.description) {
    return -1
  }
  if (a.description > b.description) {
    return 1
  }
  return 0
}

const compareStatus = (a, b) => {
  if (a.status < b.status) {
    return -1
  }
  if (a.status > b.status) {
    return 1
  }
  return 0
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
