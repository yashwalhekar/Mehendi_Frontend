"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

const pages = [
  { label: "Services", path: "/categories" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#FFFCF6",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo / Website Name (Desktop) */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              fontFamily: "Jomolhari",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                fontSize: 32,
                background: "linear-gradient(90deg, #3A633E,#CA7017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              M
            </span>
            <span
              style={{
                fontSize: 28,
                background: "linear-gradient(90deg, #3A633E,#CA7017)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              ehendees
            </span>
          </Typography>
          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component={Link}
                    href={page.path}
                    style={{ textDecoration: "none", color: "black" }}
                    fontFamily="Jomolhari"
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
              {/* Login for Mobile */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  href="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo (Mobile) */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "black",
              textDecoration: "none",
              fontFamily: "jomolhari",
            }}
          >
            <span style={{ color: "red" }}>M</span>
            <span style={{ color: "green" }}>e</span>
            <span style={{ color: "blue" }}>h</span>
            <span style={{ color: "orange" }}>e</span>
            <span style={{ color: "purple" }}>n</span>
            <span style={{ color: "brown" }}>d</span>
            <span style={{ color: "pink" }}>e</span>
            <span style={{ color: "teal" }}>e</span>
            <span style={{ color: "black" }}>s</span>
          </Typography>

          {/* Desktop Menu + Separate Login */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                href={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontFamily: "jomolhari",
                }}
              >
                {page.label}
              </Button>
            ))}

            {/* Login Button (always at the end) */}
            <Button
              component={Link}
              href="/login"
              variant="outlined"
              color="primary"
              sx={{ ml: 2 }}
              size="small"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
