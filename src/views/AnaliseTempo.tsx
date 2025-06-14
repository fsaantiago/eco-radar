import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const AnaliseTempo: React.FC = () => {
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
    <div className="w-full min-h-screen bg-[#F6F9ED] flex flex-col font-sans text-gray-900 pl-20">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        {/* Título e subtítulo */}
        <div className="mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            ANÁLISE DO TEMPO
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal">
            Monitoramento meteorológico em tempo real com foco em áreas de risco de alagamento
          </p>
        </div>

        {/* Primeira linha de cards */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-6 mb-6 items-stretch">
          {/* Precipitação acumulada */}
          <div className="flex-1 bg-[#FFFDF5] rounded-2xl shadow-md p-5 sm:p-6 flex flex-col justify-between min-w-full sm:min-w-[300px]">
            <h2 className="text-base sm:text-lg font-semibold mb-4">
              Precipitação acumulada dos últimos 5 dias (mm)
            </h2>
            <ReactApexChart options={barOptions} series={barSeries} type="bar" height={140} width="100%" />
          </div>

          {/* Destaque mm */}
          <div className="flex-1 bg-[#FFFDF5] rounded-2xl shadow-md p-5 sm:p-6 flex flex-col items-center justify-center min-w-full sm:min-w-[300px]">
            <div className="flex items-center mb-4">
              <span className="text-4xl sm:text-5xl md:text-6xl mr-4">🌧️</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold">32</span>
              <span className="text-xl sm:text-2xl font-bold ml-2">mm</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-gray-800 text-center">
              Acima da média
            </div>
          </div>
        </div>

        {/* Segunda linha de cards */}
        <div className="flex flex-col lg:flex-row flex-wrap gap-6 items-stretch">
          {/* Previsão */}
          <div className="flex-1 bg-[#FFFDF5] rounded-2xl shadow-md p-5 sm:p-6 flex flex-col justify-between min-w-full sm:min-w-[300px]">
            <h2 className="text-base sm:text-lg font-semibold mb-4">
              Previsão de precipitação para os próximos dias
            </h2>
            <ReactApexChart options={lineOptions} series={lineSeries} type="line" height={120} width="100%" />
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Atualização automática a cada 3 horas
            </p>
          </div>

          {/* Alertas emitidos */}
          <div className="flex-1 bg-[#FFFDF5] rounded-2xl shadow-md p-5 sm:p-6 flex flex-col justify-between min-w-full sm:min-w-[300px]">
            <h2 className="text-base sm:text-lg font-semibold mb-4">
              Alertas emitidos nos últimos 4 meses
            </h2>
            <ReactApexChart options={areaOptions} series={areaSeries} type="area" height={120} width="100%" />
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              47% dos alertas emitidos em 2025 foram por alagamentos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaliseTempo;
