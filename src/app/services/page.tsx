// app/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link'; // <-- Добави този ред!

export const metadata: Metadata = {
  title: 'Нашите 3D Принтиране Услуги - Прототипиране и Производство',
  description: 'Открийте нашите услуги за 3D принтиране: бързо прототипиране, производство на крайни продукти и професионално 3D моделиране със SolidWorks и Fusion 360.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Нашите Услуги за 3D Принтиране
      </h1>

      <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Прототипиране</h2>
        <p className="text-lg text-gray-700 mb-4">
          Превърнете вашите иновативни идеи в реални, функционални прототипи. Услугата ни за прототипиране ви позволява бързо да тествате дизайна, формата и функцията на вашите продукти, преди да инвестирате в скъпо масово производство. Ние работим в тясно сътрудничество с вас, за да гарантираме, че всеки прототип отговаря на вашите точни спецификации и очаквания.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Бърза изработка на концептуални модели</li>
          <li>Тестване на функционалност и ергономия</li>
          <li>Итеративно подобрение на дизайна</li>
          <li>Намаляване на разходите и времето за разработка</li>
        </ul>
      </section>

      <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Производство на крайни продукти</h2>
        <p className="text-lg text-gray-700 mb-4">
          Независимо дали имате нужда от единична бройка или малка серия от крайни продукти, ние предлагаме висококачествено 3D принтиране, което отговаря на индустриалните стандарти. Използваме различни материали, за да осигурим издръжливост, прецизност и естетика на вашите готови изделия.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Производство на части по поръчка</li>
          <li>Изработка на функционални компоненти</li>
          <li>Персонализирани сувенири и подаръци</li>
          <li>Висококачествени финални изделия</li>
        </ul>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">3D Моделиране със SolidWorks и Fusion 360</h2>
        <p className="text-lg text-gray-700 mb-4">
          Основата на всеки успешен 3D принтиран обект е неговият модел. Ние използваме водещи CAD софтуери като SolidWorks и Fusion 360, за да създаваме прецизни, оптимизирани и готови за принтиране 3D модели. Независимо дали имате скица, идея или нужда от реверсивен инженеринг, ние можем да превърнем вашата концепция в детайлен цифров модел.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Създаване на 3D модели по чертежи или идеи</li>
          <li>Оптимизация на съществуващи модели за 3D принтиране</li>
          <li>Конвертиране на файлови формати</li>
          <li>Експертиза в SolidWorks и Fusion 360</li>
        </ul>
      </section>

      <div className="text-center mt-12">
        <p className="text-xl text-gray-700 mb-4">
          Цената за всяка услуга се договаря индивидуално, спрямо сложността на проекта, използваните материали и времето за изработка.
        </p>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
          Изпратете запитване за оферта
        </Link>
      </div>
    </div>
  );
}