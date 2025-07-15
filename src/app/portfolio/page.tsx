// src/app/portfolio/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react'; // Добавени useEffect и useRef
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
  },
  {
    id: 2,
    name: 'Персонализирана декоративна фигурка',
    description: 'Детайлна фигурка, принтирана като краен продукт за подарък.',
    smallImage: '/images/drakon.jpg',
    largeImage: '/images/drakon.jpg',
    category: 'Крайни продукти',
  },
  {
    id: 3,
    name: 'Резервна част за AirSoft',
    description: 'Специализирана резервна част, проектирана със SolidWorks и принтирана за конкретна AirSoft реплика.',
    smallImage: '/images/airsoft-parts.jpg',
    largeImage: '/images/airsoft-parts.jpg',
    category: 'Крайни продукти',
  },
  // Добави тук още обекти със снимките от твоя public/images/ папка.
];

export default function PortfolioPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [touchedCardId, setTouchedCardId] = useState<number | null>(null);

  // Референция за таймаута, за да може да го изчистваме
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = portfolioItems.map(item => ({
    src: item.largeImage,
    alt: item.name,
    title: item.name,
    description: item.description,
  }));

  // Функция, която управлява взаимодействията с картите (клик/докосване)
  const handleCardInteraction = (itemIndex: number, itemId: number) => {
    // Проверяваме дали устройството поддържа тъч събития
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Логика за мобилни устройства:
      if (touchedCardId === itemId) {
        // Ако картата вече е била докосната (т.е. е в "hover" състояние),
        // второто докосване отваря лайтбокса.
        setPhotoIndex(itemIndex);
        setIsOpen(true);
        setTouchedCardId(null); // Скриваме "hover" ефекта след отваряне на лайтбокс
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current);
          touchTimeoutRef.current = null;
        }
      } else {
        // Първо докосване на карта -> активираме "hover" ефекта
        setTouchedCardId(itemId);
        // Изчистваме предишен таймаут, ако има такъв
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current);
        }
        // Задаваме таймаут, който да скрие "hover" ефекта след 3 секунди,
        // ако няма второ докосване или докосване извън картата.
        touchTimeoutRef.current = setTimeout(() => {
          setTouchedCardId(null);
        }, 3000); // 3 секунди
      }
    } else {
      // Логика за десктоп устройства:
      // На десктоп "hover" ефектът се управлява изцяло от CSS (group-hover).
      // Единственият "клик" отваря лайтбокса.
      setPhotoIndex(itemIndex);
      setIsOpen(true);
    }
  };

  // useEffect за добавяне на слушател на събития за тялото на документа.
  // Това помага да скрием "hover" ефекта на мобилни устройства,
  // ако потребителят докосне извън активна карта.
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Проверяваме дали има активна "докосната" карта и дали кликът е бил извън нея
      const clickedOnCard = (event.target as HTMLElement).closest('.portfolio-card');
      if (touchedCardId !== null && !clickedOnCard) {
        setTouchedCardId(null);
        if (touchTimeoutRef.current) {
          clearTimeout(touchTimeoutRef.current);
          touchTimeoutRef.current = null;
        }
      }
    };

    // Добавяме слушател за 'mousedown' (по-рано от 'click', за да хване събитието преди да се активира клик на картата)
    document.addEventListener('mousedown', handleOutsideClick);

    // Функцията за почистване (когато компонентът се демонтира)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [touchedCardId]); // Задейства се, когато touchedCardId се промени

  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Нашето Портфолио
      </h1>
      <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        Разгледайте някои от нашите успешно реализирани проекти за 3D принтиране и моделиране.
      </p>

      {/* Grid оформлението за картичките с проекти */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className={`
              group relative bg-white rounded-lg shadow-lg overflow-hidden
              h-80 md:h-96 cursor-pointer
              portfolio-card // Добавяме този клас за по-лесно разпознаване при клик извън карта
            `}
            onClick={() => handleCardInteraction(index, item.id)}
          >
            {/* Контейнер за изображението, който покрива цялата карта */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={item.smallImage} // Използваме малката снимка за превю в картата
                alt={item.name}
                className={`
                  w-full h-full object-cover transition-transform duration-300 ease-in-out
                  group-hover:scale-110 // Ховър ефект за десктоп
                  ${touchedCardId === item.id ? 'scale-110' : ''} // Ефект при първо докосване на мобилен
                `}
              />
              {/* Полупрозрачен overlay, който се появява при hover */}
              <div className={`
                absolute inset-0 bg-black transition-opacity duration-300 z-10
                group-hover:opacity-20 // Ховър overlay за десктоп
                ${touchedCardId === item.id ? 'opacity-20' : 'opacity-0'} // Overlay при първо докосване на мобилен
              `}></div>
            </div>

            {/* Текстовият блок с името и описанието на проекта */}
            <div
              className={`
                absolute bottom-0 left-0 right-0 p-6 bg-white z-20
                transition-opacity duration-300 ease-in-out
                group-hover:opacity-0 // Скриване на текст при ховър за десктоп
                ${touchedCardId === item.id ? 'opacity-0' : ''} // Скриване на текст при първо докосване на мобилен
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

      {/* Компонентът Lightbox, който се рендира само когато 'isOpen' е true */}
      {isOpen && (
        <Lightbox
          open={isOpen} // Контролира дали лайтбоксът е отворен
          close={() => setIsOpen(false)} // Функция за затваряне на лайтбокса
          slides={slides} // Масивът със снимки (слайдове)
          index={photoIndex} // Началният индекс на показаната снимка
          // 'yet-another-react-lightbox' има вградена навигация (стрелки), но можеш да добавиш плъгини за повече функционалност
          // Например: plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
          // Заглавието и описанието на снимката могат да бъдат достъпни чрез плъгини като Captions
          // render={{ caption: ({ slide }) => (
          //   <div className="lightbox-caption">
          //     <h3>{slide.title}</h3>
          //     <p>{slide.description}</p>
          //   </div>
          // )}}
        />
      )}
    </div>
  );
}