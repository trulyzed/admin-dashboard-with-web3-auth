import { useContext } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { Label } from '@mui/icons-material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ThemeContext } from '~/contexts/Theme'
import { useBodyClass } from '~/hooks/useBodyClass'

const About: NextPage = () => {
  const { t } = useTranslation('about')
  const { mode } = useContext(ThemeContext)
  useBodyClass('--reading-backdrop', mode !== 'dark')

  return (
    <>
      <Head>
        <title>{t('pageTitle')} | Dashboard</title>
      </Head>
      <Paper sx={{ mt: 4, p: 4 }} elevation={0}>
        <Box>
          <img style={{ background: 'white', borderRadius: '5px' }} src="/images/wind.svg" alt="wind logo" />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Divider sx={{ mt: 1 }} />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h3" fontWeight={800} fontFamily={'cursive'}>
            Borderless Payments, for everyone
          </Typography>
        </Box>
      </Paper>
      <Paper sx={{ mt: 2, p: 4 }} elevation={0}>
        <Box sx={{ mt: 1 }}>
          <Typography variant="h6" fontWeight={800} className={'wind--text'} fontFamily={'monospace'}>
            Making sense of Wind
          </Typography>
          <Divider sx={{ mt: 1 }} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1" fontFamily={'cursive'}>
            Wind is a Fintech application. A cross-border payment solution to exchange money around the world. Unlike
            traditional payment providers, Wind will not have strict control over users&apos; money. It will do
            everything a traditional payment application does plus more (common features like add money, send money,
            cash out, etc and also crypto functionalities like staking, yield in decentralized way). In the Wind wallet,
            passive income is possible through staking and expanding crypto assets in DeFi apps.
          </Typography>
          <Typography variant="subtitle1" fontFamily={'cursive'} sx={{ mt: 2 }}>
            Wind as a company is focused on developing the Wind payment application backed by the marquee investors with
            deep experiences in Crypto and Fintech. The founders of the company have solid track records of making
            startups successful. This is a team of designers, engineers, and founders with a view to making borderless
            payments cheap, accessible, and hassle-free.
          </Typography>
        </Box>
      </Paper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'about']))
    }
  }
}

export default About
