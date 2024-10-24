import React, { useEffect, useState } from 'react';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import CharacterCard from '../components/CharacterCard';
import axios from 'axios';

const Aliens = () => {
  const [aliens, setAliens] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchAliens = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const filteredAliens = response.data.results.filter(character => character.species === 'Alien');
        setAliens(filteredAliens);
      } catch (error) {
        console.error('Error fetching alien characters:', error);
      } finally {
        setLoading(false); // Cambiar a false al finalizar la carga
      }
    };

    fetchAliens();
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6" align="center">Cargando alienígenas...</Typography>
        <CircularProgress />
      </Container>
    ); // Mostrar un indicador de carga
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        {aliens.map(alien => (
          <Grid item xs={12} sm={6} md={4} key={alien.id}>
            <CharacterCard character={alien} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Aliens;

