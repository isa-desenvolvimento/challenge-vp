import { renderWithProvider } from '../utils/helpers'
import { screen } from '@testing-library/react'

import { LinkAvatar } from '@/components/LinkAvatar'

jest.mock('next/image', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe('<LinkAvatar />', () => {
  beforeEach(() =>
    renderWithProvider(
      <LinkAvatar
        title="Link"
        description="Description"
        src="/avatar.png"
        alt="alt"
        width="50"
        height="50"
      />
    )
  )

  it('should render text LinkAvatar', () => {
    expect(screen.getByRole(/link-avatar/i).textContent).toEqual(
      'LinkDescription'
    )
  })

  it('should render snapshot', () => {
    expect(screen.getByRole(/link-avatar/i)).toMatchSnapshot()
  })
})
