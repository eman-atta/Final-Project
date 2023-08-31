import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import{Link} from 'react-router-dom';


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#0B885B',
}));

export default function Demo() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        maxWidth: '100%',
        backgroundImage:
          'url(https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/door-A-Ar-190122-2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          minWidth: '100%',
          minHeight: '100%',
        }}
      ></Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: '100%',
          alignItems: 'center',
          minHeight: '100%',
        }}
      >
        <Box
          component="span"
          sx={{ fontSize: 31, color: '#0B885B', width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          Find Your New Home
        </Box>

        <Box
          sx={{
            mt: 1.5,
            p: 0.5,
            borderRadius: '10px',
            color: '#0B885B',
            fontWeight: 'medium',
            display: 'flex',
            fontSize: 12,
            alignItems: 'center',
            border: '2px solid #0B885B',
            width: '40%',
            height: '10%',
            '& svg': {
              fontSize: 31,
              mr: 0.5,
              display: 'flex',
              width: '100%',
              color: '#0B885B',
            },
          }}
        >
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={
              <SearchIconWrapper>
                        <Link to='/Search' className='btn-link'  style={{ widows:'4x00p',color:'#000' }}> 

                <SearchIcon  />
                </Link>

              </SearchIconWrapper>
            }
            sx={{
              outline: 'none',
              color: '#0B885B',
              fontSize: '17px',
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}

          />
        </Box>
      </Box>
    </Box>
  );
}
