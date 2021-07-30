import { Icon } from '@/components/Icon'
import { StyleButton } from '@/styles/Button'
import { ButtonProps } from '@/types/global'
import React from 'react'

export const Button = ({
  iconProps,
  primary,
  onClick,
  children,
  size,
}: ButtonProps) => {
  const renderIcon = () => iconProps && <Icon faIcon={iconProps}></Icon>

  return (
    <StyleButton onClick={onClick} primary={primary} size={size}>
      {renderIcon()}
      {children}
    </StyleButton>
  )
}
