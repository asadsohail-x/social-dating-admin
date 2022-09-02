import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = () => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      height: "100vh",
      width: "100%",
      transform: "translate(-50%, -50%)",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      zIndex: "9999 !important",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 400,
      }}
    >
      <Typography variant="h6">Loading</Typography>
      <CircularProgress sx={{ m: 3 }} color="secondary" />
    </Box>
  </Box>
);

export default Loader;
