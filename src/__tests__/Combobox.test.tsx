import { renderWithProvider } from '../utils/helpers'
import { mockField, mockMeta } from '../utils/mock'

import { screen } from '@testing-library/react'
import { useField } from 'formik'

import { Combobox } from '@/components/Combobox'

describe('<Combobox />', () => {
  const onChange = jest.fn()
  jest.mock('formik')

  useField.mockReturnValue([mockField, mockMeta])

  const options = [
    { value: 'Title', id: 1 },
    { value: 'Description', id: 2 },
    { value: 'Status', id: 3 },
  ]

  beforeEach(() =>
    renderWithProvider(
      <Combobox
        primary
        options={options}
        name={'Combobox'}
        placeholder={'Combobox'}
        onChange={onChange}
      />
    )
  )

  it('should render text Combobox', () => {
    expect(screen.getByRole(/combobox/i).textContent).toContain('Combobox')
  })

  it('should render the styled-components Combobox', () => {
    expect(screen.getByRole(/combobox/i)).toHaveStyle({
      'box-shadow': '0 0 20px rgba(0,0,0,0.05),0 0px 40px rgba(0,0,0,0.08)',
      'border-radius': '4px',
      overflow: 'hidden',
      'text-align': 'center',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/combobox/i)).toMatchSnapshot()
  })
})
