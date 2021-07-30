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
    <StyleButton onClick={onClick} primary={primary} size={size} type={type}>
      {renderIcon()}
      {children}
    </StyleButton>
  )
}
