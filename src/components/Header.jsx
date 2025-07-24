// =======================
// Core Imports
// =======================
import React, { useState } from "react";
import clsx from "clsx";

// =======================
// Bootstrap Components
// =======================
import { Container, Navbar, Nav } from "react-bootstrap";

// =======================
// Material UI Components
// =======================
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// =======================
// Assets & Icons
// =======================
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Logo from "../assets/images/logo/logo-light.png";
import LogoColor from "../assets/images/logo/logo.png";
import MenuIcon from "../assets/images/menu-icon-top.svg";

// =======================
// MUI Drawer Styles
// =======================
const useStyles = makeStyles(() => ({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
}));

// =======================
// Header Component
// =======================
const Header = () => {
  const classes = useStyles();

  // Manage drawer open/close state
  const [drawerState, setDrawerState] = useState({ left: false });

  // Toggle drawer open/close
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  // Drawer Content
  const drawerList = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className="text-center">
            <img src={LogoColor} alt="RMC Pro Logo" className="img-fluid" />
          </ListSubheader>
        }
      >
        <Divider className="mt-4" />

        {/* Drawer Navigation Links */}
        {[
          { text: "Home", path: "/" },
          { text: "Company", path: "#" },
          { text: "Plants", path: "#" },
          { text: "RMC", path: "#" },
          { text: "Gallery", path: "#" },
          { text: "Contact Us", path: "#" },
        ].map(({ text, path }) => (
          <a key={text} href={path}>
            <ListItem button>
              <ListItemIcon>
                <KeyboardReturnIcon className="fa-flip-horizontal" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <header className="header sticky">
      <Container>
        <Navbar expand="lg">
          {/* Mobile Drawer Icon */}
          <div>
            <img
              src={MenuIcon}
              alt="Menu"
              className="d-block d-lg-none menu-icon"
              onClick={toggleDrawer("left", true)}
            />
            <Drawer
              anchor="left"
              open={drawerState.left}
              onClose={toggleDrawer("left", false)}
            >
              {drawerList("left")}
            </Drawer>
          </div>

          {/* Brand Logo */}
          <Navbar.Brand href="/">
            <img src={Logo} alt="RMC Pro Logo" className="img-fluid mlogo" />
          </Navbar.Brand>

          {/* Desktop Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#">Company</Nav.Link>
              <Nav.Link href="#">Plants</Nav.Link>
              <Nav.Link href="#">RMC</Nav.Link>
              <Nav.Link href="#">Gallery</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
