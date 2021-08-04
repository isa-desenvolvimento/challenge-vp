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
      'max-height': '100vh',
      display: 'grid',
      'grid-template-rows': '4rem auto',
      'grid-template-columns': '1rem auto',
      'grid-template-areas': "'nav nav' 'sidebar contentBox'",
      'text-align': 'center',
      'font-family': 'Tahoma',
      overflow: 'hidden',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/layout/i)).toMatchSnapshot()
  })
})
