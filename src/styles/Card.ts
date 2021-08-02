import { CardProps } from '@/types/global'
import styled from 'styled-components'

export const StyleCardContainer = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  text-align: center;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    margin-bottom: 1rem;
  }
`

export const StyleCardHeader = styled.div.attrs((props: CardProps) => ({
  primary: props.primary,
}))<CardProps>`
  background: ${({ theme, primary }) =>
    primary ? theme.pallet.gainsboro : theme.pallet.white};
  padding: 0.5rem;
`

export const StyleCardContent = styled.div.attrs((props: CardProps) => ({
  height: props.height,
}))<CardProps>`
  background: ${({ theme }) => theme.pallet.white};
  height: ${({ height }) => (height ? height : '40vh')};
  overflow-y: scroll;
`

export const StyleCardFooter = styled.div.attrs((props: CardProps) => ({
  primary: props.primary,
}))<CardProps>`
  background: ${({ theme, primary }) =>
    primary ? theme.pallet.gainsboro : theme.pallet.white};
  padding: 0.5rem;
`
