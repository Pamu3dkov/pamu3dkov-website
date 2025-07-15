// src/app/portfolio/page.tsx
'use client'; // <-- ЗАДЪЛЖИТЕЛНО: Този ред остава, за да работи react-modal-image и другите интерактивности.

// *** ПРОМЯНА ТУК: Добавяме dynamic от 'next/dynamic' ***
import dynamic from 'next/dynamic';

// *** ПРОМЯНА ТУК: Използваме dynamic импорт за ModalImage ***
// Това кара ModalImage да се зарежда само на клиентската страна (браузъра)
// и да не се опитва да се рендва по време на Server-Side Rendering (SSR).
const ModalImage = dynamic(() => import('react-modal-image'), { ssr: false });

const portfolioItems = [
  {
    id: 1,
    name: 'Прототип на AirSoft',
    description: 'Функционален прототип, принтиран за тестване на сглобката и ергономията.',
    smallImage: '/images/airsoft-replica.jpg', // <-- Път към малката (preview) снимка
    largeImage: '/images/airsoft-replica.jpg', // <-- Път към голямата (пълноразмерна) снимка
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
  // Добавете още обекти със снимките, които си поставил в public/images/
  // Препоръчително: Ако имаш по-големи оригинални файлове, използвай:
  // smallImage: '/images/portfolio/thumb-airsoft-replica.jpg' // По-малка версия за бързо зареждане
  // largeImage: '/images/portfolio/full-airsoft-replica.jpg'  // Голяма версия за модала
];

export default function PortfolioPage() {
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
          <div
            key={item.id}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden
                       h-80 md:h-96" // Фиксирана височина за картата
          >
            {/* Изображението: Сега използваме ModalImage */}
            <div className="absolute inset-0 w-full h-full">
              <ModalImage
                small={item.smallImage} // <-- Път към малката (preview) снимка
                large={item.largeImage} // <-- Път към голямата (пълноразмерна) снимка
                alt={item.name}
                hideDownload={true} // Може да скриеш бутона за сваляне
                hideZoom={false}    // Може да оставиш бутона за zoom
                // Tailwind класове за стилизиране на *превю* изображението
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Overlay, който се появява при hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
            </div>

            {/* Текстовият блок: Позициониран в долната част, ще избледнява при hover */}
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
    </div>
  );
}