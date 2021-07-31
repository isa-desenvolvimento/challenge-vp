import styled from 'styled-components'

export const StyleFormContainer = styled.div`
  display: content;
  gap: 0.4rem;
  justify-content: center;
  padding: 3rem;
  text-align: start;

  @media screen and (max-width: 600px) {
    display: revert;
    padding: 1rem;
  }
`
