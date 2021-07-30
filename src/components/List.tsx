import { StyAmount, StyItemList, StyleListContainer } from '@/styles/List'
import React from 'react'
import { TagState } from '@/components/TagState'
import { TitleDescription } from './TitleDescription'
import { ItemProps, ListProps } from '@/types/global'

export const List = ({ withBorder, withTag, items }: ListProps) => {
  const renderItems = () => {
    return items.map((item: ItemProps) => (
      <StyItemList border={withBorder} key={item.id}>
        <TitleDescription
          title={item.title}
          description={item.description}
          date={item.date}
        />
        {withTag && <TagState status={item.status}>{item.status}</TagState>}
        <StyAmount>{item.amount} </StyAmount>
      </StyItemList>
    ))
  }
  return <StyleListContainer>{renderItems()}</StyleListContainer>
}
