import styled from 'styled-components'

export const StyleHeadList = styled.div`
  display: grid;
  grid-auto-columns: 40%;

  @media screen and (max-width: 600px) {
    display: revert;
    width: 100%;
  }
`
