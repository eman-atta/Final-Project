import React, { useState, useEffect } from 'react';
import { CardContainer } from '../../Components';
import Header from '../../Components/Header';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Landing = () => {
    const [houses, setHouses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getHouses = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/eman-atta/mock-api/house");
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setIsLoading(false);
            setHouses(data);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getHouses();
    }, []);

    return (
        <>
            <Header />

            <Container maxWidth="sm">
                <Typography
                    align="center"
                    color="#0B885B"
                    fontSize="xx-large"
                    height="150px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    Our most popular house
                </Typography>
            </Container>

            <section className='grid-card' style={{ display: "flex", flexWrap: 'wrap', gap: '17px', justifyContent: 'center', maxWidth: '95%' }}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <CardContainer houses={houses} />
                )}
            </section>
        </>
    );
}

export default Landing;
