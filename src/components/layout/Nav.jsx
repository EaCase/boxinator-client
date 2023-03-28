import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../state/actions";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const dispatch = useDispatch();
  const getRole = useSelector((state) => state.auth["accountType"]);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === '/login' || location.pathname === '/Login';
  const isRegisterPage = location.pathname === '/rehister' || location.pathname === '/Register';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (isLoginPage || isRegisterPage) {
    return null; 
  }

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
               {getRole === undefined && (
              <>
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
              </MenuItem></>)}
              
              {getRole && (
                <>
                <MenuItem>
                  <Link
                    to="/shipments"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Shipments
                  </Link>
                </MenuItem>
              

                <MenuItem>
                  <Link
                    to="/account"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Account
                  </Link>
                </MenuItem>
                </>
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
            {getRole === undefined && (
              <>
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
              </>
            )}
            {getRole && (
              <>
                <Link
                  to="/shipments"
                  style={{ color: "white", textDecoration: "none", marginTop: "0.5rem" }}
                >
                  Shipments
                </Link>
                <Link
                  to="/account"
                  style={{ color: "white", textDecoration: "none", marginTop: "0.5rem" }}
                >
                  Account
                </Link>{" "}
              </>
            )}
            {getRole === "ADMIN" && (
              <Link
                to="/admin"
                style={{ color: "white", textDecoration: "none", marginTop: "0.5rem" }}
              >
                Admin
              </Link>
            )}
            {getRole && (
              <Button
                type="button"
                fullWidth
                variant="contained"
                style={{ width: "10%" }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            )}
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
