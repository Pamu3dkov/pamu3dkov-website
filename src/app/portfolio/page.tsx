// src/app/portfolio/page.tsx
'use client';

// ИМПОРТИРАЙ НОВАТА БИБЛИОТЕКА И НЕЙНИЯ CSS
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // ЗАДЪЛЖИТЕЛНО: Импортирай CSS стиловете за галерията

// Дефиниция на елементите в портфолиото, адаптирани за react-image-gallery
// 'react-image-gallery' използва 'original' за голямата снимка и 'thumbnail' за малката.
const portfolioItems = [
  {
    original: '/images/airsoft-replica.jpg', // Път към голямата (пълноразмерна) снимка
    thumbnail: '/images/airsoft-replica.jpg', // Път към малката (thumbnail) снимка
    description: 'Функционален прототип, принтиран за тестване на сглобката и ергономията.', // Описание, което ще се показва под снимката в галерията
    alt: 'Прототип на AirSoft', // Алтернативен текст за достъпност
    originalTitle: 'Прототип на AirSoft', // Титла, която може да се показва в лайтбокса
  },
  {
    original: '/images/drakon.jpg',
    thumbnail: '/images/drakon.jpg',
    description: 'Детайлна фигурка, принтирана като краен продукт за подарък.',
    alt: 'Персонализирана декоративна фигурка',
    originalTitle: 'Персонализирана декоративна фигурка',
  },
  {
    original: '/images/airsoft-parts.jpg',
    thumbnail: '/images/airsoft-parts.jpg',
    description: 'Специализирана резервна част, проектирана със SolidWorks и принтирана за конкретна AirSoft реплика.',
    alt: 'Резервна част за AirSoft',
    originalTitle: 'Резервна част за AirSoft',
  },
  // Добави още обекти със снимките, които си поставил в public/images/
  // Не забравяй да използваш 'original' и 'thumbnail' за пътищата към снимките.
  // Препоръчително: Ако имаш по-големи оригинални файлове, използвай:
  // thumbnail: '/images/portfolio/thumb-airsoft-replica.jpg' // По-малка версия за бързо зареждане
  // original: '/images/portfolio/full-airsoft-replica.jpg'  // Голяма версия за модала
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

      {/* Основният компонент на галерията от react-image-gallery */}
      {/* Забележка: Старият grid layout с индивидуални карти е премахнат,
          за да се покаже една цяла галерия, както е предвидено от react-image-gallery. */}
      <div className="max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden">
        <ImageGallery
          items={portfolioItems} // Подаваме масива с елементи на галерията
          showPlayButton={false} // Скрива бутона за автоматично плейване
          showFullscreenButton={true} // Показва бутон за цял екран
          showNav={true} // Показва стрелки за навигация
          showBullets={true} // Показва точки за навигация под галерията
          showThumbnails={true} // Показва малките превюта отдолу
          thumbnailPosition="bottom" // Позиционира thumb-овете отдолу
          lazyLoad={true} // Активира лениво зареждане на изображенията
          // Можеш да добавиш още опции според документацията на react-image-gallery
          // Например: autoPlay={true}, slideInterval={3000}, etc.
        />
      </div>
    </div>
  );
}