import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';


const Img = styled('img')({
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '190px',
  maxHeight: '180px',
  borderRadius: '10px'
});
const gridStyle = {
  display: 'flex', // Define the style object with the display property
  justifyContent:"space-around",
  padding:"30px",
  paddingTop:"50px",
  
};


export default function ComplexGrid() {
  return (
    
    <div>
    <Grid container style={gridStyle}>
      <Typography variant="h5" align="center" gutterBottom>
      My Favorites House:
      </Typography>
<Button variant="contained" disableElevation style={{ backgroundColor: '#0B885B', color: 'white' }}>
  Delete
</Button>
    </Grid>

      <Paper
        sx={{
          paddingTop: 20,
          p: 5,
          border: 1,
          borderColor: '#0B885B',
          margin: 'auto',
          maxWidth: 900,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px',
          flexDirection: 'column',
          maxHeight: 1400
        }}
      >
         
      <Grid container spacing={2} padding={5}>
        <Grid item>
            <Img alt="complex" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2} display="flex"  alignItems= "center">
            <Grid item xs>
              <Typography
                component="h4"
                variant="h6"
                display ="flex"               
                align="justify"
                color="text.primary"
                width= "300px"              >
                About This Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Location: Gaza
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Category:   Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Rooms: 2 Price:
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Price: 50000$
              </Typography>
            </Grid>

          </Grid>
        </Grid>
        <Grid item style={{ width:"180px"}}>
        <IconButton
  aria-label="add to favorites"
  style={{ color: "#F40000" }} // Change icon color using inline style
>
  <FavoriteIcon />
</IconButton>
              <Button size="small" sx={{ color: '#0B885B' }}>View</Button> {/* Change button color */}

            </Grid>

      </Grid>


      <Grid container spacing={2} padding={5}>
        <Grid item>
            <Img alt="complex" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2} display="flex"  alignItems= "center">
            <Grid item xs>
              <Typography
                component="h4"
                variant="h6"
                display ="flex"               
                align="justify"
                color="text.primary"
                width= "300px"
              >
                About This Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Location: Gaza
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Category:   Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Rooms: 2 Price:
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Price: 50000$
              </Typography>
            </Grid>

          </Grid>
        </Grid>
        <Grid item style={{ width:"180px"}}>
        <IconButton
  aria-label="add to favorites"
  style={{ color: "#F40000" }} // Change icon color using inline style
>
  <FavoriteIcon />
</IconButton>
              <Button size="small" sx={{ color: '#0B885B' }}>View</Button> {/* Change button color */}

            </Grid>

      </Grid>
      <Grid container spacing={2} padding={5}>
        <Grid item>
            <Img alt="complex" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2} display="flex"  alignItems= "center">
            <Grid item xs>
              <Typography
                component="h4"
                variant="h6"
                display ="flex"               
                align="justify"
                color="text.primary"
                width= "300px"
              >
                About This Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Location: Gaza
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Category:   Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Rooms: 2 Price:
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Price: 50000$
              </Typography>
            </Grid>

          </Grid>
        </Grid>
        <Grid item style={{ width:"180px"}}>
        <IconButton
  aria-label="add to favorites"
  style={{ color: "#0B885B" }} // Change icon color using inline style
>
  <FavoriteIcon />
</IconButton>
              <Button size="small" sx={{ color: '#0B885B' }}>View</Button> {/* Change button color */}

            </Grid>

      </Grid>
      </Paper>
    </div>
  );
}
