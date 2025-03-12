import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <div className="flex justify-between items-center border-b border-stroke pb-2">
          <h3 className="text-lg py-2 font-semibold mx-auto text-green-400">{title}</h3>
          <button onClick={onClose} className="text-gray-500 ">
            ✖
          </button>
        </div>

        <div className="mt-4">{children}</div>

        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
