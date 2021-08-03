import styled from 'styled-components'

export const StyletextDescriptionContainer = styled.div`
  text-align: justify;
  margin: 1rem;
  display: grid;
  grid-gap: 0.3rem;
`
export const StyleTitle = styled.h5`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
`
export const StyleDescription = styled.span`
  color: ${({ theme }) => theme.pallet.gray};
  font-size: 0.8rem;
`
