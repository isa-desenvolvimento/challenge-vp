import { renderWithProvider } from '../utils/helpers'
import { act, fireEvent, screen } from '@testing-library/react'

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

    act(() => {
      fireEvent.change(input, { target: { value: 23 } })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    expect(input.value).toBe('23')
  })

  it('should render the styled-components tag-status', () => {
    expect(screen.getByRole(/form-component/i)).toHaveStyle({
      display: 'content',
      gap: '0.4rem',
      'justify-content': 'center',
      padding: '3rem',
      'text-align': 'start',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/form-component/i)).toMatchSnapshot()
  })
})
