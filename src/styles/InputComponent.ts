import styled from 'styled-components'

export const StyleInputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 1rem;
  text-overflow: ellipsis;
  background: ${({ theme }) => theme.colors.input.main};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ theme, size }) => theme.defineWidth(size)};
`

export const StyleInput = styled.input`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: ${({ theme, color }) => (color ? color : theme.colors.input.contrast)};
  background: none;
  border: none;
  text-overflow: ellipsis;
`
