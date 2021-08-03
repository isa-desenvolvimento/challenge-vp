import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { LinkItem } from '@/components/LinkItem'

describe('<LinkItem />', () => {
  beforeEach(() => renderWithProvider(<LinkItem url="Link">LinkItem</LinkItem>))

  it('should render text LinkItem', () => {
    expect(screen.getByRole(/link/i).textContent).toContain('LinkItem')
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/link/i)).toMatchSnapshot()
  })
})
