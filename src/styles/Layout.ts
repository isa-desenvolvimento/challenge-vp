import styled from 'styled-components'

export const StyleContainer = styled.main`
  max-height: 100vh;

  display: grid;
  grid-template-rows: 4rem auto;
  grid-template-columns: 1rem auto;

  grid-template-areas:
    'nav nav'
    'sidebar contentBox';
  text-align: center;

  font-family: ${({ theme }) => theme.fontFamily};

  overflow: hidden;

  @media screen and (max-width: 600px) {
    overflow-y: scroll;
  }
`
