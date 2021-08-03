import { WidthProps } from '@/types/global'
import styled from 'styled-components'
import Image from 'next/image'
import { TitleDescription } from '@/components/TitleDescription'

export const StyleNavAvatar = styled.div.attrs((props: WidthProps) => ({
  width: props.width,
}))<WidthProps>`
  background-color: transparent;
  box-sizing: border-box;
  border-left: 1px solid ${({ theme }) => theme.pallet.gray};
  margin-left: auto;

  padding: 1rem;
  height: 75%;
  align-items: center;
  display: flex;
`

export const StyleImage = styled(Image)`
  display: block;
  border-radius: 50%;
`

export const StyleTitleDescription = styled(TitleDescription)`
  margin: 1rem;
`
