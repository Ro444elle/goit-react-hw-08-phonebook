import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/operations';
import TextField from '@mui/material/TextField';
import { Box, InputAdornment, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  return (
    <Box>
      <Paper>
        <TextField
          fullWidth
          variant="outlined"
          onChange={e => handleFilterChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
                <span sx={{ marginLeft: '4px' }} />
              </InputAdornment>
            ),
          }}
          sx={{ borderRadius: '20px', padding: '20px' }}
          placeholder="Search by name"
        />
      </Paper>
    </Box>
  );
}
