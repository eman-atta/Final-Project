import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FacebookIcon from '@mui/icons-material/Facebook';
import Imges from '../../Imges/Call.png';

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
  borderRadius: '10px'
});


export default function ComplexGrid() {
  return (
    
    <div>
          <Grid container style={gridStyle}>
      <Typography variant="h3" align="center" gutterBottom>
      
            </Typography>

    </Grid>

      <Paper
        sx={{
      
          p: 5,
          border: 1,
          borderColor: '#0B885B',
          margin: 'auto',
          maxWidth: 1000,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px',
          flexDirection: 'column',
          maxHeight: '90%',
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
                color="text.primary"
                padding=" 0 0 15px 0"
               >
                We’d love to hear from you
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                component="h4"
                variant="h4"
                display ="flex"               
                align="justify"
                color="text.primary"
                padding=" 0 0 15px 0"
                   >
                Get in touch with us
              </Typography>
              <Grid item style={{ width:"180px", display:"flex" ,padding:" 0 0 25px 0"}}>
              <Grid item style={{  display:"flex"}}>
           <MarkunreadIcon
             aria-label="add to favorites"
             style={{ color: "#0B885B" , padding:"0 20 "}} 
            >
           </MarkunreadIcon>
             </Grid>
              <Typography variant="body2" color="text.secondary">
              emaatt854@gmail.com              
              </Typography>
              </Grid>
              
              <Grid item style={{ width:"180px", display:"flex" ,padding:" 0 0 15px 0"}}>
              <Grid item style={{  display:"flex"}}>
           <CallIcon
             aria-label="add to favorites"
             style={{ color: "#0B885B" , padding:"0 20 "}} 
            >
           </CallIcon>
             </Grid>
              <Typography variant="body2" color="text.secondary">
              0597632352              
              </Typography>
              </Grid>


              <Grid item style={{ width:"180px", display:"flex"}}>
              <Grid item style={{  display:"flex"}}>
           <FacebookIcon
             aria-label="add to favorites"
             style={{ color: "#0B885B" , padding:"0 20 "}} 
            >
           </FacebookIcon>
             </Grid>
              <Typography variant="body2" color="text.secondary">
              house-hunting                         
              </Typography>
              </Grid>


            </Grid>

          </Grid>
        </Grid>
        <Grid item>
            <Img alt="complex" src={Imges} />
          </Grid>




       </Grid>


      </Paper>
    </div>
  );
}
