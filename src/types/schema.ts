import { gql } from '@apollo/client'

export const TRANSACTION_SCHEME = gql`
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
`
