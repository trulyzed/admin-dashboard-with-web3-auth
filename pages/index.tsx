import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const { t } = useTranslation('home')

  return (
    <div>
      <Head>
        <title>{t('pageTitle')} | Dashboard</title>
      </Head>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'home']))
    }
  }
}

export default Home
