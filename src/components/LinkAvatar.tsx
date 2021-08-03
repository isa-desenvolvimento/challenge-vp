import {
  StyleNavAvatar,
  StyleImage,
  StyleTitleDescription,
} from '@/styles/LinkAvatar'
import { LinkAvatarProps } from '@/types/global'
import React from 'react'

export const LinkAvatar = ({
  title,
  description,
  src,
  alt,
  width,
  height,
}: LinkAvatarProps) => {
  return (
    <StyleNavAvatar width={width} role="link-avatar">
      <StyleImage src={src} alt={alt} width={width} height={height} />
      <StyleTitleDescription title={title} description={description} />
    </StyleNavAvatar>
  )
}
