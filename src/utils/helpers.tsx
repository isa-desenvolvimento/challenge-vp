import { render } from '@testing-library/react'
import GlobalContext from '../context'

export const renderWithProvider = (children: React.ReactNode) => {
  render(<GlobalContext>{children}</GlobalContext>)
}
