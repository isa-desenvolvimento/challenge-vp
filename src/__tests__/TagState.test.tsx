import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { TagState } from '@/components/TagState'

describe('<TagState />', () => {
  beforeEach(() => renderWithProvider(<TagState status="done">Done</TagState>))

  it('should render TagState', () => {
    expect(screen.getByRole(/tag-status/i).textContent).toEqual('Done')
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
    expect(screen.getByRole(/tag-status/i)).toMatchSnapshot()
  })
})
