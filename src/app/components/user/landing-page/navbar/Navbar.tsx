"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Logo from "../../../../../../public/footer logo 360.webp";
import DrawerLogo from "../../../../../../public/drawerlogowebp.webp";
import {
  ButtonIconImage,
  DrawerListItemButton,
  DrawerLogoBox,
  DrawerMainBox,
  DrawerTypoh6,
  MainBox,
  NavIconButton,
  NaviconbuttonBox,
  NavlinksBox,
  NavlinksButton,
  drawerWidth,
} from "./styled";
import { ServiceMenu, navButtonIcon, navItems, navLinks } from "./data";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <DrawerMainBox onClick={handleDrawerToggle}>
      <DrawerLogoBox>
        <Image alt="logo" src={DrawerLogo} height={50} width={100} />
      </DrawerLogoBox>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} href={navLinks[item]} style={{textDecoration:"none"}}>
            <ListItem  sx={{color:"black", fontSize:"1.2rem", fontWeight:"550"}} disablePadding>
              <DrawerListItemButton>
                <ListItemText primary={item}  />
              </DrawerListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </DrawerMainBox>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <MainBox>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#932889",
          position: "absolute",
          top: "30px",
          padding: "10px 0px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Image alt="logo" src={Logo} height={50} width={100} />
          </Typography>
          
          <NavlinksBox>
          <ServiceMenu />
            {/* {navItems.map((item) => (
              <Link key={item} href={navLinks[item]}>
                <NavlinksButton>{item}</NavlinksButton>
              </Link>
            ))} */}
          </NavlinksBox>
          <NaviconbuttonBox>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex" }}>
                <Image
                  src="/lang-iconwebp.webp"
                  alt="language-icon"
                  height={30}
                  width={35}
                />
              </Box>
              <Box>
                {navButtonIcon.map((item, index) => (
                  <NavIconButton key={index} variant="outlined" size="small">
                    {item.text}
                    <ButtonIconImage
                      src={item.icon}
                      height={20}
                      width={20}
                      alt="icons"
                    />
                  </NavIconButton>
                ))}
              </Box>
            </Box>
          </NaviconbuttonBox>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </MainBox>
  );
}
