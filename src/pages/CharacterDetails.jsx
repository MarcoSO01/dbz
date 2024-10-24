/*DETALLES DEL PERSONAJE*/
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import axios from 'axios';
import { Container, Typography, Box, Grid, Button } from '@mui/material';

function CharacterDetail() {
  const { id } = useParams(); // Obtener el ID del personaje de la URL
  const navigate = useNavigate(); // Inicializar useNavigate
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load character details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="h5">Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="h5">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography 
        variant="h4" 
        style={{ 
          fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', 
          textAlign: 'center', 
          marginBottom: '20px' 
        }}
      >
        Información
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <img src={character.image} alt={character.name} style={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6"><strong>Nombre:</strong> {character.name}</Typography>
            <Typography variant="h6"><strong>Estado:</strong> {character.status}</Typography>
            <Typography variant="h6"><strong>Especie:</strong> {character.species}</Typography>
            <Typography variant="h6"><strong>Género:</strong> {character.gender}</Typography>
            <Typography variant="h6"><strong>Origen:</strong> {character.origin.name}</Typography>
            <Typography variant="h6"><strong>Ubicación:</strong> {character.location.name}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate(-1)} // Navegar a la página anterior
        style={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Atrás
      </Button>
    </Container>
  );
}

export default CharacterDetail;



