import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { appWithTranslation } from 'next-i18next'
import { Layout } from '~/components/layout/Layout'
import { store } from '~/store/store'
import '~/styles/index.scss'
import { AuthProvider } from '~/contexts/Auth'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Dashboard web application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  )
}

export default appWithTranslation(App)
