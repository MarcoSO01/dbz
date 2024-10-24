import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#88e23b' }}> {/* Fondo verde */}
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RICK AND MORTY
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/aliens">Aliens</Button>
        <Button color="inherit" component={Link} to="/humans">Humans</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


