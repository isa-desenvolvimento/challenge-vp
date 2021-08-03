import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { List } from '@/components/List'

const items = [
  {
    id: 1,
    title: 'List',
    description: 'List',
    date: '2016-02-12',
    amount: 2.0,
    status: 'done',
  },
]

describe('<List />', () => {
  beforeEach(() =>
    renderWithProvider(<List withBorder withTag items={items} />)
  )

  it('should render text List', () => {
    expect(screen.getByRole(/list/i).textContent).toContain('List')
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/list/i)).toMatchSnapshot()
  })
})
