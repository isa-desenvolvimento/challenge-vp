import React from 'react'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { Layout } from '@/components/Layout'

library.add(faSearch, faChevronLeft, faChevronRight)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
