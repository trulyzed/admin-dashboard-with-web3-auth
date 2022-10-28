import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'product']))
    }
  }
}

export default Home
