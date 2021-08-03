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

  // it('should render the styled-components tag-status', () => {
  //   expect(screen.getByRole(/tag-status/i)).toHaveStyle({
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
    expect(screen.getByRole(/form-header-list/i)).toMatchSnapshot()
  })
})
