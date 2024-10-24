/*PAGINA DE INICIO*/
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { Grid, Container, CircularProgress, Typography } from '@mui/material';

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
        setLoading(false); // Cambiar a false cuando se cargan los datos
      })
      .catch(error => {
        console.log(error);
        setLoading(false); // Cambiar a false si hay un error
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6" align="center">Cargando personajes...</Typography>
        <CircularProgress />
      </Container>
    ); // Mostrar un indicador de carga
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {characters.map(character => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
