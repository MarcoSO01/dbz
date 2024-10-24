import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Acerca de esta aplicación
      </Typography>
      <Typography variant="body1" component="p" mt={2}>
        Esta aplicación fue desarrollada usando React, Material UI, y la API de Rick and Morty.
        Permite visualizar personajes de la serie, filtrarlos por especie, y obtener más detalles
        sobre cada personaje individualmente.
      </Typography>
    </Container>
  );
}

export default About;
