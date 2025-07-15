// src/components/Modal.tsx
'use client'; // Този компонент ще има интерактивност от страна на клиента

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

export default function Modal({ isOpen, onClose, imageUrl, altText }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Закриване при натискане на Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // Закриване при клик извън модала (на затъмнения фон)
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      onClick={handleOutsideClick} // Затваряне при клик на затъмнения фон
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl p-4 max-w-4xl max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()} // Предотвратява затваряне при клик вътре в модала
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="relative w-full h-[70vh] md:h-[80vh]"> {/* Регулирайте височината по ваше желание */}
          <Image
            src={imageUrl}
            alt={altText}
            fill
            style={{ objectFit: 'contain' }} // Използваме 'contain', за да се побере цялата снимка
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        <p className="text-center mt-4 text-gray-700 text-lg">{altText}</p>
      </div>
    </div>
  );
}