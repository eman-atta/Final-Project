import React,{useState,useEffect}  from 'react'; 
import CardContainer from '../../Components/CardContainer';
import Hedar from '../../Components/Hedar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './style.css'

const Landing = ()=> {

    const [house, setHouse] = useState([]);
    const getHouse = async () => {
        const response = await fetch("https://my-json-server.typicode.com/eman-atta/mock-api/house");
        const FinalData = await response.json();
        console.log(response.url)
        setHouse(FinalData)
    }


            //useEffect()
            useEffect(() => {
                getHouse();
               
                 }, []
                  )

    return <>


    <Hedar />

    <Container maxWidth="sm">
            <Typography
    
              align="center"
              color="#0B885B"
              fontSize=" xx-large"
              height="150px"
              display="flex"
              alignItems="center"
              justifyContent="center"

              
            >
              Our most popular house
            </Typography>
          </Container>

 <section className='grid-card' style={{display:"flex", flexWrap: 'wrap', gap:'17px', justifyContent:'center' ,maxWidth:'95%'}}>
 <CardContainer houses={house}/>
 </section>
 
    
 
    </>
}

export default Landing