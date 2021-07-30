import { Icon } from '@/components/Icon'
import { StyleInput, StyleInputContainer } from '@/styles/InputComponent'
import { InputComponentProps } from '@/types/global'

export const InputComponent = ({
  iconProps,
  placeholder,
  size,
  value,
  primary,
  name,
  onChange,
  ...props
}: InputComponentProps) => {
  const renderIcon = () => iconProps && <Icon faIcon={iconProps}></Icon>

  return (
    <StyleInputContainer size={size}>
      {renderIcon()}
      <StyleInput
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        primary={primary}
        {...props}
      ></StyleInput>
    </StyleInputContainer>
  )
}
