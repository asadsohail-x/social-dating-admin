import {
  Box,
  Button,
  Divider,
  Container,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

const UpdateCreds = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h4">Update Credentials</Typography>
      </Box>
      <Box sx={{ pb: 2 }}>
        <Typography variant="body">
          Please fill the fields below to update the password for the Admin
          Profile
        </Typography>
      </Box>
      <FormGroup sx={{ py: 2 }}>
        <FormLabel>Old Password</FormLabel>
        <TextField />
      </FormGroup>
      <FormGroup sx={{ py: 2 }}>
        <FormLabel>New Password</FormLabel>
        <TextField />
      </FormGroup>
      <FormGroup sx={{ py: 2 }}>
        <FormLabel>Confirm Password</FormLabel>
        <TextField />
      </FormGroup>
      <Divider sx={{ py: 2 }} />
      <Box sx={{ width: "100%", textAlign: "right" }}>
        <Button sx={{ my: 2 }} color="customSec" variant="outlined">
          Update
        </Button>
      </Box>
    </Container>
  );
};

export default UpdateCreds;
