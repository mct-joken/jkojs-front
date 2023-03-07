import React, { memo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import theme from "../fixtures/theme";

// eslint-disable-next-line react/display-name
export const Header: React.FC = memo(() => {
  const isLogin = localStorage.getItem("token") ? true : false;

  {
    /*userIconはまだ対応してない*/
  }
  const userIcon = "";
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onChangeSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: "#D8E2FD" }}>
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 4,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000",
                textDecoration: "none",
              }}
            >
              JKOJS
            </Typography>
            {/* 幅が小さい時 */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
                open={Boolean(anchorElNav ?? undefined)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/contests"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography
                      textAlign="center"
                      variant={"subtitle2"}
                      sx={{
                        color: "black",
                      }}
                    >
                      コンテスト一覧
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            {/* 幅が大きい時 */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              JKOJS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: "white", display: "block", mr: 4 }}
              >
                <Link to={"/contests"} style={{ textDecoration: "none" }}>
                  <Typography
                    variant={"h6"}
                    sx={{
                      color: "black",
                    }}
                  >
                    コンテスト一覧
                  </Typography>
                </Link>
              </Button>
            </Box>
            {/* ログインしている時としていないときによって分ける */}
            {isLogin ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Account Setting" src={userIcon} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser ?? undefined)}
                  onClose={handleCloseUserMenu}
                >
                  <Link
                    to={"/mypage"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>
                      <Typography textAlign="center">マイページ</Typography>
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={onChangeSignOut}>
                    <Typography textAlign="center">ログアウト</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link to="/login">
                <Button
                  sx={{
                    flexGrow: 0,
                    backgroundColor: "#2331AE",
                    color: "#fff",
                    ":hover": {
                      backgroundColor: "#2331AE",
                    },
                  }}
                >
                  ログイン
                </Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
});
