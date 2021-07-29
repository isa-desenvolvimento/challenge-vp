import styled from 'styled-components'

export const StyleContainer = styled.main`
  height: 100vh;
  color: white;

  display: grid;
  grid-template-rows: 4rem auto;
  grid-template-columns: 1rem auto;

  grid-template-areas:
    'nav nav'
    'sidebar contentBox';
  text-align: center;

  font-family: 'Nunito';

  overflow: hidden;
  text-align: center;
`
