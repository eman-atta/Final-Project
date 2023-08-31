import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';



const gridStyle = {
  display: 'flex',
  justifyContent: "space-around",
  padding: "30px",
  paddingTop: "50px",

};


export default function ComplexGrid() {
  return (

    <div>
      <Grid container style={gridStyle}>
        <Typography variant="h5" align="center" gutterBottom style={{ color: '#0B885B' }}>
          User Information
        </Typography>

      </Grid>

      <Paper

        sx={{
          padding: 5,
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
        <Grid style={{ display: 'flex', justifyContent: 'center', spacing: 'px' }}>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <PermIdentityIcon
              aria-label="add to favorites"
              style={{ color: "#0B885B" }}
            >
              <FavoriteIcon />
            </PermIdentityIcon>
            <Button size="small" style={{ textTransform: 'capitalize', color: '#000' }}>
              <Link to='/ProfilePages' className='btn-link' style={{ color: '#000' }}> BIO</Link>
            </Button>


          </Grid>

          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <HomeOutlinedIcon
              aria-label="add to favorites"
              style={{ color: "#0B885B" }}
            >
              <FavoriteIcon />
            </HomeOutlinedIcon>
            <Button size="small" style={{ textTransform: 'capitalize', color: '#000' }}>
              <Link to='/Houses ' className='btn-link' style={{ color: '#000' }}> Houses</Link>
            </Button>


          </Grid>

          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <AddOutlinedIcon
              aria-label="add to favorites"
              style={{ color: "#0B885B" }}
            >
              <FavoriteIcon />
            </AddOutlinedIcon>

            <Button size="small" style={{ textTransform: 'capitalize', color: '#000' }}>
              <Link to='/AddHouse ' className='btn-link' style={{ color: '#000' }}> Add new house</Link>
            </Button>




          </Grid>




        </Grid>


        <Grid container spacing={2} padding={5}>

          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" display="flex" alignItems="start" style={{ height: '200px' }}>
              <Grid item >
                <Grid style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    component="h4"
                    variant="h6"
                    display="flex"
                    align="justify"
                    color="#0B885B"
                    width="120px"
                    height="80px"           >
                    Username:
                  </Typography>
                  <Typography
                    height="65px"
                  >eman atta</Typography>
                </Grid>

                <Grid style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    component="h4"
                    variant="h6"
                    display="flex"
                    align="justify"
                    color="#0B885B"
                    width="80px"
                    height="80px"
                  >
                    Email:
                  </Typography>
                  <Typography
                    height="65px"
                  >eman@gmail.com</Typography>
                </Grid>
                <Grid style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    component="h4"
                    variant="h6"
                    display="flex"
                    align="justify"
                    color="#0B885B"
                    width="120px"
                    height="80px"

                  >
                    Password:
                  </Typography>
                  <Typography
                    height="65px"

                  >*********</Typography>
                </Grid>


              </Grid>

            </Grid>
          </Grid>


        </Grid>

        <Stack spacing={2} direction="row" display="flex" justifyContent="flex-end" width="70%">
          <Button variant="outlined"
            style={{ color: '#0B885B', borderColor: '#0B885B', borderRadius: '8px', width: '120px' }}>
            <Link to='/*' className='btn-link' style={{ widows: '4x00p', color: '#000' }}>Delete </Link>

          </Button>
          <Button variant="outlined"
            style={{ color: '#0B885B', borderColor: '#0B885B', borderRadius: '8px', width: '120px' }}>
            <Link to='/*' className='btn-link' style={{ widows: '4x00p', color: '#000' }}> Edit </Link>
          </Button>
        </Stack>


      </Paper>
    </div>
  );
}
