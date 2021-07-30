import styled from 'styled-components'

export const StyletextDescriptionContainer = styled.div`
  /* font-family: ${({ theme }) => theme.tex}; */
  text-align: justify;
`
export const StyleTitle = styled.h5`
  margin-top: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`
export const StyleDescription = styled.h5`
  color: ${({ theme }) => theme.pallet.linkWater};
`
