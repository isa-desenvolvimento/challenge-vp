import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { SearchContainer } from '@/components/SearchContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('<SearchContainer />', () => {
  const options = [
    { value: 'Done', id: 1 },
    { value: 'Warning', id: 2 },
    { value: 'Error', id: 3 },
  ]
  const onSubmit = jest.fn()

  jest.mock('@fortawesome/free-solid-svg-icons')
  jest.mock('@fortawesome/fontawesome-svg-core')

  beforeEach(() =>
    renderWithProvider(
      <SearchContainer onSubmit={onSubmit} options={options} />
    )
  )

  it('should render text SearchContainer', () => {
    expect(screen.getByRole(/searchContainer/i).textContent).toContain('Buscar')
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/searchContainer/i)).toMatchSnapshot()
  })
})
