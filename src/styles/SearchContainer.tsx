import styled from 'styled-components'

export const StyleSearchContainer = styled.div`
  background: ${({ theme }) => theme.pallet.white};
  display: grid;
  grid-template-columns: 30% 20% auto;
  justify-content: unset;
  align-items: baseline;

  grid-gap: 1rem;

  @media screen and (max-width: 600px) {
    display: revert;
  }
`

export const StyleButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
