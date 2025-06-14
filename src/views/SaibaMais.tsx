import React from 'react';

const SaibaMais: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        background: '#F6F9ED',
        minHeight: '100vh',
        marginLeft: '405px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div className="container" style={{ margin: '56px 0 0 0', fontSize: 40, fontWeight: 700, fontFamily: 'Poppins, sans-serif', textAlign: 'left', width: '100%', paddingLeft: 56 }}>
        Saiba mais
      </div>
      <div
        style={{
          background: '#FCFCEE',
          borderRadius: 24,
          boxShadow: '2px 4px 16px #0001',
          padding: '48px 56px',
          maxWidth: 700,
          width: '100%',
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 24 }}>
          O que são enchentes?
        </div>
        <div style={{ fontSize: 32, fontWeight: 300, marginBottom: 40 }}>
          Uma enchente é um fenômeno natural ou causado por ações humanas que ocorre quando o nível da água em um rio, lago, ou outro curso d'água, aumenta, transbordando e inundando áreas que normalmente não são submersas.
        </div>
        <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>
          Como se proteger?
        </div>
        <div style={{ fontSize: 32, fontWeight: 300, marginLeft: 24 }}>
          <p> • Evite áreas alagadas;</p>
          <p> • Busque locais elevados;</p>
          <p> • Mantenha-se informado.</p>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais; 