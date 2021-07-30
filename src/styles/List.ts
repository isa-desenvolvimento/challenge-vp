import { ListProps } from '@/types/global'
import styled from 'styled-components'

export const StyleListContainer = styled.div``

export const StyAmount = styled.span`
  margin-top: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.active.contrast};
`

export const StyItemList = styled.div.attrs((props: ListProps) => ({
  withBorder: props.withBorder,
  items: props.items,
}))<ListProps>`
  position: relative;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  display: grid;
  grid-auto-columns: 40% auto;
  padding: 1rem;
  border-bottom: ${({ theme, withBorder }) =>
    withBorder && `1px solid ${theme.pallet.gainsboro}`};
  :hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
