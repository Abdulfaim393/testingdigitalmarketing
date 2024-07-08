"use client";
export const navItems = ["Home", "Services", "Career", "Blog", "About Us"];

export const navButtonIcon = [
  { text: "contact us", icon: "/contact-uswebp.webp" },
  { text: "let's talk", icon: "/Lets talkwebp.webp" },
];

export const navLinks: any = {
  Home: "/",
  Services: "/components/user/pages/services",
  Career: "/components/user/pages/career",
  Blog: "/components/user/pages/blog",
  "About Us": "/components/user/pages/aboutus",
};

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { CustomMenuItem, NavigationLinkTag } from "./styled";

export const ServiceMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };
  return (
    <>
      <Button sx={{}}>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            textTransform: "capitalize",
            fontSize: "15px",
            fontWeight: 600,
          }}
          href="/"
        >
          Home
        </Link>
      </Button>
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "black",
          textTransform: "capitalize",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        Services
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <NavigationLinkTag href="/webDevelopment">
          <CustomMenuItem onClick={handleClose}>Web Development</CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/mobileDevelopment">
          <CustomMenuItem onClick={handleClose}>
            Mobile Development
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/digitalMarketing">
          <CustomMenuItem onClick={handleClose}>
            Digital Marketing
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/socialMedia">
          <CustomMenuItem onClick={handleClose}>
            Social Media Marketing
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/reputationManagement">
          <CustomMenuItem onClick={handleClose}>
            Reputation Management
          </CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/eCommerce">
          <CustomMenuItem onClick={handleClose}>E-Commerce</CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/seoManagement">
          <CustomMenuItem onClick={handleClose}>SEO Management</CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/graphicDesign">
          <CustomMenuItem onClick={handleClose}>Graphic Design</CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/softwareDevelopment">
          <CustomMenuItem onClick={handleClose}>Software Development</CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/itConsulting">
          <CustomMenuItem onClick={handleClose}>IT Consulting</CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/contentWriting">
          <CustomMenuItem onClick={handleClose}>Content Writing</CustomMenuItem>
        </NavigationLinkTag>
        <NavigationLinkTag href="/videoProduction">
          <CustomMenuItem onClick={handleClose}>Video Production</CustomMenuItem>
        </NavigationLinkTag>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open2 ? "basic-menu2" : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        onClick={handleClick2}
        sx={{
          color: "black",
          textTransform: "capitalize",
          fontSize: "15px",
          fontWeight: 600,
        }}
      >
        Career
      </Button>
    </>
  );
};
