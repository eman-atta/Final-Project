import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const COPYRIGHT_TEXT = '2023 all rights reserved';

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0B885B', margin:'40px ' ,width:'95%'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="body1" 
            sx={{
              flexGrow: 1,
              display: 'flex',
              fontFamily: 'monospace',
              color: 'inherit',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {COPYRIGHT_TEXT}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
