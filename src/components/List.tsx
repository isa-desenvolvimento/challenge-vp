import { StyAmount, StyItemList, StyleListContainer } from '@/styles/List'
import { TagState } from '@/components/TagState'
import { TitleDescription } from './TitleDescription'
import { ItemProps, ListProps } from '@/types/global'
import { formatMoeda } from '@/utils/formatNumer'
import { formatDate } from '@/utils/formatDate'

export const List = ({ withBorder, withTag, items }: ListProps) => {
  const renderItems = () => {
    return items.map((item: ItemProps) => (
      <StyItemList withBorder={withBorder} key={item.id} role="list">
        <TitleDescription
          title={item.title}
          description={item.description}
          date={item.date ? formatDate(item.date) : ''}
        />
        {withTag && <TagState status={item.status}>{item.status}</TagState>}
        <StyAmount>{formatMoeda(item.amount)} </StyAmount>
      </StyItemList>
    ))
  }
  return <StyleListContainer>{renderItems()}</StyleListContainer>
}
