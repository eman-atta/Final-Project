import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Imges from '../../Imges/house.png';

const gridStyle = {
  display: 'flex',
  justifyContent:"space-around",
  padding:"30px",
  paddingTop:"50px",
  color:"#0B885B",
  
};
const Img = styled('img')({
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '280px',
  maxHeight: '300px',
  borderRadius: '10px',
  padding:'20px'
});


export default function ComplexGrid() {
  return (
    
    <div>
          <Grid container style={gridStyle}>
      <Typography variant="h3" align="center" gutterBottom>
      
            </Typography>

    </Grid>
    <Grid item>
            <Img alt="complex" src={Imges} />
          </Grid>

      <Paper
        sx={{
      
          p: 5,
          border: 1,
          borderColor: '#240B885B93AB',
          margin: 'auto',
          maxWidth: 700,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px',
          flexDirection: 'column',
          maxHeight: '100%',
          justifyContent:'center',
        }}
      >
         
      <Grid container spacing={1}>

        <Grid item xs={{width:"400px", height:"500px"}} sm container>
          <Grid item xs container direction="column" spacing={2} display="flex"  >
            <Grid item xs>
              <Typography
                component="h3"
                variant="h4"
                display ="flex"               
                align="justify"
                color="#0B885B"
                padding=" 0 0 15px 0"
                justifyContent="center"
               >
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse ultrices eget amet, aliquam. A, scelerisque habitant congue diam sodales ut id. Faucibus amet, tempus urna, ven Lorem ipsum dolor sit a  m et, consectetur adipiscing elit.   ultrices eget amet, aliquam. A, scelerisque habitant congue diam sodales ut id. Faucibus   , tempus urna, ven Lorem ipsum dolor sit amet, consectetur adipi sc ing elit. Habitasse  ultrices eget amet, aliquam. A, scelerisque habitant congue diam sodales ut id. Faucibus amet, tempus urna, ven Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse ultrices eget amet, aliquam. A, sceler    isque habitant congue diam sodales ut id. Faucibus amet, tempus urna, ven
               </Typography>
            </Grid>


          </Grid>
        </Grid>




       </Grid>


      </Paper>
    </div>
  );
}
