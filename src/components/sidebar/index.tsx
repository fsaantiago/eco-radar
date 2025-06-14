import React, { useState, useEffect } from 'react';
import ER from '../../assets/icon/logo-er.png';
import HomeIcon from '../../assets/image/sidebar/home-icon.png';
import AnalysisIcon from '../../assets/image/sidebar/analisys-icon.png';
import EmergencyIcon from '../../assets/image/sidebar/emergency-icon.png';
import ReportIcon from '../../assets/image/sidebar/phone-icon.png';
import AboutIcon from '../../assets/image/sidebar/about-icon.png';
import { useNavigate } from 'react-router-dom';
import { IconButton, useMediaQuery } from '@mui/material';
import { ChevronLeft, Menu as MenuIcon } from '@mui/icons-material';

interface SidebarProps {
  onMenuClick: (idx: number) => void;
  activeIndex: number;
}

const menuItems = [
  { label: 'Início', icon: HomeIcon },
  { label: 'Análise do tempo', icon: AnalysisIcon },
  { label: 'Emergência', icon: EmergencyIcon },
  { label: 'Alertas reportados', icon: ReportIcon },
  { label: 'Saiba mais', icon: AboutIcon },
];

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick, activeIndex }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(true);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) setExpanded(false);
  }, [isMobile]);

  const handleMenuClick = (idx: number) => {
    onMenuClick(idx);
    if (isMobile) setExpanded(false);
  };

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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: expanded ? 'flex-end' : 'center',
            height: 64,
          }}
        >
          <IconButton onClick={() => setExpanded(!expanded)} size="large" style={{ color: 'white' }}>
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
                key={item.label}
                style={{
                  background: activeIndex === idx ? '#1A4D32' : hovered === idx ? '#0E4024' : 'transparent',
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
                onClick={() => handleMenuClick(idx)}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{
                    width: 38,
                    height: 38,
                    marginRight: expanded ? 16 : 0,
                  }}
                />
                {expanded && item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        style={{
          padding: '0 0 32px 0',
          display: 'flex',
          justifyContent: expanded ? 'flex-end' : 'center',
          paddingRight: expanded ? '28px' : '0',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <div
          style={{
            width: expanded ? '80px' : '40px',
            height: expanded ? '80px' : '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <img
            src={ER}
            alt="Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
