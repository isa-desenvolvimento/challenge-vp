import { TagStateProps } from '@/types/global'
import styled from 'styled-components'

export const StyleTagState = styled.div.attrs((props: TagStateProps) => ({
  status: props.status,
}))<TagStateProps>`
  position: absolute;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.1rem 2rem;
  color: ${({ theme }) => theme.pallet.white};
  background: ${({ theme, status }) => {
    switch (status) {
      case 'done':
        return theme.pallet.emerald
      case 'warning':
        return theme.pallet.winterHazel
      case 'error':
        return theme.pallet.contessa
    }
  }};
  left: 50%;
  transform: translate(-50%);
  width: 7rem;
  top: 0;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 12%), 0 0px 10px rgb(0 0 0 / 8%);
  font-size: x-small;
  text-transform: uppercase;
`
