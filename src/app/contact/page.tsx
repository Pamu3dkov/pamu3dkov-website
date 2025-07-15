// src/app/contact/page.tsx
'use client'; // Този ред ТРЯБВА да е най-първият ред във файла

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  // Състояние за показване на съобщения за статус (успех/грешка)
  const [status, setStatus] = useState<string | null>(null);

  // Функция, която се изпълнява при изпращане на формата
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвратява презареждането на страницата

    setStatus('Изпращане...'); // Временно съобщение за потребителя

    // Запазваме референция към формата, защото "event" може да стане null след await
    const form = event.currentTarget;

    // Събиране на данните от формата
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string, // Коригирано на 'message'
    };

    try {
      // Изпращане на POST заявка към нашия API рут
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Проверка дали отговорът е успешен (HTTP статус 2xx)
      if (response.ok) {
        let responseData = {};
        // Опитваме се да парснем отговора като JSON, но само ако е JSON
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
          }
        } catch (jsonError) {
          // Ако не е валиден JSON, но заявката е успешна, просто предупреждаваме
          console.warn("API отговорът не е валиден JSON, но заявката беше успешна.", jsonError);
        }

        setStatus('Съобщението е изпратено успешно!');
        form.reset(); // Изчистване на полетата на формата
      } else {
        // Ако отговорът не е успешен (напр. 404, 500)
        let errorData = { message: 'Неизвестна грешка.' };
        try {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            errorData = await response.json();
          } else {
            // Ако не е JSON, прочети отговора като текст за по-добра диагностика
            errorData.message = await response.text();
          }
        } catch (errorParsing) {
          console.error('Грешка при парсване на грешка отговор от API:', errorParsing);
        }
        setStatus(`Грешка при изпращане: ${errorData.message || 'Неизвестна грешка.'}`);
      }
    } catch (error) {
      // Хващане на мрежови грешки или грешки при самата fetch заявка
      console.error('Възникна мрежова грешка или проблем с fetch заявката:', error);
      setStatus('Възникна мрежова грешка. Моля, опитайте по-късно.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Свържете се с нас
      </h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-3xl mx-auto">
        Имате въпроси, нужда от оферта или искате да обсъдим вашия проект? Моля, попълнете формата по-долу или се свържете директно с нас. Цената за всяка услуга се договаря индивидуално, спрямо сложността на проекта и вашите изисквания.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Изпратете запитване</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Име:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Имейл:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Съобщение / Описание на проекта:
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
              >
                Изпрати
              </button>
            </div>
            {/* Показване на съобщения за статус */}
            {status && <p className={`mt-4 ${status.includes('Грешка') ? 'text-red-600' : 'text-green-600'}`}>{status}</p>}
          </form>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Директен контакт</h2>
          <p className="text-lg text-gray-700 mb-4">
            Ако предпочитате, можете да се свържете с нас директно:
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Имейл:</strong> <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">pamu3dkov@gmail.com</a>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Телефон:</strong> <a href="tel:+359123456789" className="text-blue-600 hover:underline">+359 885841420</a>
          </p>
          <p className="text-lg text-gray-700 mt-6">
            Ще се радваме да обсъдим вашия проект и да ви предложим най-доброто решение за вашите нужди от 3D принтиране и моделиране.
          </p>
        </div>
      </div>
    </div>
  );
}