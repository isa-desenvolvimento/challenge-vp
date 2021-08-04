import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { TagState } from '@/components/TagState'

describe('<TagState />', () => {
  beforeEach(() => renderWithProvider(<TagState status="done">Done</TagState>))

  it('should render TagState', () => {
    expect(screen.getByRole(/tag-status/i).textContent).toEqual('Done')
  })

  it('should render the styled-components tag-status', () => {
    expect(screen.getByRole(/tag-status/i)).toHaveStyle({
      position: 'absolute',
      'border-bottom-left-radius': '5px',
      'border-bottom-right-radius': '5px',
      padding: '0.1rem 2rem',
      color: '#ffff',
      background: '#6CD188',
      left: '50%',
      '-webkit-transform': 'translate(-50%)',
      '-ms-transform': 'translate(-50%)',
      transform: 'translate(-50%)',
      width: '7rem',
      top: 0,
      'box-shadow': '0px 2px 5px rgb(0 0 0 / 12%),0 0px 10px rgb(0 0 0 / 8%)',
      'font-size': 'x-small',
      'text-transform': 'uppercase',
    })
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/tag-status/i)).toMatchSnapshot()
  })
})
