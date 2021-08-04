import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { Sidebar } from '@/components/SideBar'

describe('<SideBar />', () => {
  beforeEach(() => renderWithProvider(<Sidebar />))

  it('should render sideBar', () => {
    expect(screen.getByRole(/sideBar/i)).toBeTruthy()
  })

  it('should render the styled-components sideBar', () => {
    expect(screen.getByRole(/sideBar/i)).toHaveStyle({
      'grid-area': 'sidebar',
      width: '20px',
      height: '95vh',
      background: '#446996',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/sideBar/i)).toMatchSnapshot()
  })
})
