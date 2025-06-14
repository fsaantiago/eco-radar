import React from 'react';
import { alertMock } from '../assets/dto/AlertDTO';

const Reports: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        background: '#F6F9ED',
        minHeight: '100vh',
        marginLeft: '405px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Poppins, sans-serif',
        alignItems: 'center',
      }}
    >
      <div className="container" style={{ margin: '56px 0 0 0', fontSize: 28, fontWeight: 700, textAlign: 'left', width: '100%', paddingLeft: 56 }}>
        Alertas reportados por outros usuários
      </div>
      <div style={{
        width: '100%',
        background: '#FFFDF5',
        borderRadius: 24,
        boxShadow: '0 4px 12px #0001',
        marginTop: 32,
        padding: '32px 32px 32px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}>
        {alertMock.reasonsList.map((alert, idx) => (
          <div key={idx} style={{
            background: '#DDEEDB',
            borderRadius: 32,
            padding: '24px 32px',
            marginBottom: 0,
            boxShadow: '0 2px 8px #0001',
            fontSize: 20,
            fontWeight: 400,
            color: '#222',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            <div><b>Nome:</b> {alert.name}</div>
            <div><b>Local:</b> {alert.address}</div>
            <div><b>Tipo de alerta:</b> {alert.warnType}</div>
            <div><b>Descrição:</b> {alert.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports; 