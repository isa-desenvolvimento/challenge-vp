import styled from 'styled-components'

export const StyleFormContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;

  @media screen and (max-width: 600px) {
    display: revert;
  }
`
