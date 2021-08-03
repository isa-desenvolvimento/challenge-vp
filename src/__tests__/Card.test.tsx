import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { Card } from '@/components/Card'

describe('<Card />', () => {
  beforeEach(() =>
    renderWithProvider(
      <Card primary header={'Title'} content={'Content'} footer={'Footer'} />
    )
  )

  it('should render text Card', () => {
    expect(screen.getByRole(/card/i).textContent).toEqual('TitleContentFooter')
  })

  it('should render the styled-components card', () => {
    expect(screen.getByRole(/card/i)).toHaveStyle({
      'box-shadow': '0 0 20px rgba(0,0,0,0.05),0 0px 40px rgba(0,0,0,0.08)',
      'border-radius': '4px',
      overflow: 'hidden',
      'text-align': 'center',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/card/i)).toMatchSnapshot()
  })
})
