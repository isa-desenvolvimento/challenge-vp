import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyleIconContainer = styled(FontAwesomeIcon)`
  color: ${({ theme, color }) => color && theme.colors.text};
`
