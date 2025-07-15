// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Увери се, че Image е импортиран

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      {/* Hero Section */}
      <section className="w-full text-center py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
        <h1 className="text-5xl font-bold mb-4">
          Вашата Идея, Нашата 3D Реализация
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Ние предлагаме професионални услуги за 3D принтиране, от прототипиране до производство на крайни продукти, базирани на прецизни 3D модели, създадени със SolidWorks и Fusion 360.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Link href="/services" className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out shadow-lg">
            Нашите Услуги
          </Link>
          <Link href="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
            Свържете се с нас
          </Link>
        </div>
      </section>

      {/* Секция "Какво предлагаме?" */}
      <section className="mt-16 bg-gray-50 py-12 px-4 w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Какво предлагаме?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"> {/* Добавих items-center */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Прототипиране</h3>
            <p className="text-gray-600 mb-6 text-center"> {/* Добавих text-center и mb-6 */}
              Превърнете вашите концепции в реални, осезаеми прототипи. Идеален начин да тествате дизайна си преди масово производство.
            </p>
            {/* Добавяне на снимка за Прототипиране */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/prototyping-example.jpg" // Замени с пътя до твоята снимка за прототипиране
                alt="Пример за 3D принтиран прототип"
                fill // Кара снимката да запълни родителския контейнер
                style={{ objectFit: 'cover' }} // Еквивалент на Tailwind object-cover
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Оптимизация за различни размери на екрана
                className="transition-transform duration-300 hover:scale-105" // Добавен лек hover ефект
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center"> {/* Добавих items-center */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Производство на крайни продукти</h3>
            <p className="text-gray-600 mb-6 text-center"> {/* Добавих text-center и mb-6 */}
              От единични бройки до малки и големи серии, ние принтираме висококачествени крайни продукти, отговарящи на вашите спецификации.
            </p>
            {/* Добавяне на снимка за Производство на крайни продукти */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/final-product-example.jpg" // Замени с пътя до твоята снимка за крайни продукти
                alt="Пример за 3D принтиран краен продукт"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* НОВА СЕКЦИЯ: Нашите Предимства / Защо да изберете нас */}
      <section className="py-16 bg-gray-100 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Превърнете идеите си в реалност с нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Елемент 1: От Идея до Готов Продукт */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                <Image src="/icons/lightbulb.svg" alt="От Идея до Готов Продукт" width={40} height={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">От Идея до Готов Продукт</h3>
              <p className="text-gray-600">
                Работим с вас, за да превърнем вашите концепции, скици или файлове в осезаеми 3D обекти.
              </p>
            </div>

            {/* Елемент 2: Бързо Прототипиране */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <Image src="/icons/rocket.svg" alt="Бързо Прототипиране" width={40} height={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Бързо Прототипиране</h3>
              <p className="text-gray-600">
                Създавайте бързи и ефективни прототипи, за да тествате и усъвършенствате вашите дизайни преди производство.
              </p>
            </div>

            {/* Елемент 3: Персонализация и Уникалност */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-purple-100 rounded-full">
                <Image src="/icons/customize.svg" alt="Персонализация и Уникалност" width={40} height={40} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Персонализация и Уникалност</h3>
              <p className="text-gray-600">
                Принтирайте персонализирани подаръци, части или арт инсталации, които да отразяват вашия стил.
              </p>
            </div>

            {/* Елемент 4: Професионален 3D Дизайн - ПРОМЯНА ТУК */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 lg:col-start-2">
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-yellow-100 rounded-full">
                <Image src="/icons/design.svg" alt="Професионален 3D Дизайн" width={40} height={40} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Професионален 3D Дизайн</h3>
              <p className="text-gray-600">
                От скица до завършен 3D модел, нашите експерти ще реализират вашите идеи с прецизност, използвайки SolidWorks и Fusion 360.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}