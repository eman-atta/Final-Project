import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import RoomIcon from '@mui/icons-material/Room';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import{Link} from 'react-router-dom';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function MediaCard({house}) {
  
    const {photo , bedroom, title ,location ,bathroom}= house
    
  return (


<Card sx={{ width:'30%',height: '100%', display: 'flex', flexDirection: 'column' }}
>z
      <CardMedia
           sx={{pt: '70%' }} 
                  image={photo}
      />
      <CardContent className='icon' sx={{ display: 'flex', alignItems: 'center' }}>
      <HotelIcon sx={{ color: '#0B885B', marginRight: 1 }} /> 
      <Typography variant="body2" color="text.secondary">
         {bedroom}
        </Typography>
        <BathtubIcon sx={{ color: '#0B885B', marginLeft: 1, marginRight: 1 }} />
        <Typography variant="body2" color="text.secondary">
         {bathroom}
        </Typography>
        <RoomIcon sx={{ color: '#0B885B', marginLeft: 1 }} /> 
        <Typography variant="body2" color="text.secondary">
         {location}
        </Typography>

      </CardContent>
      <Grid>
      <Typography gutterBottom variant="h5" component="div" sx={{ margin: 3 }}>
         {title}
        </Typography>
      </Grid>
      <CardActions>




        <Button   style={{ textTransform:'capitalize',size:'small' }}>                               
         <Link to='/Details' className='btn-link' style={{fontSize:' large',textDecoration: 'none'}}>
         View</Link>
          </Button>
        <div>
  <Checkbox style={{color:"red"}} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
</div>
      
      </CardActions>
    </Card>


  );
}