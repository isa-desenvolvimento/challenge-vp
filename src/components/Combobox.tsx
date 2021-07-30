import { ComboboxProps } from '@/types/global'

import { DropdownWrapper, StyledSelect, StyledOption } from '@/styles/Combobox'

export const Combobox = ({ options, placeholder, primary }: ComboboxProps) => {
  const renderOptions = () => {
    return (
      options?.length &&
      options.map(({ value, selected }) => {
        return (
          <StyledOption key={value} selected={selected}>
            {value}
          </StyledOption>
        )
      })
    )
  }

  return (
    <DropdownWrapper>
      <StyledSelect primary={primary}>
        <StyledOption selected value={placeholder} /> {renderOptions()}
      </StyledSelect>
    </DropdownWrapper>
  )
}
