import { ComboboxProps } from '@/types/global'

import { DropdownWrapper, StyledSelect, StyledOption } from '@/styles/Combobox'
import { useField } from 'formik'

export const Combobox = ({
  role,
  options,
  placeholder,
  primary,
  onChange,
  name,
  isFormik,
}: ComboboxProps) => {
  const [field, meta] = useField(name)

  const renderSelection = () => {
    if (isFormik) {
      return (
        <StyledSelect primary={primary} {...field} {...meta} role={role}>
          <StyledOption selected value="" name={`${name}.defaultValue`}>
            {placeholder}
          </StyledOption>
          {renderOptions()}
        </StyledSelect>
      )
    }

    return (
      <StyledSelect onChange={onChange} primary={primary}>
        <StyledOption selected value="" name={`${name}.defaultValue`}>
          {placeholder}
        </StyledOption>
        {renderOptions()}
      </StyledSelect>
    )
  }

  const renderOptions = () => {
    return (
      options?.length &&
      options.map(({ value }) => {
        return (
          <StyledOption name={`${name}.${value}`} key={value} value={value}>
            {value}
          </StyledOption>
        )
      })
    )
  }

  return <DropdownWrapper role="combobox">{renderSelection()}</DropdownWrapper>
}
