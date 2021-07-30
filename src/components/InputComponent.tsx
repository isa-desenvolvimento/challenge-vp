import { Icon } from '@/components/Icon'
import { StyleInput, StyleInputContainer } from '@/styles/InputComponent'
import { InputComponentProps } from '@/types/global'

export const InputComponent = ({
  iconProps,
  placeholder,
  size,
  onChange,
}: InputComponentProps) => {
  const renderIcon = () => iconProps && <Icon faIcon={iconProps}></Icon>

  return (
    <StyleInputContainer size={size}>
      {renderIcon()}
      <StyleInput placeholder={placeholder} onChange={onChange}></StyleInput>
    </StyleInputContainer>
  )
}
