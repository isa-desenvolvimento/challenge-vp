import React from 'react'
import { TransactionContextProvider } from '@/context/TransactionContext'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <TransactionContextProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TransactionContextProvider>
  )
}

export default GlobalContext
