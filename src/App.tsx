import React, { useState } from 'react';
import {
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
} from '@mui/material';
import './App.css';
import { AppbarComponent } from './components/Appbar';

const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });

  const handleDrawerToggle = React.useCallback(() => {
    // toggle drawer here
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppbarComponent handleDrawerToggle={handleDrawerToggle} />
    </ThemeProvider>
  );
};

export default App;
