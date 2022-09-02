import styled from "@emotion/styled";
import {
  Avatar,
  AppBar,
  Typography,
  Box,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const HeaderRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.custom.light,
  boxShadow: theme.shadows[15],
}));

const Header = ({ onSidebarOpen, logout, ...other }) => {
  const [cookie] = useCookies(["user"]);
  const [name, setName] = useState("");

  useEffect(() => {
    const user = cookie["user"];
    setName(user.firstName || "User");
  }, [cookie, setName]);

  return (
    <>
      <HeaderRoot
        sx={{
          left: {
            lg: 100,
          },
          width: {
            lg: "calc(100% - 100px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="label">{name}</Typography>
            <Avatar
              sx={{
                background: (theme) => theme.palette.primary.main,
                color: "black",
                mx: 1,
                height: 35,
                width: 35,
              }}
            >
              {name[0]}
            </Avatar>
          </Box>
        </Toolbar>
      </HeaderRoot>
    </>
  );
};

export default Header;
