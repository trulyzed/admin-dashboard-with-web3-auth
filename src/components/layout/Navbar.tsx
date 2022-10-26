import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import Link from 'next/link'

interface INavbarProps {
  onShowDrawer: () => void
}

export const Navbar = ({
  onShowDrawer
}: INavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
            onClick={onShowDrawer}
          >
            <Menu />
          </IconButton>
          <Link href={'/'}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                cursor: 'pointer',
                letterSpacing: 5,
              }}
            >
              DASHBOARD
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}