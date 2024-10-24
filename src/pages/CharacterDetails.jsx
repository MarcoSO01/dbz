/*DETALLES DEL PERSONAJE*/
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

function CharacterDetails() {
  const { id } = useParams();  // Extraer el ID del personaje de la URL
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="h4" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body1">
            Status: {character.status}
          </Typography>
          <Typography variant="body1">
            Species: {character.species}
          </Typography>
          <Typography variant="body1">
            Gender: {character.gender}
          </Typography>
          <Typography variant="body1">
            Origin: {character.origin.name}
          </Typography>
          <Typography variant="body1">
            Location: {character.location.name}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CharacterDetails;
