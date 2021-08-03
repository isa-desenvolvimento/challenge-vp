import { StyleContainer } from '@/styles/ContentBox'
import { ChildrenProps } from '@/types/global'

export const ContentBox = ({ children }: ChildrenProps) => {
  return <StyleContainer role="contentBox"> {children}</StyleContainer>
}
