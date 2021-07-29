import styled from 'styled-components'

export const StyleSidebarContainer = styled.div`
  grid-area: sidebar;
  width: 20px;
  height: auto;
  background: ${({ theme }) => theme.colors.sidebar.main};
`
