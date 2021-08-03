import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { ContentBox } from '@/components/ContentBox'

describe('<ContentBox />', () => {
  beforeEach(() => renderWithProvider(<ContentBox>Test ContentBox</ContentBox>))

  it('should render text ContentBox', () => {
    expect(screen.getByRole(/contentBox/i).textContent).toEqual(
      ' Test ContentBox'
    )
  })

  it('should render the styled-components ContentBox', () => {
    expect(screen.getByRole(/contentBox/i)).toHaveStyle({
      background: 'rgb(239, 240, 246)',
      'grid-area': 'contentBox',
      overflow: 'scroll',
      width: '100%',
      height: '100%',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/contentBox/i)).toMatchSnapshot()
  })
})
