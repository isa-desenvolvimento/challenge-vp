import { Icon } from '@/components/Icon'
import {
  StyleContainer,
  StyleInput,
  StyleInputContainer,
  StyleInputLabel,
} from '@/styles/InputComponent'
import { InputComponentProps } from '@/types/global'
import { useField } from 'formik'
import React from 'react'

export const InputComponent = ({
  iconProps,
  placeholder,
  size,
  primary,
  name,
  label,
  ...props
}: InputComponentProps) => {
  const [field, meta] = useField(name)

  const renderIcon = () => iconProps && <Icon faIcon={iconProps}></Icon>

  return (
    <StyleContainer role="input-component">
      {label && <StyleInputLabel>{label}</StyleInputLabel>}
      <StyleInputContainer size={size} primary={primary} name={name}>
        {renderIcon()}
        <StyleInput
          role={name}
          placeholder={placeholder}
          {...meta}
          {...field}
          {...props}
        ></StyleInput>
      </StyleInputContainer>
    </StyleContainer>
  )
}
