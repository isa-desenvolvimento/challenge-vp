import { InputComponentProps } from '@/types/global'
import styled from 'styled-components'

export const StyleInputContainer = styled.div.attrs(
  (props: InputComponentProps) => ({
    primary: props.primary,
    size: props.size,
  })
)<InputComponentProps>`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  padding: 1rem;
  text-overflow: ellipsis;
  background: ${({ theme, primary }) =>
    primary ? theme.pallet.white : theme.colors.input.main};
  color: ${({ theme }) => theme.colors.input.contrast};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ theme, size }) => theme.defineWidth(size)};
  margin: 1rem;

  @media screen and (max-width: 600px) {
    display: revert;
  }
`

export const StyleInput = styled.input`
  padding: 0;
  margin: 0;
  color: ${({ theme, color }) => (color ? color : theme.colors.input.contrast)};
  background: none;
  border: none;
  text-overflow: ellipsis;
`
