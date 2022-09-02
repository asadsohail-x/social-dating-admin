import {
  Box,
  Button,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { Block, Visibility } from "@mui/icons-material";

const Users = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h4">Users</Typography>
      </Box>
      <Box sx={{ py: 2 }}>
        <TextField color="primary" size="small" type="Search" />
        <Button sx={{ color: "black" }}>Search</Button>
      </Box>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone No</TableCell>
              <TableCell>Swipes</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>User 1</TableCell>
              <TableCell>user@mail.com</TableCell>
              <TableCell>+123 4567 8910</TableCell>
              <TableCell>100</TableCell>
              <TableCell>
                <IconButton color="error">
                  <Block />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>User 1</TableCell>
              <TableCell>user@mail.com</TableCell>
              <TableCell>+123 4567 8910</TableCell>
              <TableCell>100</TableCell>
              <TableCell>
                <IconButton color="error">
                  <Block />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>User 1</TableCell>
              <TableCell>user@mail.com</TableCell>
              <TableCell>+123 4567 8910</TableCell>
              <TableCell>100</TableCell>
              <TableCell>
                <IconButton color="error">
                  <Block />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
};

export default Users;
