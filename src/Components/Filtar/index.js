import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import CardContainer from '../../Components/CardContainer';
import SearchIcon from '@mui/icons-material/Search';

const Filtar = () => {
  const [location, setLocation] = useState('');
  const [bedroom, setBedroom] = useState();
  const [bathroom, setBathroom] = useState();
  const [housesData, setHousesData] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/eman-atta/mock-api/house");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setHousesData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredHouses = housesData.filter((house) =>
      (bedroom === undefined || house.bedroom === +bedroom))
      .filter((house) => (bathroom === undefined || house.bathroom === +bathroom))
      .filter((house) => (location === '' || house.location.toLowerCase().includes(location.toLowerCase())));
    setFilteredHouses(filteredHouses);
  };

  const handleBedroomChange = (event) => {
    setBedroom(event.target.value);
  };

  const handleBathroomChange = (event) => {
    setBathroom(event.target.value);
  };

  return (
    <>
    <div style={{ width: '85%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>

        <FormControl sx={{ minWidth: '20%' }}>
          <TextField
            placeholder='Bedroom'
            value={bedroom}
            name="Bedroom"
            type='number'
            onChange={handleBedroomChange}
            style={{display:'flex', border:'5px'}}
          
            displayEmpty
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: '20%', minHeight:'20%' }}>
          <TextField
            placeholder='Bathroom'
            value={bathroom}
            name="bathroom"
            type='number'
            onChange={handleBathroomChange}
            displayEmpty
            style={{height:'0%', padding:'0px 20px'}}
          />
        </FormControl>

        <Paper
          
          sx={{ display: 'flex', alignItems: 'center', width: '20%',height:'40px', border:'10px' ,borderColor:'#000' }}
        >
          <InputBase
            sx={{ ml: 5, flex: 1 ,border:'5px'}}
            placeholder=" Search"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Paper>

        <Button
      variant="contained"
      onClick={handleSearch}
      style={{
        backgroundColor: '#0B885B',
        borderRadius:'11px',
      }}
    >
      <SearchIcon  />
      <FormControl style={{ color: '#fff' }} />
    </Button>



      </div>
      <div style={{display:'flex',flexWrap:'wrap' ,gap: '28px',paddingTop:'20PX'}}>
          <CardContainer  houses={filteredHouses} />
        </div>
    </div>

     
    </>
  );
}

export default Filtar;
