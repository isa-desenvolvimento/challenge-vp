/* eslint-disable @typescript-eslint/no-empty-function */
import { TransactionContextProps } from '@/types/contex'
import React, { createContext, useState } from 'react'

const DEFAULT_VALUE: TransactionContextProps = {
  state: {
    formHeader: { input: '', status: '' },
    formLists: { orderby: '' },
    form: '',
    profile: {
      name: 'Julia Arruda Fonseca',
      avatar: '/avatar.png',
      description: 'Gerente',
    },
  },
  setState: () => {},
}

const TransactionContext = createContext<TransactionContextProps>(DEFAULT_VALUE)

const TransactionContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  console.log('context', state)

  return (
    <TransactionContext.Provider value={{ state, setState }}>
      {children}
    </TransactionContext.Provider>
  )
}

export { TransactionContextProvider }
export default TransactionContext
