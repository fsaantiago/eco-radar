import React, { useState } from 'react';
import { alertMock } from '../assets/dto/AlertDTO';
import AlertModal from '../components/alertmodal'; // ajuste o caminho conforme sua estrutura

const Reports: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#F6F9ED] flex flex-col items-center font-sans text-gray-900 px-4 py-10">
      {/* Título + Botão */}
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Alertas reportados por outros usuários
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition text-base sm:text-lg"
        >
          Reporte um risco
        </button>
      </div>

      {/* Container de alertas */}
      <div className="w-full max-w-screen-2xl bg-[#FFFDF5] rounded-2xl shadow-md p-6 sm:p-8 flex flex-col gap-6">
        {alertMock.reasonsList.map((alert, idx) => (
          <div
            key={idx}
            className="bg-[#DDEEDB] rounded-3xl p-4 sm:p-6 shadow-sm text-base sm:text-lg font-normal text-gray-800 flex flex-col gap-2"
          >
            <div><strong>Nome:</strong> {alert.name}</div>
            <div><strong>Local:</strong> {alert.address}</div>
            <div><strong>Tipo de alerta:</strong> {alert.warnType}</div>
            <div><strong>Descrição:</strong> {alert.description}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AlertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Reports;
