import React from 'react';
import Box from '@mui/material/Box';
import imges from '../../Imges/404.png'; 
import Button from '@mui/material/Button';

export default function Demo() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column',
      }}
    >
      <img
        alt="found404"
        src={imges}
        style={{
          borderRadius: 1,
          margin: 5,
          padding: 40,
          height: 250,
          width: 350,
        }}
      />
      <Button
        variant="outlined"
        style={{
          borderColor:'#0B885B',
          color:'#0B885B',
        }}
      >
        back to home
      </Button>
    </Box>
  );
}
