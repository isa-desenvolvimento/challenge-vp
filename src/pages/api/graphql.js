// import { gql, ApolloServer } from 'apollo-server-micro'
// import Cors from 'micro-cors'

// const typeDefs = gql`
//   type Query {
//     transactions: [Transactions!]!
//   }
//   type Transactions {
//     id: Int!
//     title: String
//     description: String
//     date: String
//     amount: Number
//     status: String
//   }
// `

// const resolvers = {
//   Query: {
//     transactions: () => {
//       console.log('hkduhakshdk')
//       return 'Hello'
//     },
//   },
// }

// const cors = Cors({ allowMethods: ['GET', 'OPTIONS'] })

// const apolloServer = new ApolloServer({ typeDefs, resolvers })

// const handle = apolloServer.createHandler({ path: '/api/graphql' })(req, res)
// export const config = { api: { bodyParser: false } }
// export default cors(handle)

// // https://rickandmortyapi.com/graphql

import { ApolloServer, gql } from 'apollo-server-micro'
import data from './data.json'

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
  type Transaction {
    id: Int!
    title: String
    description: String
    date: String
    status: String
  }
  type Transactions {
    data: [Transaction!]!
  }
`

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }]
    },
    transactions() {
      return data
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
