import { renderWithProvider } from '../utils/helpers'
import { fireEvent, screen } from '@testing-library/react'

import { FormComponent } from '@/components/FormComponent'

describe('<FormComponent />', () => {
  beforeEach(() => renderWithProvider(<FormComponent />))

  it('should render FormComponent', () => {
    expect(screen.getByRole(/form-component/i).textContent).toContain(
      'Formulário genérico'
    )
  })

  it('should render input', () => {
    const input = screen.getByRole(/description/i)
    fireEvent.change(input, { target: { value: 23 } })
    expect(input.value).toBe('23')
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
    expect(screen.getByRole(/form-component/i)).toMatchSnapshot()
  })
})
