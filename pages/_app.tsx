import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../themes'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <NextUIProvider theme={darkTheme}>
      {getLayout(<Component {...pageProps} />)}
    </NextUIProvider>
  )
}
