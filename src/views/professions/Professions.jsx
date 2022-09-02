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

import { Edit, Delete, Visibility } from "@mui/icons-material";

const Professions = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h4">Professions</Typography>
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
              <TableCell>Profession</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>
                <IconButton color="success">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>
                <IconButton color="success">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>
                <IconButton color="success">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Officer</TableCell>
              <TableCell>
                <IconButton color="success">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Janitor</TableCell>
              <TableCell>
                <IconButton color="success">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
                </IconButton>
                <IconButton color="info">
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Chairman</TableCell>
              <TableCell>
                <IconButton color="success">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Delete />
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

export default Professions;
