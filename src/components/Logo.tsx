import { DefaultTheme, ThemeConsumer } from 'styled-components'
import Image from 'next/image'

export const Logo = () => {
  const renderLogoTheme = (theme: DefaultTheme) => {
    return (
      <Image
        src={theme.logo.url}
        alt="Logo Vamos Parcelar"
        width={theme.logo.md}
        height={theme.logo.sm}
      />
    )
  }

  return (
    <ThemeConsumer>
      {(theme: DefaultTheme) => renderLogoTheme(theme)}
    </ThemeConsumer>
  )
}
