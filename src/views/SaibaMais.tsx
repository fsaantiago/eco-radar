import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaibaMais: React.FC = () => {
  const navigate = useNavigate();

  const navigateToEmergency = () => {
    navigate('/emergencia');
  };

  return (
    <div className="w-full min-h-screen bg-[#F6F9ED] flex flex-col items-center justify-center font-sans text-gray-900 pl-20 px-4 py-10">
      {/* Título */}
      <div className="w-full max-w-screen-2xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Saiba mais</h2>
      </div>

      {/* Conteúdo informativo com responsividade */}
      <div className="bg-[#FCFCEE] rounded-2xl shadow-md px-6 sm:px-10 lg:px-16 py-10 w-full max-w-[980px] space-y-10">
        {/* O que são enchentes */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">O que são enchentes?</h3>
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed">
            Uma enchente é um fenômeno natural ou causado por ações humanas que ocorre quando o nível
            da água em um rio, lago ou outro curso d'água aumenta, transbordando e inundando áreas que
            normalmente não são submersas.
          </p>
        </div>

        {/* Como se proteger */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">Como se proteger?</h3>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg md:text-xl font-light space-y-2">
            <li>Evite áreas alagadas;</li>
            <li>Busque locais elevados;</li>
            <li>Mantenha-se informado.</li>
          </ul>
        </div>

        {/* Sinais de risco iminente */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">Sinais de risco iminente</h3>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg md:text-xl font-light space-y-2">
            <li>Nível da água subindo rapidamente;</li>
            <li>Água turva e com entulho;</li>
            <li>Sons de estruturas rangendo ou rompendo.</li>
          </ul>
        </div>

        {/* O que fazer durante uma enchente */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">O que fazer durante uma enchente</h3>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg md:text-xl font-light space-y-2">
            <li>Desligue a energia elétrica;</li>
            <li>Evite contato com água contaminada;</li>
            <li>Use rádios portáteis para se manter informado.</li>
          </ul>
        </div>

        {/* O que NÃO fazer */}
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4">O que NÃO fazer</h3>
          <ul className="list-disc ml-6 sm:ml-8 text-base sm:text-lg md:text-xl font-light space-y-2">
            <li>Não caminhe ou dirija em ruas alagadas;</li>
            <li>Não toque em cabos elétricos molhados;</li>
            <li>Não ignore alertas da Defesa Civil.</li>
          </ul>
        </div>

        {/* Botão de emergência */}
        <div className="flex justify-center pt-6">
          <button
            onClick={navigateToEmergency}
            className="bg-[#DDEAD6] text-[#222] text-lg sm:text-xl md:text-2xl font-semibold px-6 sm:px-10 py-4 sm:py-5 md:py-6 rounded-2xl shadow-md hover:bg-[#cfe1c4] transition"
          >
            Ir para menu de emergência
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaibaMais;
