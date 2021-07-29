import styled from 'styled-components'

export const StyleContainer = styled.main`
  grid-area: contentBox;
  overflow: scroll;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`
