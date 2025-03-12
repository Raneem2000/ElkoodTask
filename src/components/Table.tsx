import React, { useState } from 'react';
import Modal from '../components/Modal';

const Table = ({ patients, setPatients }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(
    null,
  );
  const [modalContent, setModalContent] = useState('');

  const openModal = (id: number, content: string) => {
    setSelectedPatientId(id);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatientId(null);
    setModalContent('');
  };

  const moveToCurrent = () => {
    if (selectedPatientId !== null) {
      setPatients(
        patients.map((p: any) =>
          p.id === selectedPatientId ? { ...p, status: 'current' } : p,
        ),
      );
    }
    closeModal();
  };

  const cancelAppointment = () => {
    if (selectedPatientId !== null) {
      setPatients(patients.filter((p: any) => p.id !== selectedPatientId));
    }
    closeModal();
  };

  return (
    <div className="container mx-auto p-6">
      {/* المرضى القادمون */}
      <div className="mb-6 bg-blue-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">📅 المرضى القادمون</h2>
        {patients
          .filter((p: any) => p.status === 'upcoming')
          .map((p: any) => (
            <div
              key={p.id}
              className="flex justify-between p-2 bg-white shadow rounded-lg my-2"
            >
              <span>
                {p.name} - {p.time} ({p.type})
              </span>
              <button
                onClick={() => openModal(p.id, 'هل أنت متأكد من إلغاء الحجز؟')}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                إلغاء
              </button>
            </div>
          ))}
      </div>

      {/* المرضى في الانتظار */}
      <div className="mb-6 bg-yellow-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">⏳ المرضى في الانتظار</h2>
        {patients
          .filter((p: any) => p.status === 'waiting')
          .map((p: any) => (
            <div
              key={p.id}
              className="flex justify-between p-2 bg-white shadow rounded-lg my-2"
            >
              <span>
                {p.name} - {p.time} ({p.type})
              </span>
              <button
                onClick={() =>
                  openModal(p.id, 'هل تريد بدء معالجة هذا المريض؟')
                }
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                ابدأ المعالجة
              </button>
            </div>
          ))}
      </div>

      {/* المريض الحالي */}
      <div className="bg-green-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">⚕️ المريض الحالي</h2>
        {patients
          .filter((p: any) => p.status === 'current')
          .map((p: any) => (
            <div key={p.id} className="p-2 bg-white shadow rounded-lg my-2">
              <span>
                {p.name} - {p.time} ({p.type})
              </span>
            </div>
          ))}
      </div>

      {/* مودال التأكيد */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="تأكيد العملية">
        <p className="text-center text-gray-700">{modalContent}</p>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={
              modalContent.includes('إلغاء') ? cancelAppointment : moveToCurrent
            }
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            نعم، تأكيد
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          >
            إغلاق
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Table;
