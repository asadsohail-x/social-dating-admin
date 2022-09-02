import {
  Box,
  Button,
  Container,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const FilterPrefs = () => {
  const [isRadiusEditing, setRadiusEditing] = useState(false);
  const [isFilterLimitEditing, setFilterlimitEditing] = useState(false);
  const [formState, setFormState] = useState({
    radius: 6,
    filterLimit: 10,
  });

  const handleRadiusChange = (e) => {
    setRadiusEditing((_) => true);
    handleFormStateChange(e);
  };

  const handleFilterLimitChange = (e) => {
    setFilterlimitEditing((_) => true);
    handleFormStateChange(e);
  };

  const handleFormStateChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h4">Filter Preferences</Typography>
      </Box>
      <FormGroup
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <FormLabel>Search Radius</FormLabel>
        <FormLabel sx={{ mb: 2 }}>
          <small>
            Determines the default radius within which the users can view each
            other.
          </small>
        </FormLabel>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.25s all ease-in-out",
              width: isRadiusEditing ? "auto" : "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              name="radius"
              value={formState.radius}
              onChange={handleRadiusChange}
            />
            <Box sx={{ mx: 2 }}>km</Box>
          </Box>
          {isRadiusEditing && (
            <Box>
              <Button
                sx={{ m: 1 }}
                color="customSec"
                variant="outlined"
                onClick={() => setRadiusEditing(false)}
              >
                Save
              </Button>
              <Button
                sx={{ m: 1 }}
                color="customSec"
                onClick={() => setRadiusEditing(false)}
              >
                Discard
              </Button>
            </Box>
          )}
        </Box>
      </FormGroup>

      <FormGroup
        sx={{
          py: 2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <FormLabel>Filter Limit</FormLabel>
        <FormLabel sx={{ mb: 2 }}>
          <small>
            Determines the number of users that will be sent on the home screen.
            (Lower means more API calls to the server and Higher means heavier
            bandwidth - better for it to be between 20 and 50)
          </small>
        </FormLabel>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.25s all ease-in-out",
              width: isFilterLimitEditing ? "auto" : "100%",
            }}
          >
            <TextField
              size="small"
              fullWidth
              name="filterLimit"
              value={formState.filterLimit}
              onChange={handleFilterLimitChange}
            />
            <Box sx={{ mx: 2 }}>Users</Box>
          </Box>
          {isFilterLimitEditing && (
            <Box>
              <Button
                sx={{ m: 1 }}
                color="customSec"
                variant="outlined"
                onClick={() => setFilterlimitEditing(false)}
              >
                Save
              </Button>
              <Button
                sx={{ m: 1 }}
                color="customSec"
                onClick={() => setFilterlimitEditing(false)}
              >
                Discard
              </Button>
            </Box>
          )}
        </Box>
      </FormGroup>
    </Container>
  );
};

export default FilterPrefs;
