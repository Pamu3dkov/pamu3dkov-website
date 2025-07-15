// src/app/portfolio/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const portfolioItems = [
  {
    id: 1, // Уникален идентификатор
    name: 'Прототип на AirSoft',
    description: 'Функционален прототип, принтиран за тестване на сглобката и ергономията.',
    smallImage: '/images/airsoft-replica.jpg', // Път към малката (preview) снимка за картата
    largeImage: '/images/airsoft-replica.jpg', // Път към голямата (пълноразмерна) снимка за модала
    category: 'Прототипи',
    objectPosition: 'object-center', // Добавено свойство: центрира снимката по подразбиране
  },
  {
    id: 2,
    name: 'Персонализирана декоративна фигурка',
    description: 'Детайлна фигурка, принтирана като краен продукт за подарък.',
    smallImage: '/images/drakon.jpg',
    largeImage: '/images/drakon.jpg',
    category: 'Крайни продукти',
    objectPosition: 'object-top', // Добавено свойство: позиционира снимката отгоре за дракона
  },
  {
    id: 3,
    name: 'Резервна част за AirSoft',
    description: 'Специализирана резервна част, проектирана със SolidWorks и принтирана за конкретна AirSoft реплика.',
    smallImage: '/images/airsoft-parts.jpg',
    largeImage: '/images/airsoft-parts.jpg',
    category: 'Крайни продукти',
    objectPosition: 'object-center', // Добавено свойство: центрира снимката по подразбиране
  },
  // Добави тук още обекти със снимките от твоя public/images/ папка.
  // За всяка снимка можеш да зададеш custom objectPosition.
  // Ето пример за нова снимка с bottom позиция:
  /*
  {
    id: 4,
    name: 'Нов Проект',
    description: 'Описание на новия проект.',
    smallImage: '/images/new-project.jpg',
    largeImage: '/images/new-project.jpg',
    category: 'Нови',
    objectPosition: 'object-bottom', // Пример: Позиционира снимката отдолу
  },
  */
];

export default function PortfolioPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [touchedCardId, setTouchedCardId] = useState<number | null>(null);

  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = portfolioItems.map(item => ({
    src: item.largeImage,
    alt: item.name,
    title: item.name,
    description: item.description,
  }));

  const handleCardInteraction = (itemIndex: number, itemId: number) => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      if (touchedCardId === itemId) {
        setPhotoIndex(itemIndex);
        setIsOpen(true);
        setTouchedCardId(null);
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current);
          touchTimeoutRef.current = null;
        }
      } else {
        setTouchedCardId(itemId);
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current);
        }
        touchTimeoutRef.current = setTimeout(() => {
          setTouchedCardId(null);
        }, 3000);
      }
    } else {
      setPhotoIndex(itemIndex);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const clickedOnCard = (event.target as HTMLElement).closest('.portfolio-card');
      if (touchedCardId !== null && !clickedOnCard) {
        setTouchedCardId(null);
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current);
          touchTimeoutRef.current = null;
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [touchedCardId]);

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Нашето Портфолио
      </h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Разгледайте някои от нашите успешно реализирани проекти за 3D принтиране и моделиране.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`
              group relative bg-white rounded-lg shadow-lg overflow-hidden
              h-80 md:h-96 cursor-pointer
              portfolio-card
            `}
            onClick={() => handleCardInteraction(index, item.id)}
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src={item.smallImage}
                alt={item.name}
                className={`
                  w-full h-full object-cover transition-transform duration-300 ease-in-out
                  group-hover:scale-110
                  ${touchedCardId === item.id ? 'scale-110' : ''}
                  ${item.objectPosition || 'object-center'} // <-- ТУК Е ПРОМЯНАТА!
                `}
              />
              <div className={`
                absolute inset-0 bg-black transition-opacity duration-300 z-10
                group-hover:opacity-20
                ${touchedCardId === item.id ? 'opacity-20' : 'opacity-0'}
              `}></div>
            </div>

            <div
              className={`
                absolute bottom-0 left-0 right-0 p-6 bg-white z-20
                transition-opacity duration-300 ease-in-out
                group-hover:opacity-0
                ${touchedCardId === item.id ? 'opacity-0' : ''}
              `}
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

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={photoIndex}
        />
      )}
    </div>
  );
}