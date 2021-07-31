import { ComboboxProps } from '@/types/global'

import { DropdownWrapper, StyledSelect, StyledOption } from '@/styles/Combobox'
import { useField } from 'formik'
import { useState } from 'react'

export const Combobox = ({
  options,
  placeholder,
  primary,
  onChange,
  name,
}: ComboboxProps) => {
  const [field, meta] = useField(name)
  const [option, setOption] = useState({ value: '' })

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e)

    setOption({ value: 'description' })
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

  return (
    <DropdownWrapper>
      <StyledSelect
        primary={primary}
        {...field}
        {...meta}
        onChange={handleChange}
      >
        <StyledOption selected value="" name={`${name}.defaultValue`}>
          {placeholder}
        </StyledOption>
        {renderOptions()}
      </StyledSelect>
    </DropdownWrapper>
  )
}
