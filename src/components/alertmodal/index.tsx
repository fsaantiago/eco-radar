import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    type: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form enviado:', form);
    onClose(); // fecha o modal
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Fundo escuro */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Centro do modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl space-y-6">
          <Dialog.Title className="text-2xl font-bold text-center">
            Registrar Alerta
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome *</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border-b border-gray-400 outline-none p-1"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Endereço *
              </label>
              <input
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                required
                className="mt-1 w-full border-b border-gray-400 outline-none p-1"
                placeholder="Rua, bairro ou referência"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Alerta *
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="mt-1 w-full border-b border-gray-400 outline-none p-1 bg-white"
              >
                <option value="">Selecione</option>
                <option value="enchente">Enchente</option>
                <option value="tempestade">Tempestade</option>
                <option value="deslizamento">Deslizamento</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mensagem *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 w-full border-b border-gray-400 outline-none p-1"
                placeholder="Descreva o alerta"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-semibold py-3 mt-4 rounded-lg hover:bg-orange-700"
            >
              Enviar mensagem
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AlertModal;
