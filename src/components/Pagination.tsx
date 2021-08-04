import {
  StylePaginationContainer,
  StylePaginationNumber,
  StylePaginationContent,
} from '@/styles/Pagination'
import { PaginationProps } from '@/types/global'
import { Icon } from './Icon'

export const Pagination = ({ total }: PaginationProps) => {
  return (
    <StylePaginationContainer role="pagination">
      <StylePaginationContent>
        <StylePaginationNumber>{` Total ${total} registros`}</StylePaginationNumber>
      </StylePaginationContent>
    </StylePaginationContainer>
  )
}
