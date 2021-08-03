import {
  StyleCardContainer,
  StyleCardContent,
  StyleCardFooter,
  StyleCardHeader,
} from '@/styles/Card'
import { CardProps } from '@/types/global'

export const Card = ({
  header,
  content,
  footer,
  primary,
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
    <StyleCardContainer role="card">
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </StyleCardContainer>
  )
}
