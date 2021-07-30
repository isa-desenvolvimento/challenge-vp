import { ComboboxProps } from '@/types/global'
import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`

export const StyledSelect = styled.select.attrs((props: ComboboxProps) => ({
  primary: props.primary,
  size: props.size,
}))<ComboboxProps>`
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

  @media screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`

export const StyledOption = styled.option.attrs((props: ComboboxProps) => ({
  primary: props.primary,
  size: props.size,
}))<ComboboxProps>`
  background: ${({ theme, primary }) =>
    primary ? theme.pallet.white : theme.colors.input.main};
  color: ${({ theme }) => theme.colors.input.contrast};
`
