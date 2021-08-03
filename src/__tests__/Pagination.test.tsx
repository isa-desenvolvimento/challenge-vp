import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { Pagination } from '@/components/Pagination'

describe('<Pagination />', () => {
  beforeEach(() =>
    renderWithProvider(<Pagination prev={4} next={2} total={12} />)
  )

  it('should render text pagination', () => {
    expect(screen.getByRole(/pagination/i)).toBeTruthy()
  })

  // it('should render the styled-components pagination', () => {
  //   expect(screen.getByRole(/pagination/i)).toHaveStyle({
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
    expect(screen.getByRole(/pagination/i)).toMatchSnapshot()
  })
})
