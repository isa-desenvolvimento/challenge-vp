import { ComboboxProps } from '@/types/global'

import { DropdownWrapper, StyledSelect, StyledOption } from '@/styles/Combobox'
import { useField } from 'formik'

export const Combobox = ({
  options,
  placeholder,
  primary,
  name,
}: ComboboxProps) => {
  const [field, meta] = useField(name)
  const renderOptions = () => {
    return (
      options?.length &&
      options.map(({ value, selected }) => {
        return (
          <StyledOption
            name={`${name}.${selected}`}
            key={value}
            selected={selected}
          >
            {value}
          </StyledOption>
        )
      })
    )
  }

  return (
    <DropdownWrapper>
      <StyledSelect primary={primary} {...field} {...meta}>
        <StyledOption selected value="" name={`${name}.defaultValue`}>
          {placeholder}
        </StyledOption>
        {renderOptions()}
      </StyledSelect>
    </DropdownWrapper>
  )
}
