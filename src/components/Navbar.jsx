import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar
      position="static" 
      sx={{
        background: 'linear-gradient(135deg, #ffefba 30%, #ff7e5f 90%)', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
            color: '#fff',
            fontWeight: 'bold',
            letterSpacing: '0.1rem',
          }}
        >
          DRAGONBALL Z
        </Typography>
        <Box sx={{ display: 'flex' }}>
          {['Home', 'Aliens', 'Humans', 'About'].map((text) => (
            <Button
              key={text}
              component={Link}
              to={`/${text.toLowerCase()}`}
              sx={{
                color: '#fff',
                fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
                padding: '10px 15px',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: '#ff6b6b',
                  color: '#fff',
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
