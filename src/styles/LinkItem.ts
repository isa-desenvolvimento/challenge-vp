import styled from 'styled-components'

export const StyleAncor = styled.a`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.active.contrast};
  font-size: ${({ theme }) => theme.fontSize.md};

  :hover {
    background-color: ${({ theme }) => theme.colors.active.main};
    color: ${({ theme }) => theme.colors.active.contrast};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.active.main};
    color: ${({ theme }) => theme.colors.active.contrast};
  }
`
