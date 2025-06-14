import React from 'react';

const Emergencia: React.FC = () => {
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
      {/* Título */}
      <div className="container" style={{ margin: '56px 0 0 0', fontSize: 40, fontWeight: 700, fontFamily: 'Poppins, sans-serif', textAlign: 'left', width: '100%', paddingLeft: 56 }}>
        Emergência
      </div>
      <h1 style={{ fontSize: 64, fontWeight: 700, marginBottom: 24, marginTop: 0, textAlign: 'center' }}>EMERGÊNCIA</h1>
      <p style={{ fontSize: 36, fontWeight: 400, marginBottom: 48, textAlign: 'center', maxWidth: 1200, marginLeft: '205px', marginRight: '205px' }}>
        Em caso de emergência, clique em um dos<br />botões abaixo para entrar em contato
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 40, marginBottom: 40, justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 40 }}>
        {/* Botão Bombeiros */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            background: '#DDEAD6',
            border: 'none',
            borderRadius: 24,
            boxShadow: '2px 4px 8px #0001',
            fontSize: 36,
            fontWeight: 600,
            padding: '24px 48px',
            cursor: 'pointer',
            color: '#222',
          }}
        >
          <img src={require('../assets/icon/emergency-fire.png')} alt="Bombeiros" style={{ width: '50%', height: '80%' }} className='emergency-fire' />
          Bombeiros
        </button>
        {/* Botão Defesa Civil */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            background: '#DDEAD6',
            border: 'none',
            borderRadius: 24,
            boxShadow: '2px 4px 8px #0001',
            fontSize: 36,
            fontWeight: 600,
            padding: '24px 48px',
            cursor: 'pointer',
            color: '#222',
          }}
        >
          <img src={require('../assets/icon/emergency-shield.png')} alt="Defesa Civil" style={{ width: '35%', height: '80%' }} className='emergency-shield' />
          Defesa Civil
        </button>
      </div>
    </div>
  );
};

export default Emergencia; 