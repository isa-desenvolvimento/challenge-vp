import { renderWithProvider } from '../utils/helpers'
import { screen, fireEvent } from '@testing-library/react'

import { Button } from '@/components/Button'

describe('<Button />', () => {
  const onClick = jest.fn()

  beforeEach(() =>
    renderWithProvider(
      <Button primary size="sm" type="button" onClick={onClick}>
        Test Button
      </Button>
    )
  )

  it('should render text button', () => {
    fireEvent.click(screen.getByRole(/button/i))
    expect(onClick).toBeCalledTimes(1)
    expect(screen.getByRole(/button/i).textContent).toEqual('Test Button')
  })

  it('should render the styled-components button', () => {
    expect(screen.getByRole(/button/i)).toHaveStyle({
      background: '#36a4a8',
      color: '#ffff',
      'font-size': '1em',
      margin: '1em',
      border: 'none',
      'border-radius': '5px',
      padding: '0.8em 2em',
      width: '10%',
      'text-transform': 'uppercase',
      'text-overflow': 'ellipsis',
      cursor: 'pointer',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/button/i)).toMatchSnapshot()
  })
})
