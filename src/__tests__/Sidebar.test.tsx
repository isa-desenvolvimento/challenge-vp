import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { Sidebar } from '@/components/SideBar'

describe('<SideBar />', () => {
  beforeEach(() => renderWithProvider(<Sidebar />))

  it('should render sideBar', () => {
    expect(screen.getByRole(/sideBar/i)).toBeTruthy()
  })

  // it('should render the styled-components sideBar', () => {
  //   expect(screen.getByRole(/sideBar/i)).toHaveStyle({
  //     background: '#36a4a8',
  //     color: '#ffff',
  //     'font-size': '1em',
  //     margin: '1em',
  //     border: 'none',
  //     'border-radius': '4px',
  //     padding: '0.8em 2em',
  //     width: '10%',
  //     'text-transform': 'uppercase',
  //     'text-overflow': 'ellipsis',
  //     cursor: 'pointer',
  //   })
  // })

  it('should render snapshot', () => {
    expect(screen.getByRole(/sideBar/i)).toMatchSnapshot()
  })
})
