import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rick and Morty App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/aliens">Aliens</Button>
        <Button color="inherit" component={Link} to="/humans">Humans</Button>
        <Button color="inherit" component={Link} to="/about">Acerca de...</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
