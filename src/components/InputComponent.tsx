import { Icon } from '@/components/Icon'
import { StyleInput, StyleInputContainer } from '@/styles/InputComponent'
import { InputComponentProps } from '@/types/global'
import { useField } from 'formik'

export const InputComponent = ({
  iconProps,
  placeholder,
  size,
  primary,
  name,
  ...props
}: InputComponentProps) => {
  const [field, meta] = useField(name)

  const renderIcon = () => iconProps && <Icon faIcon={iconProps}></Icon>

  return (
    <StyleInputContainer size={size} primary={primary} name={name}>
      {renderIcon()}
      <StyleInput
        placeholder={placeholder}
        {...meta}
        {...field}
        {...props}
      ></StyleInput>
    </StyleInputContainer>
  )
}
