import { ContentBox } from '@/components/ContentBox'
import { NavBar } from '@/components/NavBar'
import { Sidebar } from '@/components/SideBar'
import { StyleContainer } from '@/styles/Layout'
import { ChildrenProps } from '@/types/global'

export const Layout = ({ children }: ChildrenProps) => {
  return (
    <StyleContainer role="layout">
      <NavBar />
      <Sidebar />
      <ContentBox> {children} </ContentBox>
    </StyleContainer>
  )
}
