import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, Divider } from '@mui/material';

const About = () => {
  return (
    <Container 
      maxWidth="md" 
      sx={{ 
        marginTop: '100px', 
        padding: '20px', 
        background: 'linear-gradient(135deg, #ffefba 30%, #ff7e5f 90%)', 
        borderRadius: '10px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        marginLeft: { sm: '300px' },
      }}
    >
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Card 
          sx={{ 
            borderRadius: '15px', 
            boxShadow: 3, 
            backgroundColor: '#ff6b6b',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            sx={{
              height: { xs: 200, md: 300 },
              width: '100%',
              objectFit: 'contain',
            }}
            image="https://wallpapercave.com/wp/wp2091923.png"
            alt="Dragon Ball Z"
          />
          <CardContent>
            <Typography 
              variant="h4" 
              component="div" 
              align="center" 
              gutterBottom
              style={{ color: '#fff' }}
            >
              DRAGON BALL SUPER
            </Typography>
            <Divider sx={{ marginY: 2, backgroundColor: '#fff' }} />
            <Typography 
              variant="h5" 
              component="div" 
              align="center" 
              gutterBottom
              style={{ color: '#fff' }}
            >
              La Historia
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              align="justify" 
              style={{ lineHeight: '1.6', color: '#333', marginBottom: '16px' }}
            >
              Dragon Ball Super sigue las aventuras de Goku y sus amigos tras la derrota de Majin Buu. La serie explora nuevos desafíos, incluyendo enfrentamientos con dioses, guerreros de otros universos y enemigos legendarios.
            </Typography>

            <Divider sx={{ marginY: 2, backgroundColor: '#fff' }} />

            <Typography 
              variant="h5" 
              component="div" 
              align="center" 
              gutterBottom
              style={{ color: '#fff' }}
            >
              Transformaciones y Nuevos Arcos
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              align="justify" 
              style={{ lineHeight: '1.6', color: '#333', marginBottom: '16px' }}
            >
              La serie introduce transformaciones icónicas como el Super Saiyajin Dios y el Ultra Instinto. Entre los arcos más destacados están la Batalla de los Dioses, la Resurrección de Freezer, el Torneo de Poder y el regreso de Broly.
            </Typography>

            <Divider sx={{ marginY: 2, backgroundColor: '#fff' }} />

            <Typography 
              variant="h5" 
              component="div" 
              align="center" 
              gutterBottom
              style={{ color: '#fff' }}
            >
              Expansión del Universo
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              align="justify" 
              style={{ lineHeight: '1.6', color: '#333', marginBottom: '16px' }}
            >
              Dragon Ball Super amplía el universo de Dragon Ball, destacando por su acción, humor y la exploración de temas de multiversos y dioses, llevando la historia a nuevos niveles.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;
