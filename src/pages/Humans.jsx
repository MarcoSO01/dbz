import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { Grid, Container } from '@mui/material';

function Humans() {
  const [humans, setHumans] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        const filteredHumans = response.data.results.filter(character => character.species === 'Human');
        setHumans(filteredHumans);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {humans.map(character => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Humans;
