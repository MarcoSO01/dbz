import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia, CircularProgress, Alert, Divider } from '@mui/material';

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let allCharacters = [];
        let url = 'https://dragonball-api.com/api/characters';

        while (url) {
          const response = await axios.get(url);
          const data = response.data;

          allCharacters = [...allCharacters, ...data.items];
          url = data.links.next || null;
        }

        setCharacters(allCharacters);
        const foundCharacter = allCharacters.find(char => char.id === parseInt(id));
        setCharacter(foundCharacter);
      } catch (err) {
        console.error(err);
        setError('No se pudieron cargar los detalles del personaje.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <CircularProgress color="primary" />
        <Typography variant="h5" style={{ marginTop: '20px' }}>Cargando...</Typography>
      </Container>
    );
  }

  if (error || !character) {
    return (
      <Container maxWidth="lg" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Alert severity="error">{error || 'Personaje no encontrado.'}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', padding: '20px' }}>
      <Typography
        variant="h4"
        style={{
          fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#ff7e5f',
          fontWeight: 'bold',
        }}
      >
        Detalles del Personaje
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ padding: '20px', background: 'linear-gradient(135deg, #ffefba 30%, #ff7e5f 90%)', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <CardMedia
              component="img"
              height="200"
              image={character.image}
              alt={character.name}
              sx={{ 
                borderRadius: '10px', 
                marginBottom: '20px', 
                width: 'auto', 
                maxHeight: '200px', 
                objectFit: 'contain',
                display: 'block', // Para centrar con margin
                margin: '0 auto'  // Centramos horizontalmente
              }}
            />
            <CardContent>
              <Typography variant="h5" style={{ color: '#000', fontWeight: 'bold', textAlign: 'center' }}>
                {character.name}
              </Typography>
              <Divider sx={{ marginY: 2, backgroundColor: '#FFF' }} />
              <Box>
                <Typography variant="body1" style={{ marginBottom: '10px', color: '#333', lineHeight: 1.6 }}>
                  <strong>Ki:</strong> {character.ki}<br />
                  <strong>Max Ki:</strong> {character.maxKi}<br />
                  <strong>Raza:</strong> {character.race}<br />
                  <strong>Género:</strong> {character.gender}
                </Typography>
                <Typography variant="body1" style={{ color: '#333', lineHeight: 1.6 }}>
                  <strong>Descripción:</strong> {character.description}<br />
                  <strong>Afilicación:</strong> {character.affiliation}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff6b6b',
                  color: '#FFF',
                  marginTop: '20px',
                  '&:hover': { backgroundColor: '#ff9276' }
                }}
                onClick={() => navigate(-1)}
              >
                Atrás
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CharacterDetail;
