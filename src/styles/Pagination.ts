import styled from 'styled-components'

export const StylePaginationContainer = styled.div`
  display: grid;
  display: grid;
  grid-auto-columns: 80% auto;
  text-align: justify;

  @media screen and (max-width: 600px) {
    display: revert;
    width: 100%;
  }
`

export const StylePaginationNumber = styled.div`
  background: white;
  border-radius: 4px;
  padding: 0.4rem;
  text-align: center;

  align-content: center;
  justify-content: space-between;
`

export const StylePaginationContent = styled.div`
  display: flex;
  text-align: justify;
  gap: 1rem;
`
