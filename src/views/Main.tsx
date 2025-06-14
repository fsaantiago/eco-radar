import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Main: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col font-sans px-4 md:px-10 lg:px-20 max-w-screen-2xl mx-auto">
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
        <div className="w-full max-w-5xl h-[600px] bg-mapBg border border-gray-100 rounded-[50px] shadow-md overflow-hidden">
          <MapContainer
            center={[-19.9167, -44.0833]}
            zoom={11}
            style={{ width: '100%', height: '100%', borderRadius: 32 }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Main;
