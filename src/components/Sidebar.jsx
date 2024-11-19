import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        width: '100%', // Ancho completo
        height: '80px', // Ajustar la altura
        background: 'linear-gradient(135deg, #ffefba 30%, #ff7e5f 90%)',
        color: '#333',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Centrar horizontalmente los elementos
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000, // Asegura que la barra se muestre por encima del contenido
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://th.bing.com/th/id/OIP.xrctMHlalas8OjReVXrCLAHaFZ?rs=1&pid=ImgDetMain"
          alt="Encabezado"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '2px solid #ff6b6b',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginRight: '15px',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          DRAGONBALL Z
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }}>
        {['INICIO', 'ALIENIGENAS', 'HUMANOS', 'SOBRE'].map((text, index) => (
          <Button
            key={text}
            component={Link}
            to={`/${text.toLowerCase()}`}
            sx={{
              color: '#fff',
              backgroundColor: index % 2 === 0 ? '#ff6b6b' : '#ff9276',
              marginLeft: '12px',
              padding: '10px 15px',
              justifyContent: 'center',
              borderRadius: '5px',
              transition: 'background-color 0.3s, transform 0.2s',
              '&:hover': {
                backgroundColor: index % 2 === 0 ? '#ff7e5f' : '#ffb1a3',
                transform: 'scale(1.05)',
              },
            }}
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
