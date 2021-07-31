import axios from 'axios'

export const getTransaction = () => {
  return axios.get('http://localhost:3000/api/transactions')
}
