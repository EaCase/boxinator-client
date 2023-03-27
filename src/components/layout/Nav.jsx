import * as React from "react";
import { useState } from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../../services/auth";

const pages = ["Login", "Register", "Shipments", "Account", "Admin"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = useState(pages[0]);

  const getRole = useSelector((state) => state.auth["accountType"]);

  console.log(getRole);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = ({ page }) => {
    setActivePage(page);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "column",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Login
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  to="/register"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Register
                </Link>
              </MenuItem>

              {getRole !== null && (
                <MenuItem>
                  <Link
                    to="/shipments"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Shipments
                  </Link>
                </MenuItem>
              )}

              {getRole !== null && (
                <MenuItem>
                  <Link
                    to="/account"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Account
                  </Link>
                </MenuItem>
              )}
              {getRole === "ADMIN" && (
                <MenuItem>
                  <Link
                    to="/admin"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Admin
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Container
            sx={{
              flexGrow: 1,
              fontSize: "1rem",
              letterSpacing: ".2rem",
              color: "inherit",
              justifyContent: "space-around",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              Register
            </Link>
            {getRole !== null && (
              <Link
                to="/shipments"
                style={{ color: "white", textDecoration: "none" }}
              >
                Shipments
              </Link>
            )}
            {getRole !== null && (
              <Link
                to="/account"
                style={{ color: "white", textDecoration: "none" }}
              >
                Account
              </Link>
            )}
            {getRole === "ADMIN" && (
              <Link
                to="/admin"
                style={{ color: "white", textDecoration: "none" }}
              >
                Admin
              </Link>
            )}
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
