import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { Layout } from '@/components/Layout'

describe('<Layout />', () => {
  beforeEach(() =>
    renderWithProvider(
      <Layout>
        <h1>Test Layout</h1>
      </Layout>
    )
  )

  it('should render text Layout', () => {
    expect(screen.getByRole(/layout/i).textContent).toContain('Simulação')
  })

  it('should render the styled-components Layout', () => {
    expect(screen.getByRole(/layout/i)).toHaveStyle({
      'grid-area': 'contentBox',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      background: '#eff0f6',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/layout/i)).toMatchSnapshot()
  })
})
