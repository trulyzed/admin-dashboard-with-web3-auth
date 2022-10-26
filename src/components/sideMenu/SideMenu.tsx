import { ReactNode } from "react"
import { useRouter } from "next/router"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Inventory2Sharp, ContactPageSharp } from "@mui/icons-material"

interface ISideMenuProps {

}

interface IMenu {
  name: string
  key: string
  path: string
  icon?: ReactNode
}

const menus: IMenu[] = [
  {
    name: "Products",
    key: "productList",
    path: "/product/list",
    icon: <Inventory2Sharp />
  },
  {
    name: "Contacts",
    key: "contactList",
    path: "/contact/list",
    icon: <ContactPageSharp />
  }
]

export const SideMenu = ({

}: ISideMenuProps) => {
  const {push: routerPush, pathname} = useRouter()

  return (
    <Box
      sx={{ width: 250 }}
      role={"presentation"}
    >
      <List>
        {menus.map(menu => (
          <ListItem key={menu.key} disablePadding>
            <ListItemButton onClick={() => routerPush(menu.path)} selected={menu.path === pathname}>
              {menu.icon ?
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
              : null}
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}