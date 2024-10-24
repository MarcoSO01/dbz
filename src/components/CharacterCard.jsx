import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="h5">{character.name}</Typography>
        <Button variant="contained" color="primary" component={Link} to={`/characters/${character.id}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
