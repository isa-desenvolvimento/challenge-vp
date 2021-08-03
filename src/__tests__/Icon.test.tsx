import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { Icon } from '@/components/Icon'

describe('<Icon />', () => {
  jest.mock('@fortawesome/free-solid-svg-icons')
  jest.mock('@fortawesome/fontawesome-svg-core')

  beforeEach(() => renderWithProvider(<Icon faIcon="search" />))

  it('should render text icon', () => {
    expect(screen.getByRole(/icon/i)).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/icon/i)).toMatchSnapshot()
  })
})
