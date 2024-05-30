import { Fragment, ReactElement } from 'react'
import '@/styles/globals.css'
import dynamic from 'next/dynamic'

//SetUp Store redux
import { Provider as ReduxProvider } from 'react-redux'
import store from '@/store'

import { AppPropsWithLayoutType } from '@/types/layout/AppPropsWithLayout'
import NprogressProvider from '@/providers/nprogress'
import ReactQueryProvider from '@/providers/react-query'
import DayjsProvider from '@/providers/dayjs'
import NextUIProvider from '@/providers/next-ui/index'
import AuthGuard from '@/providers/auth'
import RootLayout from '@/layouts/root-layout'

export default function App({ Component, pageProps }: AppPropsWithLayoutType) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page)
  const auth = Component.auth ?? false

  return (
    <Fragment>
      <ReactQueryProvider>
        <ReduxProvider store={store}>
          <NprogressProvider>
            <NextUIProvider>
              <DayjsProvider>
                <AuthGuard isAuth={auth}>
                  <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
                </AuthGuard>
              </DayjsProvider>
            </NextUIProvider>
          </NprogressProvider>
        </ReduxProvider>
      </ReactQueryProvider>
    </Fragment>
  )
}
