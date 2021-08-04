import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

//'http://localhost:3000/api/graphql'
const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache: new InMemoryCache(),
})

export const getByString = async (search: string) => {
  const { data } = await client.query({
    query: gql`
      query {
        getByString(str: "${search}") {
          id
          title
          description
          date
          amount
          status
        }
      }
    `,
  })

  return data.getByString
}

export const getByStatus = async (status: string) => {
  const { data } = await client.query({
    query: gql`
      query {
        getByStatus(status: "${status}") {
          id
          title
          description
          date
          amount
          status
        }
      }
    `,
  })

  return data.getByStatus
}

export const order = async (orderBy: string) => {
  const { data } = await client.query({
    query: gql`
      query {
        order(${orderBy}) {
          id
          title
          description
          date
          amount
          status
        }
      }
    `,
  })

  return data.order
}

export const getData = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        getData {
          id
          title
          description
          date
          amount
          status
        }
      }
    `,
  })

  return data.getData
}

export const getByStatusSearch = async (status: string, desc: string) => {
  const { data } = await client.query({
    query: gql`
      query {
        getByStatusSearch(status: "${status}", desc:"${desc}"){
          id
          title
          description
          date
          amount
          status
        }
      }
    `,
  })

  return data.getByStatusSearch
}
