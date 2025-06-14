import React from 'react';

const Emergencia: React.FC = () => {
  const emergencyOptions = [
    { label: 'Polícia Militar', icon: require('../assets/icon/police-icon.png'), phone: '190' },
    { label: 'Ambulância', icon: require('../assets/icon/ambulance-icon.png'), phone: '192' },
    { label: 'Bombeiros', icon: require('../assets/icon/emergency-fire.png'), phone: '193' },
    { label: 'Defesa Civil', icon: require('../assets/icon/emergency-shield.png'), phone: '199' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F6F9ED] flex flex-col items-center justify-start font-sans text-gray-900 pl-20 px-4 py-12 sm:py-16">
      {/* Título */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6">
        EMERGÊNCIA
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-normal mb-8 sm:mb-12 max-w-4xl">
        Em caso de emergência, clique em um dos<br />botões abaixo para entrar em contato
      </p>

      {/* Botões de emergência */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-2 sm:px-4 w-full">
        {emergencyOptions.map((btn, idx) => (
          <a
            key={idx}
            href={`tel:${btn.phone}`}
            className="flex items-center justify-start gap-4 bg-[#DDEAD6] text-gray-800 text-xl sm:text-2xl lg:text-3xl font-semibold px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-2xl shadow-md w-full sm:w-[300px] lg:w-[350px] h-28 sm:h-32 lg:h-[140px] hover:bg-[#cce0c3] transition"
          >
            <img
              src={btn.icon}
              alt={btn.label}
              className="h-8 sm:h-10 lg:h-12 w-8 sm:w-10 lg:w-12 object-contain"
            />
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Emergencia;
