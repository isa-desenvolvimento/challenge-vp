import {
  StylePaginationContainer,
  StylePaginationNumber,
  StylePaginationContent,
} from '@/styles/Pagination'
import { PaginationProps } from '@/types/global'
import { Icon } from './Icon'

export const Pagination = ({ prev, next, total }: PaginationProps) => {
  return (
    <StylePaginationContainer>
      <StylePaginationContent>
        <Icon faIcon="chevron-left"></Icon>
        <StylePaginationNumber>{`${prev} - ${next}`}</StylePaginationNumber>
        <Icon faIcon="chevron-right"></Icon>
      </StylePaginationContent>

      <span>{`de ${total}`}</span>
    </StylePaginationContainer>
  )
}
