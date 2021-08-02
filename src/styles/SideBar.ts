import styled from 'styled-components'

export const StyleSidebarContainer = styled.div`
  grid-area: sidebar;
  width: 20px;
  height: 95vh;
  background: ${({ theme }) => theme.colors.sidebar.main};

  @media screen and (max-width: 600px) {
    height: auto;
  }
`
