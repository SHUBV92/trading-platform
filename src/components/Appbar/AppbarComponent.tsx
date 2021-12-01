import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  handleDrawerToggle: () => void;
}

export const AppbarComponent: React.FC<Props> = ({
  handleDrawerToggle,
}): JSX.Element => {
  return (
    <div>
      <AppBar position='static' variant='elevation'>
        <Toolbar variant='dense'>
          <IconButton color='inherit' onClick={handleDrawerToggle} edge='start'>
            <MenuIcon />
          </IconButton>
          <Typography variant='subtitle1' component='div'>
            React Repo Trading App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
