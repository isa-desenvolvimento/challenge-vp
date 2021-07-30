import {
  StyleDescription,
  StyletextDescriptionContainer,
  StyleTitle,
} from '@/styles/TitleDescription'
import { TitleDescriptionProps } from '@/types/global'

export const TitleDescription = ({
  title,
  description,
  date,
}: TitleDescriptionProps) => {
  return (
    <StyletextDescriptionContainer>
      <StyleTitle>{title}</StyleTitle>
      <StyleDescription>{description}</StyleDescription>
      <StyleDescription>{date}</StyleDescription>
    </StyletextDescriptionContainer>
  )
}
