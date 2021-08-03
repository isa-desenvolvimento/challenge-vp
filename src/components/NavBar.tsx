import { StyleNavContainer, StyleNavItem } from '@/styles/NavBar'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { LinkAvatar } from '@/components/LinkAvatar'
import React, { useContext } from 'react'
import TransactionContext from '@/context/TransactionContext'

export const NavBar = () => {
  const { state } = useContext(TransactionContext)

  console.log(state.profile)

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
      <LinkAvatar
        src={state?.profile.avatar}
        title={state?.profile.name}
        description={state?.profile.description}
        alt="imagem do perfil"
        width={50}
        height={50}
      />
    </StyleNavContainer>
  )
}
