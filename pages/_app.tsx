import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Layout } from '~/components/layout/Layout'
import { useStorage } from '~/hooks/useStorage'
import { store } from '~/store/store'
import "~/styles/index.scss"

function DashboardApp({ Component, pageProps }: AppProps) {
  const { getData } = useStorage()
  const token = getData('token')
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default DashboardApp
