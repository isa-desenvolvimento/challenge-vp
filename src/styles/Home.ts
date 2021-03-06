import styled from 'styled-components'

export const StyleHomeContainer = styled.div`
  // height: 100vh;
  width: auto;
  text-align: center;
  overflow: hidden;
`
export const StyleHomeContent = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-auto-columns: 35% 45%;
  grid-template-areas: 'list form';
  margin: 2rem;

  @media screen and (max-width: 600px) {
    display: revert;
  }
`

export const StyleSearchContainer = styled.div`
  margin: 2rem;
`
export const StyleListContainer = styled.div``

export const StyleHeaderFormContainer = styled.div`
  text-align: start;
  padding: 1rem;
`

export const StyleFormContainer = styled.div`
  @media screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`

export const StyleFooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  @media screen and (max-width: 600px) {
    position: initial;
  }
`
