import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, #ffefba 30%, #ff7e5f 90%)',
        color: '#333',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
        },
        minHeight: '550px',
        width: '320px',
        margin: '100px', 
      }}
    >
      <Box sx={{ height: '450px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={character.image}
          alt={character.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'block',
            margin: '0 auto',
            filter: 'grayscale(20%) contrast(1.1)',
            transition: 'filter 0.4s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.filter = 'grayscale(0%) contrast(1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.filter = 'grayscale(20%) contrast(1.1)';
          }}
        />
      </Box>
      <CardContent sx={{ textAlign: 'center', padding: '20px' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: '1.4rem',
            letterSpacing: '1px',
            color: '#ff6b6b',
          }}
        >
          {character.name}
        </Typography>
        <Link
          to={`/characters/${character.id}`}
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            padding: '10px 14px',
            borderRadius: '25px',
            backgroundColor: '#ff6b6b',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            display: 'inline-block',
            marginTop: '15px',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#ff9276';
            e.target.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ff6b6b';
            e.target.style.color = '#ffffff';
          }}
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
