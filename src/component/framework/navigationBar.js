import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../graphsix.svg';

export default function ButtonAppBar() {
  const [count,setcount] = React.useState('Lv1');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mb:0.5 }}
          >
        <img src={logo} className="App-logo" alt="logo"  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ }}>
          {count}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign: 'center'}}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{  }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
