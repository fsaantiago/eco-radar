import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ResizeMap: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 300);
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
      ({ coords }) => {
        map.setView([coords.latitude, coords.longitude], 13);
        setError(null);
      },
      () => setError('Não foi possível obter sua localização.')
    );
  };

  return (
    <>
      <button
        onClick={handleLocate}
        className="absolute bottom-4 right-4 z-[1000] bg-white text-xs sm:text-sm text-gray-700 px-3 py-2 rounded shadow-md hover:bg-gray-100"
      >
        Usar minha localização
      </button>
      {error && (
        <div className="absolute bottom-16 right-4 z-[1000] bg-red-100 text-red-700 text-xs sm:text-sm p-2 rounded shadow-md">
          {error}
        </div>
      )}
    </>
  );
};

const generateCloudPolygon = (
  center: [number, number],
  radius = 0.03,
  points = 20
): [number, number][] => {
  const [lat, lng] = center;
  const coords: [number, number][] = [];

  for (let i = 0; i < points; i++) {
    const angle = (i / points) * 2 * Math.PI;
    const r = radius * (0.8 + Math.random() * 0.4);
    const dLat = r * Math.cos(angle);
    const dLng = r * Math.sin(angle);
    coords.push([lat + dLat, lng + dLng]);
  }

  return coords;
};

const Main: React.FC = () => {
  const [stormLayer, setStormLayer] = useState(false);
  const [floodLayer, setFloodLayer] = useState(false);

  const generateRandomCenter = () => [
    -19.9167 + (Math.random() - 0.5) * 0.2,
    -44.0833 + (Math.random() - 0.5) * 0.2,
  ] as [number, number];

  return (
    <div className="w-full min-h-screen bg-[#F3F7E9] flex flex-col font-sans text-gray-900 pl-20">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 max-w-screen-2xl mx-auto mt-6 sm:mt-10">
        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-6 sm:mb-10">
          Contagem, MG
        </h1>

        {/* Linha superior */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-center mb-10 sm:mb-12">
          <div className="w-full max-w-sm h-[14rem] sm:h-[15rem] bg-[#F9FAEC] rounded-2xl shadow-md flex items-center gap-4 sm:gap-6 px-6 sm:px-8">
            <span className="text-5xl sm:text-7xl lg:text-8xl">🌦️</span>
            <div className="flex flex-col">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">23º</span>
              <span className="text-2xl sm:text-3xl font-semibold mt-1">Chuva forte</span>
            </div>
          </div>
          <div className="w-full max-w-sm h-[14rem] sm:h-[15rem] bg-[#ED8D43] text-white rounded-2xl shadow-md flex flex-col items-center justify-center px-6 text-center">
            <span className="text-2xl sm:text-3xl mb-2">⚠️</span>
            <span className="text-xl sm:text-2xl font-extrabold">Risco alto de alagamento</span>
            <span className="text-sm sm:text-base font-normal mt-2 leading-tight">
              Risco alto de alagamento<br />no bairro Eldorado<br />80% de chance de chuva forte
            </span>
          </div>
        </div>

        {/* Botões + mapa */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 sm:gap-8">
          {/* Botões */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-xs mx-auto lg:mx-0">
            <button
              onClick={() => setStormLayer(prev => !prev)}
              className="h-32 sm:h-40 bg-[#F9FAEC] hover:bg-[#edf2dc] rounded-xl shadow-md flex items-center justify-center text-lg sm:text-xl font-bold text-primary transition"
            >
              Mapa de tempestade {stormLayer ? '✓' : ''}
            </button>
            <button
              onClick={() => setFloodLayer(prev => !prev)}
              className="h-32 sm:h-40 bg-[#F9FAEC] hover:bg-[#edf2dc] rounded-xl shadow-md flex items-center justify-center text-lg sm:text-xl font-bold text-primary transition"
            >
              Mapa de enchentes {floodLayer ? '✓' : ''}
            </button>
          </div>

          {/* Mapa */}
          <div className="relative w-full max-w-5xl h-[400px] sm:h-[500px] lg:h-[600px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-mapBg border border-gray-100 shadow-md">
            <MapContainer center={[-19.9167, -44.0833]} zoom={11} className="w-full h-full">
              <ResizeMap />
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <LocateButton />

              {stormLayer &&
                Array.from({ length: 2 }).map((_, i) => (
                  <Polygon
                    key={`storm-${i}`}
                    positions={generateCloudPolygon(generateRandomCenter())}
                    pathOptions={{ color: '#3366FF', fillOpacity: 0.25 }}
                  />
                ))}

              {floodLayer &&
                Array.from({ length: 2 }).map((_, i) => (
                  <Polygon
                    key={`flood-${i}`}
                    positions={generateCloudPolygon(generateRandomCenter())}
                    pathOptions={{ color: '#FF3333', fillOpacity: 0.2 }}
                  />
                ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
