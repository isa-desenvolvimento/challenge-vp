import { StyleNavContainer, StyleNavItem } from '@/styles/NavBar'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'

export const NavBar = () => {
  const menu = [
    {
      url: '/',
      label: 'Simulação',
      icon: '',
    },
  ]

  const renderLink = () => {
    return menu.map((item, index) => {
      return (
        <StyleNavItem key={index} url={item.url}>
          {item.icon && <Icon faIcon={item.icon}></Icon>}
          {item.label}
        </StyleNavItem>
      )
    })
  }

  return (
    <StyleNavContainer>
      <Logo />
      {renderLink()}
    </StyleNavContainer>
  )
}
