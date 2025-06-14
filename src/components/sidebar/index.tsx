import React, { useState } from 'react';
import ER from '../../assets/icon/logo-er.png';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ChevronLeft, Menu as MenuIcon } from '@mui/icons-material';

interface SidebarProps {
  onMenuClick: (idx: number) => void;
  activeIndex: number;
}

const menuItems = [
  'Início',
  'Análise do tempo',
  'Emergência',
  'Alertas reportados',
  'Saiba mais'
];

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick, activeIndex }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: expanded ? '450px' : '80px',
        height: '100vh',
        maxWidth: 1920,
        background: '#246240',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1000,
        boxShadow: '2px 0 8px rgba(0,0,0,0.04)',
        transition: 'width 0.2s',
      }}
    >
      <div style={{ padding: expanded ? '24px 32px 0 32px' : '24px 8px 0 8px' }}>
        {/* Botão de expandir/recolher */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: expanded ? 'flex-end' : 'center', height: 64 }}>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            size="large"
            style={{ color: 'white' }}
          >
            {expanded ? <ChevronLeft /> : <MenuIcon />}
          </IconButton>
        </div>
        <div style={{ marginBottom: '48px', display: 'flex', justifyContent: expanded ? 'flex-start' : 'center' }}>
          {expanded && (
            <img 
              src={require('../../assets/icon/eco-radar-lg.png')} 
              alt="Eco Radar" 
              style={{ width: '200px', height: 'auto', display: 'block' }}
            />
          )}
        </div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item, idx) => (
              <li
                key={item}
                style={{
                  background: activeIndex === idx ? '#1A4D32' : (hovered === idx ? '#0E4024' : 'transparent'),
                  borderRadius: '4px',
                  marginBottom: '16px',
                  padding: expanded ? '12px 0 12px 8px' : '12px 0',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: expanded ? '36px' : '0px',
                  fontFamily: 'Poppins, sans-serif',
                  cursor: 'pointer',
                  transition: 'background 0.2s, font-size 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: expanded ? 'flex-start' : 'center',
                  minHeight: '48px',
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onMenuClick(idx)}
              >
                {expanded && item}
                {!expanded && <span style={{ width: '100%' }}></span>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div style={{ padding: '0 0 32px 0', display: 'flex', justifyContent: 'center' }}>
        {/* Espaço para a logo */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
          marginRight: '28px'
        }}>
          <img src={ER} alt="Logo" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;