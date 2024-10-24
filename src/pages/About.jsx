import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Box display="flex" justifyContent="center">
        <Card>
          <CardMedia
            sx={{
              height: { xs: 200, md: 300 }, // Altura ajustable para diferentes tamaños de pantalla
              width: '100%', // Ancho completo de la tarjeta
              objectFit: 'cover', // Ajusta la imagen para cubrir el área del contenedor
            }}
            image="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/6ace005a-41eb-4e44-bf13-abdfaa9e5143/7437d77d-3152-49bd-bc07-63950bd52060?host=wbd-images.prod-vod.h264.io&partner=beamcom" // Puedes cambiar esta URL por una imagen relevante
            alt="Rick and Morty"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
               Rick and Morty
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">
              "Rick and Morty" es una serie de televisión animada creada por Justin Roiland y Dan Harmon. 
              La serie sigue las aventuras de un científico excéntrico y alcohólico llamado Rick Sánchez. 
              y su nieto de buen corazón pero inquieto Morty Smith. Emprenden peligrosas aventuras a través 
              el multiverso, lidiando con diversas amenazas y dilemas morales.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default About;

