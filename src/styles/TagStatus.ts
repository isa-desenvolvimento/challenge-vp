import styled from 'styled-components'

export const StyleTagState = styled.div`
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
`
