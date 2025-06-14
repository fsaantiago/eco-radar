import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const AnaliseTempo: React.FC = () => {
  // Dados mockados para teste de interface
  const barSeries = [{ name: 'Precipitação', data: [28, 15, 15, 12, 10] }];
  const barOptions: ApexOptions = {
    chart: { type: 'bar' },
    xaxis: { categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'] },
  };

  const lineSeries = [{ name: 'Previsão', data: [12, 15, 18, 16, 14] }];
  const lineOptions: ApexOptions = {
    chart: { type: 'line' },
    xaxis: { categories: ['Sex', 'Sáb', 'Dom', 'Seg', 'Seg'] },
  };

  const areaSeries = [{ name: 'Alertas', data: [5, 12, 18, 10] }];
  const areaOptions: ApexOptions = {
    chart: { type: 'area' },
    xaxis: { categories: ['Set', 'Out', 'Nov', 'Dez'] },
    fill: { type: 'gradient' },
  };

  return (
    <div
      className="container"
      style={{
        background: '#F6F9ED',
        width: '100%',
        maxWidth: 1920,
        minHeight: '100vh',
        marginLeft: '405px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Título e subtítulo */}
      <div className="container" style={{ width: '100%', maxWidth: 1920, maxHeight: 1080, margin: '56px auto 0 auto', paddingLeft: 24, paddingRight: 24 }}>
        <div className="heading" style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, textAlign: 'left' }}>ANÁLISE DO TEMPO</div>
        <div style={{ fontSize: 20, fontWeight: 400, marginBottom: 32, textAlign: 'left' }}>
          Monitoramento meteorológico em tempo real com foco em áreas de risco de alagamento
        </div>
      </div>

      {/* Primeira linha de cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '2vw',
        width: '100%',
        maxWidth: 1920,
        maxHeight: 1080,
        margin: '0 auto',
        alignItems: 'stretch',
      }}>
        {/* Card Precipitação acumulada */}
        <div style={{
          flex: 2,
          background: '#FFFDF5',
          borderRadius: 24,
          boxShadow: '0 4px 12px #0001',
          padding: '24px 32px',
          minWidth: 320,
          marginBottom: 24,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Precipitação acumulada dos últimos 5 dias (mm)</div>
          <ReactApexChart options={barOptions} series={barSeries} type="bar" height={140} width="100%" />
        </div>
        {/* Card 32mm destaque */}
        <div style={{
          flex: 1,
          background: '#FFFDF5',
          borderRadius: 24,
          boxShadow: '0 4px 12px #0001',
          padding: '24px 32px',
          minWidth: 320,
          marginBottom: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 72, marginRight: 16 }}>🌧️</span>
            <span style={{ fontSize: 60, fontWeight: 700 }}>32</span>
            <span style={{ fontSize: 30, fontWeight: 700, marginLeft: 8 }}>mm</span>
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#222' }}>Acima da média</div>
        </div>
      </div>

      {/* Segunda linha de cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '2vw',
        width: '100%',
        maxWidth: 1920,
        maxHeight: 1080,
        margin: '0 auto',
        alignItems: 'stretch',
      }}>
        {/* Card Previsão */}
        <div style={{
          flex: 2,
          background: '#FFFDF5',
          borderRadius: 24,
          boxShadow: '0 4px 12px #0001',
          padding: '24px 32px',
          minWidth: 320,
          marginBottom: 24,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Previsão de precipitação para os próximos dias</div>
          <ReactApexChart options={lineOptions} series={lineSeries} type="line" height={120} width="100%" />
          <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>Atualização automática a cada 3 horas</div>
        </div>
        {/* Card Alertas emitidos */}
        <div style={{
          flex: 1,
          background: '#FFFDF5',
          borderRadius: 24,
          boxShadow: '0 4px 12px #0001',
          padding: '24px 32px',
          minWidth: 320,
          marginBottom: 24,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Alertas emitidos nos últimos 4 meses</div>
          <ReactApexChart options={areaOptions} series={areaSeries} type="area" height={120} width="100%" />
          <div style={{ fontSize: 14, color: '#888', marginTop: 8 }}>47% dos alertas emitidos em 2025 foram por alagamentos</div>
        </div>
      </div>
    </div>
  );
};

export default AnaliseTempo;