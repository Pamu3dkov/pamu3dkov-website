// src/app/portfolio/page.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
// import Modal from '../components/Modal'; // Вече няма да ни трябва Modal, така че може да го закоментираме или изтрием

// metadata експортът е в layout.tsx, за да се избегне грешка
// import type { Metadata } from 'next';
// export const metadata: Metadata = { ... };

const portfolioItems = [
  {
    id: 1,
    name: 'Прототип на AirSoft',
    description: 'Функционален прототип, принтиран за тестване на сглобката и ергономията.',
    image: '/images/airsoft-replica.jpg',
    category: 'Прототипи',
  },
  {
    id: 2,
    name: 'Персонализирана фигурка',
    description: 'Детайлна фигурка, принтирана като краен продукт за подарък.',
    image: '/images/drakon.jpg',
    category: 'Крайни продукти',
  },
  {
    id: 3,
    name: 'Резервна част за AirSoft',
    description: 'Специализирана резервна част, проектирана със SolidWorks и принтирана за конкретна AirSoft реплика.',
    image: '/images/airsoft-parts.jpg',
    category: 'Крайни продукти',
  },
  // Добавете още обекти със снимките, които си поставил в public/images/
];

export default function PortfolioPage() {
  // Няма нужда от useState за модала, тъй като няма да го отваряме
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [currentImage, setCurrentImage] = useState({ url: '', alt: '' });

  // Няма нужда от тези функции, тъй като няма да отваряме модал
  // const openModal = (imageUrl: string, altText: string) => {
  //   setCurrentImage({ url: imageUrl, alt: altText });
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setCurrentImage({ url: '', alt: '' });
  // };

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Нашето Портфолио
      </h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Разгледайте някои от нашите успешно реализирани проекти за 3D принтиране и моделиране.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          // Основен контейнер за елемента от портфолиото
          // 'group' класът позволява 'group-hover:' ефекти на децата
          <div
            key={item.id}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden
                       h-80 md:h-96" // Фиксирана височина за картата, за да работи абсолютното позициониране
          >
            {/* Изображението: Заема цялото налично пространство, но се мащабира при hover */}
            <div className="absolute inset-0 w-full h-full"> {/* Покрива целия родител */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: 'cover' }} // Снимката запълва пространството
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                // transition за плавен ефект, group-hover:scale-110 за уголемяване
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Overlay, който се появява при hover, за да затъмни снимката леко */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            </div>

            {/* Текстовият блок: Позициониран в долната част, ще избледнява и ще се скрива */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 bg-white z-20 // z-index по-висок от снимката, за да е отпред
                         transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Модалът е премахнат, тъй като няма да се използва */}
    </div>
  );
}