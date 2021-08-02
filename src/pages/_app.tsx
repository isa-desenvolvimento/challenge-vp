import React from 'react'
import type { AppProps } from 'next/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import GlobalStyles from '@/styles/global'
import { Layout } from '@/components/Layout'
import GlobalContext from '@/context'

library.add(faSearch, faChevronLeft, faChevronRight)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  )
}
export default MyApp
