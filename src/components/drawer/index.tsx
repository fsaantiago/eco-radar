import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Toolbar } from '@mui/material';
import { Menu as MenuIcon, Home, Cloud, Warning, Info, Assessment, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DRAWER_WIDTH = 240;
const COLLAPSED_DRAWER_WIDTH = 65;

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);

  const menuItems = [
    { text: 'Início', icon: <Home />, path: '/' },
    { text: 'Análise do Tempo', icon: <Cloud />, path: '/analise-tempo' },
    { text: 'Emergência', icon: <Warning />, path: '/emergencia' },
    { text: 'Saiba Mais', icon: <Info />, path: '/saiba-mais' },
    { text: 'Relatórios', icon: <Assessment />, path: '/reports' },
  ];

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onClose}
        sx={{ 
          mr: 2, 
          display: { sm: 'none' },
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1200
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: DRAWER_WIDTH 
          },
        }}
      >
        <Box sx={{ width: DRAWER_WIDTH }} role="presentation">
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                onClick={() => {
                  navigate(item.path);
                  onClose();
                }}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: open ? DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH,
            transition: 'width 0.2s ease-in-out',
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
          },
        }}
        open
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: expanded ? 'flex-end' : 'center', height: 64 }}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            size="large"
            style={{ color: 'white' }}
          >
            {expanded ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{ 
                cursor: 'pointer',
                minHeight: 48,
                justifyContent: expanded ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: expanded ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  opacity: expanded ? 1 : 0,
                  transition: 'opacity 0.2s ease-in-out'
                }} 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavigationDrawer; 