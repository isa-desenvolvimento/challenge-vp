import { TagStateProps } from '@/types/global'
import styled from 'styled-components'

export const StyleTagState = styled.div.attrs((props: TagStateProps) => ({
  status: props.status,
}))<TagStateProps>`
  position: absolute;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0rem 2rem;
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
  width: 8rem;
  top: 0;
`
