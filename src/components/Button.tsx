import { Icon } from '@/components/Icon'
import { StyleButton } from '@/styles/Button'
import { ButtonProps } from '@/types/global'

export const Button = ({
  iconProps,
  primary,
  onClick,
  children,
  size,
  type,
}: ButtonProps) => {
  const renderIcon = () => iconProps && <Icon faIcon={iconProps}></Icon>

  return (
    <StyleButton
      role="button"
      arial-label="button"
      primary={primary}
      size={size}
      type={type}
      onClick={onClick}
    >
      {renderIcon()}
      {children}
    </StyleButton>
  )
}
