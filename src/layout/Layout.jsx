import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "./header/Header";

import { adminRoutes } from "../router/AppRouter";
import Sidebar from "./sidebar/Sidebar";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 300,
  },
}));

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [, , remove] = useCookies(["user"]);
  const navigate = useNavigate();

  const logout = () => {
    remove("user");
    navigate("/");
  };

  return (
    <>
      <LayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
            p: 1,
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
      <Header onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar
        routes={adminRoutes}
        logout={logout}
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};

export default Layout;
