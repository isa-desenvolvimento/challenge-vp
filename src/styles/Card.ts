import styled from 'styled-components'

export const StyleCardContainer = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  text-align: center;
  overflow: hidden;
`

export const StyleCardHeader = styled.div`
  background: ${({ theme, primary }) =>
    primary ? theme.pallet.gainsboro : theme.pallet.white};
  padding: 0.5rem;
`

export const StyleCardContent = styled.div`
  background: ${({ theme }) => theme.pallet.white};
  height: ${({ height }) => (height ? height : '45vh')};
  overflow-y: scroll;
`

export const StyleCardFooter = styled.div`
  background: ${({ theme, primary }) =>
    primary ? theme.pallet.gainsboro : theme.pallet.white};
  padding: 0.5rem;
`
