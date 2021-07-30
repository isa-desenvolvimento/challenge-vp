import styled from 'styled-components'

export const StyleButton = styled.button`
  background: ${({ theme, primary }) =>
    primary ? theme.colors.primary.main : theme.colors.secondary.main};
  color: ${({ theme, primary }) =>
    primary ? theme.colors.primary.contrast : theme.colors.secondary.contrast};

  font-size: 1em;
  margin: 1em;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.8em 2em;
  width: ${({ theme, size }) => theme.defineWidth(size)};

  text-transform: uppercase;
  text-overflow: ellipsis;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
