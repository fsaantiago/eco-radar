import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import NavigationDrawer from '@/components/drawer';
import Main from '@/views/Main';
import AnaliseTempo from '@/views/AnaliseTempo';
import Emergencia from '@/views/Emergencia';
import SaibaMais from '@/views/SaibaMais';
import Reports from '@/views/Reports';

const DRAWER_WIDTH = 240;
const COLLAPSED_DRAWER_WIDTH = 65;

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh', background: 'white' }}>
        <CssBaseline />
        <NavigationDrawer open={drawerOpen} onClose={toggleDrawer} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            transition: 'margin 0.2s, width 0.2s',
            ml: { sm: `${drawerOpen ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH}px` },
            width: { sm: `calc(100% - ${drawerOpen ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH}px)` },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            background: 'inherit',
            minHeight: '100vh',
            p: { xs: 1, sm: 3 },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/analise-tempo" element={<AnaliseTempo />} />
              <Route path="/emergencia" element={<Emergencia />} />
              <Route path="/saiba-mais" element={<SaibaMais />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App; 