import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import logo from "../../assets/logo.png";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [, setCookie] = useCookies(["user"]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(state.email, state.password);

    setCookie("user", { loggedIn: true, firstName: "Admin" });
    navigate("/");
  };

  const handleChange = ({ target }) => {
    setState((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",

        backgroundImage: "linear-gradient(to bottom, #FAFAFA, #FFFFFF)",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          py: 6,
          background: "white",
          borderRadius: 5,
          boxShadow: (theme) => theme.shadows[20],
        }}
        style={{
          paddingLeft: "calc(100vw * 0.05)",
          paddingRight: "calc(100vw * 0.05)",
        }}
      >
        <Box onSubmit={handleSubmit}>
          <Box sx={{ my: 3, textAlign: "center" }}>
            <img src={logo} alt="logo" width="100" />
            <Typography
              color="primary"
              variant="h4"
              sx={{ mt: 2, color: "#febe13" }}
            >
              Sign In to Get Started
            </Typography>
            <Divider sx={{ mt: 3 }} />
          </Box>
          <TextField
            fullWidth
            margin="normal"
            name="email"
            onChange={handleChange}
            type="email"
            value={state.email}
            color="primary"
            variant="outlined"
            placeholder="Enter your Email"
          />
          <TextField
            fullWidth
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={state.password}
            color="primary"
            variant="outlined"
            placeholder="Enter Password"
          />

          <Box
            sx={{
              py: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <Button sx={{ color: (theme) => theme.palette.custom.accent }}>
              Forgot Password?
            </Button> */}
          </Box>

          <Box
            sx={{
              py: 2,
              pb: 4,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              color="customSec"
              onClick={handleSubmit}
              sx={{ boxShadow: (theme) => theme.shadows[15] }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
