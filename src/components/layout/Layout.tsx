import { ReactNode, useEffect, useState } from 'react'
import { Container, Drawer } from '@mui/material'
import { SideMenu } from './SideMenu'
import { Navbar } from './Navbar'
import { useRouter } from 'next/router'
import { ThemeProvider } from '~/contexts/Theme'

interface ILayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
  const { pathname } = useRouter()
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  return (
    <ThemeProvider>
      <Navbar onShowDrawer={() => setDrawerOpen(true)} />
      <Container>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <SideMenu />
        </Drawer>
        {children}
      </Container>
    </ThemeProvider>
  )
}
