import styled from 'styled-components'

export const StyletextDescriptionContainer = styled.div`
  text-align: justify;
  margin: 1rem;
`
export const StyleTitle = styled.h5`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`
export const StyleDescription = styled.span`
  color: ${({ theme }) => theme.pallet.gray};
  font-size: 0.8rem;
`
