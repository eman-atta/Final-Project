import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <CssBaseline />
      <main >
        <Box
          sx={{
            bgcolor: 'background.paper',
            padding:'57px 140px 0 120px',
            display: 'flex',
            width: '100%',
            justifyContent: 'center', 
          }}
        >
          <Container maxWidth="1000px">
            <Typography
              component="h2"
              variant="h4"
              align="justify"
              color="text.primary"
            >
              About This Home
            </Typography>
            <Typography
              variant="p"
              color="text.secondary"
              display="flex"
              width= "100%"
              padding="20px 0 0 0"
              lineHeight="2"
              fontSize="larger"
            >
              Panoramic ocean and whitewater views from this estate property located in the only luxury single-family home gated community in La Jolla. Montoro is an exclusive gated community of custom built homes with elevated white water views overlooking the La Jolla Shores. Highly upgraded and professionally designed modern 6 bedroom and 7 bath home is located a short stroll from the world class beaches of La Jolla
            </Typography>
          </Container>
        </Box>
        

      </main>
    </ThemeProvider>
  );
}
