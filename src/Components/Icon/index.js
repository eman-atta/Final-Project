import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import RoomIcon from '@mui/icons-material/Room';




const defaultTheme = createTheme();


export default function Album() {
  return (

    <ThemeProvider theme={defaultTheme} sx={{ display: 'flex', alignItems: 'center' }}>
      <CssBaseline />
                  <CardContent className='icon' sx={{ display: 'flex', alignItems: 'center' ,padding: '17px 140px'}}>
                    <HotelIcon sx={{ color: '#0B885B', marginRight: 1 ,fontSize: 30}} /> 
                    <Typography variant="body2">2</Typography> 
                    <BathtubIcon sx={{ color: '#0B885B', marginLeft: 1, marginRight: 1,fontSize: 30 }} /> 
                    <Typography variant="body2">2</Typography> 
                    <RoomIcon sx={{ color: '#0B885B', marginLeft: 1,fontSize: 30 }} /> 
                    <Typography variant="body2" sx={{ marginLeft: 1}}>Gaza</Typography> 
                    <Typography variant="body2" sx={{ marginLeft:4 }}>100$ / week</Typography> 

                  </CardContent>
    </ThemeProvider>

  );
}