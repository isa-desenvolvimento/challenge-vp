import {
  StylePaginationContainer,
  StylePaginationNumber,
  StylePaginationContent,
} from '@/styles/Pagination'
import React, { useState } from 'react'
import { Icon } from './Icon'

export const Pagination = ({ prev, next, total }) => {
  const [current, SetCurrent] = useState(1)

  return (
    <StylePaginationContainer>
      <StylePaginationContent>
        <Icon faIcon="chevron-left"></Icon>
        <StylePaginationNumber>{`${current} - ${total}`}</StylePaginationNumber>
        <Icon faIcon="chevron-right"></Icon>
      </StylePaginationContent>

      <span>{`de ${total}`}</span>
    </StylePaginationContainer>
  )
}
