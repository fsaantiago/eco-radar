import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ResizeMap: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 300);
  }, [map]);

  return null;
};

const LocateButton: React.FC = () => {
  const map = useMap();
  const [error, setError] = useState<string | null>(null);

  const handleLocate = () => {
    if (!navigator.geolocation) {
      setError('Seu navegador não suporta geolocalização.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        map.setView([latitude, longitude], 13);
        setError(null);
      },
      () => {
        setError('Não foi possível obter sua localização.');
      }
    );
  };

  return (
    <>
      <button
        onClick={handleLocate}
        className="absolute bottom-4 right-4 z-[1000] bg-white text-sm text-gray-700 px-3 py-2 rounded shadow-md hover:bg-gray-100"
      >
        Usar minha localização
      </button>
      {error && (
        <div className="absolute bottom-16 right-4 z-[1000] bg-red-100 text-red-700 text-sm p-2 rounded shadow-md">
          {error}
        </div>
      )}
    </>
  );
};

const Main: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col font-sans text-gray-900 px-4 md:px-10 lg:px-20 max-w-screen-2xl mx-auto">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-left mb-10">
        Contagem, MG
      </h1>

      {/* Linha superior: clima e alerta */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-12">
        {/* Card clima */}
        <div className="w-full max-w-sm h-60 bg-background rounded-2xl shadow-md flex items-center gap-6 px-8">
          <span className="text-6xl">🌦️</span>
          <div className="flex flex-col">
            <span className="text-5xl font-bold">23º</span>
            <span className="text-2xl font-semibold -mt-2">Chuva forte</span>
          </div>
        </div>

        {/* Card alerta */}
        <div className="w-full max-w-sm h-60 bg-alert text-white rounded-2xl shadow-md flex flex-col items-center justify-center px-6 text-center">
          <span className="text-4xl mb-2">⚠️</span>
          <span className="text-2xl font-extrabold">Risco alto de alagamento</span>
          <span className="text-base font-normal mt-2 leading-tight">
            Risco alto de alagamento<br />no bairro Eldorado<br />80% de chance de chuva forte
          </span>
        </div>
      </div>

      {/* Linha do meio: botões e mapa */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Botões de mapa */}
        <div className="flex flex-col gap-8 w-full max-w-xs mx-auto lg:mx-0">
          <div className="h-44 bg-white rounded-xl shadow-md flex items-center justify-center text-xl font-semibold text-gray-800">
            Mapa de tempestade
          </div>
          <div className="h-44 bg-white rounded-xl shadow-md flex items-center justify-center text-xl font-semibold text-gray-800">
            Mapa de enchentes
          </div>
        </div>

        {/* Mapa */}
        <div className="relative w-full max-w-5xl h-[600px] rounded-[32px] overflow-hidden bg-mapBg border border-gray-100 shadow-md">
          <MapContainer
            center={[-19.9167, -44.0833]}
            zoom={11}
            className="w-full h-full"
          >
            <ResizeMap />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocateButton />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Main;
