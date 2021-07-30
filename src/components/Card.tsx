import {
  StyleCardContainer,
  StyleCardContent,
  StyleCardFooter,
  StyleCardHeader,
} from '@/styles/Card'
import { CardProps } from '@/types/global'
import React from 'react'

export const Card = ({
  header,
  content,
  footer,
  primary,
  display,
  height,
}: CardProps) => {
  const renderHeader = () =>
    header && <StyleCardHeader primary={primary}>{header}</StyleCardHeader>
  const renderContent = () =>
    content && (
      <StyleCardContent primary={primary} height={height}>
        {content}
      </StyleCardContent>
    )
  const renderFooter = () =>
    footer && <StyleCardFooter primary={primary}>{footer}</StyleCardFooter>

  return (
    <StyleCardContainer display={display}>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </StyleCardContainer>
  )
}
