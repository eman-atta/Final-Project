import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import{Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Imges from '../../Imges/image11.png';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CloseIcon from '@mui/icons-material/Close';
const Img = styled('img')({
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  maxWidth: '280px',
  maxHeight: '300px',
  borderRadius: '10px'
});



const gridStyle = {
  display: 'flex', 
  justifyContent:"space-around",
  padding:"30px",
  paddingTop:"50px",
  
};


export default function ComplexGrid() {
  return (
    
    <div>
    <Grid container style={gridStyle}>
      <Typography variant="h5" align="center" gutterBottom style={{color:'#0B885B'}}>
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
          Height: 1500,
        }}
      >
        <Grid style={{display:'flex' , justifyContent:'center',margin:'40px' }}>
        <Grid item style={{ display:"flex", alignItems:"center"}}>
        <PermIdentityIcon
  aria-label="add to favorites"
  style={{ color: "#0B885B" }} 
>
  <FavoriteIcon />
</PermIdentityIcon>
              <Button size="small" style={{ textTransform:'capitalize',color: '#000' }}>
    <Link to='/ProfilePages' className='btn-link'  style={{color:'#000' }}> BIO</Link>
  </Button>


            </Grid>

            <Grid item style={{display:"flex", alignItems:"center"}}>
        <HomeOutlinedIcon
  aria-label="add to favorites"
  style={{ color: "#0B885B" }} 
>
  <FavoriteIcon />
</HomeOutlinedIcon>
              <Button size="small" style={{ textTransform:'capitalize',color: '#000' }}>
    <Link to='/Houses ' className='btn-link'  style={{color:'#000' }}> Houses</Link>
  </Button>


            </Grid>

            <Grid item style={{ display:"flex", alignItems:"center"}}>
        <AddOutlinedIcon
  aria-label="add to favorites"
  style={{ color: "#0B885B" }}
>
  <FavoriteIcon />
</AddOutlinedIcon>

              <Button size="small" style={{ textTransform:'capitalize',color: '#000' }}>
    <Link to='/AddHouse ' className='btn-link'  style={{color:'#000' }}> Add new house</Link>
  </Button>
            </Grid>
            
        </Grid>

        <Grid item xs={12} sm container>
          <Grid item xs container direction="column"  display="flex"  alignItems= "start" style={{height:'200px'}}>
            <Grid item >
     <Grid container spacing={1}>
    <Grid item>
    <Img alt="complex" src={Imges} />
  </Grid>
<Grid item xs={{width:"200px", height:"500px"}} sm container>
  <Grid item xs container direction="column" spacing={9} display="flex"  >
    
    <Grid item xs>
      <Typography
        component="h6"
        variant="h6"
        display ="flex"               
        align="justify"
        color="text.primary"
        padding=" 0 0 8px 25px"
        width="500px"
        justifyContent="space-between"
           >
Home Details     
<Grid>
<SaveAsIcon style={{color:'#0B885B', margin:'5px'}}/>
<CloseIcon style={{color:'#0B885B'}}/>

</Grid>

 </Typography>
      <Grid item style={{ width:"180px", display:"flex" , padding:' 0 0 8px 25px'}}>
 
      <Typography variant="body2" color="text.secondary">
      Location:               
      </Typography>
      </Grid>
      <Grid item style={{ width:"180px", display:"flex" , padding:' 0 0 8px 25px'}}>
      <Typography variant="body2" color="text.secondary">
      Mobile:            
      </Typography>
      </Grid>
      <Grid item style={{ width:"180px", display:"flex", padding:' 0 0 8px 25px'}}>
      <Typography variant="body2" color="text.secondary">
      Rooms:      </Typography>
      </Grid>
      <Grid item style={{ width:"180px", display:"flex", padding:' 0 0 8px 25px'}}>
      <Typography variant="body2" color="text.secondary">
      Price:   
        </Typography>
      </Grid>

    </Grid>

  </Grid>
</Grid>

</Grid>
            </Grid>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}
