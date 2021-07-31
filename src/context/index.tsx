import React from 'react'
import { TransactionContextProvider } from '@/context/TransactionContext'

const GlobalContext: React.FC = ({ children }) => {
  return <TransactionContextProvider> {children} </TransactionContextProvider>
}

export default GlobalContext
