import styled from 'styled-components'

export const StyleListContainer = styled.div``

export const StyItemList = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  display: grid;
  grid-auto-columns: 40% auto;
  padding: 1rem;
  border-bottom: ${({ theme, border }) =>
    border && `1px solid ${theme.pallet.gainsboro}`};
  :hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`
