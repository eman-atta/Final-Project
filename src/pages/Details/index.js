import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import HotelIcon from '@mui/icons-material/Hotel';
import RoomIcon from '@mui/icons-material/Room';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';




const cards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwxNTJ8fGhvdXNlfGVufDB8fHx8MTY5MzAwOTY0MHww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',

  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw2M3x8aG9tZXxlbnwwfHx8fDE2OTMwODU4ODl8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',

  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw1NHx8aG9tZXxlbnwwfHx8fDE2OTMwODU4MjN8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',

  },
  

];


const defaultTheme = createTheme();



const Details =() =>{




  const { id } = useParams();
  const [house, setHouse] = useState({});

  const getHouse = useCallback(async () => {
    const response = await fetch(`https://my-json-server.typicode.com/eman-atta/mock-api/house/${id}`);
    const FinalData = await response.json();
    setHouse(FinalData);


  }, [id]);

  useEffect(() => {
    getHouse();
  }, [getHouse]);

  return (
    <>
       
           <CardMedia sx={{ pt: '50%',borderRadius:'8px',margin:'50px' }} image={house.photo} />

       


           <ThemeProvider theme={defaultTheme}>

      <main>

        <Container sx={{ py: 0 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56%',
                    }}
                    image={card.image}
                  />


                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>



      <div className="two-column-container">
        <div className="column">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia className="card-image" sx={{ objectFit: 'contain' }} image={house.photo} />
          </Card>
        </div>

        <div className="column" margin="50px">
            <Typography
              component="h2"
              variant="h4"
              align="justify"
              color="text.primary"
              margin="50px"
            >
              About This Home
            </Typography>
          <Typography
              variant="p"
              color="text.secondary"
              display="flex"
              width= "85%"
              padding="20px 0 0 0"
              lineHeight="2"
              fontSize="larger"
              margin="50px"
            >
              Panoramic ocean and whitewater views from this estate property located in the only luxury single-family home gated community in La Jolla. Montoro is an exclusive gated community of custom built homes with elevated white water views overlooking the La Jolla Shores. Highly upgraded and professionally designed modern 6 bedroom and 7 bath home is located a short stroll from the world class beaches of La Jolla
            </Typography>
          <Grid container spacing={3} >
            <Grid xs display="flex" justifyContent="start" alignItems="center" gap="20px" paddingLeft="66px">
        <HotelIcon sx={{ color: '#0B885B', marginRight: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {house.bedroom}
        </Typography>
        <BathtubIcon sx={{ color: '#0B885B', marginLeft: 1, marginRight: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {house.bathroom}
        </Typography>
        <RoomIcon sx={{ color: '#0B885B', marginLeft: 1  }} />
        <Typography variant="body2" color="text.secondary">
          {house.location}
        </Typography>
        <Typography sx={{ marginLeft: 1, marginRight: 1 }}>{house.price}$</Typography>
            
 
            </Grid>
      
          </Grid>
          <Stack display="flex" width="90%" alignItems="end"  paddingTop="20px">

          <Button variant="outlined"
          style={{textTransform:'capitalize' }}
          sx={{
            flexGrow: 3,
            fontFamily: 'monospace',
            fontWeight: 300,
            color: '#0B885B',
            textDecoration: 'none',
            borderColor:'#0B885B',
          }}>
          
          <Link to="/" style={{ textDecoration: 'none', color: '#0B885B' ,width:'150px'}}>
                  Back
                </Link>
          </Button>
          </Stack>




        </div>
        
      </div>

    </>
  );
};

export default Details;
