import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { FormHeaderList } from '@/components/FormHeaderList'

describe('<FormHeaderList />', () => {
  const optionsHeaderList = [
    { value: 'Title', id: 1 },
    { value: 'Description', id: 2 },
    { value: 'Status', id: 3 },
  ]
  const onSubmit = jest.fn()

  beforeEach(() =>
    renderWithProvider(
      <FormHeaderList options={optionsHeaderList} onSubmit={onSubmit} />
    )
  )

  it('should render FormHeaderList', () => {
    expect(screen.getByRole(/form-header-list/i).textContent).toBeTruthy()
  })

  it('should render the styled-components tag-status', () => {
    expect(screen.getByRole(/form-header-list/i)).toHaveStyle({
      display: 'grid',
      'grid-auto-columns': '40%',
      padding: '0.5rem',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/form-header-list/i)).toMatchSnapshot()
  })
})
