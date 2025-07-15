// src/app/page.tsx
'use client'; // <-- ЗАДЪЛЖИТЕЛНО: Този ред остава, ако използваш интерактивност (като по-късно да добавяш анимации или други клиентски JS)

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fadeInUp">
            Преобразете Вашите Идеи в Реалност с 3D Принтиране
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl animate-fadeInUp animation-delay-300">
            Висококачествени услуги за 3D моделиране и принтиране за всеки проект.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp animation-delay-600">
            Свържете се с нас
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Кои сме ние?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Pamu3dkov е вашата дестинация за професионални услуги в областта на 3D принтирането и моделирането. Ние сме екип от страстни специалисти, посветени на превръщането на вашите най-смели идеи в осезаема реалност.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              От прототипи до крайни продукти и персонализирани подаръци, ние използваме авангардни технологии и прецизни материали, за да гарантираме безупречно качество и внимание към детайла.
            </p>
            <Link href="/about" className="text-blue-600 font-semibold hover:underline">
              Научете повече за нас &rarr;
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/about-us.jpg"
              alt="3D printer at work"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Нашите Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3D Принтиране по Поръчка</h3>
              <p className="text-gray-600">
                Прецизно принтиране на вашите 3D модели с висококачествени материали.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3D Моделиране и Дизайн</h3>
              <p className="text-gray-600">
                Създаване на 3D модели от скици, идеи или повредени части.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Прототипиране и Продукти</h3>
              <p className="text-gray-600">
                От функционални прототипи до красиви крайни продукти.
              </p>
            </div>
          </div>
          <Link href="/services" className="mt-12 inline-block px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
            Вижте всички услуги
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-6">Имате ли проект в ума си?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Свържете се с нас днес, за да обсъдим вашите нужди и да ви предложим персонализирано решение.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Започнете сега
          </Link>
        </div>
      </section>
    </div>
  );
}