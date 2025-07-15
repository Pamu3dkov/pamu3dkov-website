// src/app/portfolio/page.tsx
'use client';

// ИМПОРТИРАМЕ useState ОТ REACT ЗА УПРАВЛЕНИЕ НА СЪСТОЯНИЕТО НА МОДАЛА
import { useState } from 'react';
// ИМПОРТИРАМЕ yet-another-react-lightbox ЗА ЛАЙТБОКС ФУНКЦИОНАЛНОСТТА
import Lightbox from 'yet-another-react-lightbox';
// ИМПОРТИРАМЕ НЕЙНИТЕ ОСНОВНИ CSS СТИЛОВЕ
import 'yet-another-react-lightbox/styles.css';

// Дефиниция на елементите в портфолиото.
// Добавен е 'id' за уникален ключ и 'smallImage'/'largeImage' за различните размери.
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
  // За най-добър перформанс, използвай по-малки версии за 'smallImage' и пълни размери за 'largeImage'.
];

export default function PortfolioPage() {
  // Състояние, което контролира дали лайтбоксът е отворен или затворен
  const [isOpen, setIsOpen] = useState(false);
  // Състояние, което държи индекса на текущата снимка, която да се показва в лайтбокса
  const [photoIndex, setPhotoIndex] = useState(0);

  // Подготвяме масив от слайдове, както 'yet-another-react-lightbox' очаква.
  // Всеки слайд трябва да има 'src' (URL на снимката) и може да има други метаданни.
  const slides = portfolioItems.map(item => ({
    src: item.largeImage,
    alt: item.name, // Алтернативен текст за достъпност
    title: item.name, // Заглавие, което може да се показва в лайтбокса
    description: item.description, // Описание, ако се използва плъгин за описание
  }));

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
          // Всяка карта е кликаема и отваря лайтбокс
          <div
            key={item.id}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden
                       h-80 md:h-96 cursor-pointer" // Добавен 'cursor-pointer' за по-добра UX
            onClick={() => {
              setPhotoIndex(index); // Задаваме индекса на кликнатата снимка
              setIsOpen(true);      // Отваряме лайтбокса
            }}
          >
            {/* Контейнер за изображението, който покрива цялата карта */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={item.smallImage} // Използваме малката снимка за превю в картата
                alt={item.name}
                // Tailwind класове за стилизиране и анимиране при hover
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Полупрозрачен overlay, който се появява при hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            </div>

            {/* Текстовият блок с името и описанието на проекта */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 bg-white z-20
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