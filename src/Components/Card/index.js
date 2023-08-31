import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

export default function MediaCard({ house }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const { id, photo, bedroom, title, location, bathroom } = house;

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Grid item xs={3} sm={6} md={3} width="300px">
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', Width:'350px' }}>
        <CardMedia
          sx={{
          
            pt: '56.25%',
          }}
          image={photo}
        />
        <CardContent sx={{ flexGrow: 1 ,display:'flex'}}>
          <HotelIcon sx={{ color: '#0B885B', marginRight: 1 }} />
          <Typography>{bedroom}</Typography>
          <BathtubIcon sx={{ color: '#0B885B', marginLeft: 1, marginRight: 1 }} />
          <Typography>{bathroom}</Typography>
          <RoomIcon sx={{ color: '#0B885B', marginLeft: 1 }} />
          <Typography>{location}</Typography>
          </CardContent>

          <Typography gutterBottom variant="h5" component="h2"margin={2}>
            {title}
          </Typography>
        <CardActions>
          <Button size="small">
            <Link to={`/Details/${id}`} style={{ textDecoration: 'none', color: '#0B885B' }}>
              View
            </Link>
          </Button>
          <Checkbox
            style={{ color: 'red' }}
            checked={isFavorite}
            onChange={handleFavoriteToggle}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          >
            
          </Checkbox>
        </CardActions>
      </Card>
    </Grid>
  );
}
