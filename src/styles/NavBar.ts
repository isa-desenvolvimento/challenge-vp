import styled from 'styled-components'
import { LinkItem } from '@/components/LinkItem'

export const StyleNavContainer = styled.div`
  grid-area: nav;

  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.navbar};
  box-shadow: 0px 1px 8px #dedede;
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const StyleNavItem = styled(LinkItem)`
  float: left;
  display: block;
  color: ${({ theme }) => theme.colors.active.contrast};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.md};

  :hover {
    background-color: ${({ theme }) => theme.colors.active.main};
    color: ${({ theme }) => theme.colors.active.contrast};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.active.main};
    color: ${({ theme }) => theme.colors.active.contrast};
  }

  @media screen and (max-width: 600px) {
    display: none;
    float: none;
    display: block;
    text-align: left;
  }
`
