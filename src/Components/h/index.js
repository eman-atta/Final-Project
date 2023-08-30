import * as React from 'react';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#2493AB', // Change color of the search icon
}));

export default function Demo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        height: '550px',
        width: '95%',
        background: '#E9F4F7',
        margin: '24px',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 550,
          width: 700,
          maxHeight: { xs: 300, md: 550 },
          maxWidth: { xs: 350, md: 700 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 3,
          minWidth: { md: 400 },
        }}
      >
        <Box component="span" sx={{ fontSize: 31, color: '#2493AB', width:"300px" }}>
          Find Your New Home
        </Box>
        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            borderRadius: '5px',
            color: '#2493AB', 
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            width: 300,
            alignItems: 'center',
            border: '1px solid #2493AB', 
            '& svg': {
              fontSize: 21,
              mr: 0.5,
            },
          }}
        >
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            }
            sx={{
              outline: 'none', 
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
