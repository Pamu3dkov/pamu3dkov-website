// src/app/layout.tsx
'use client'; // <-- ЗАДЪЛЖИТЕЛНО: Добавяме този ред, защото използваме useState и интерактивност

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react'; // <-- Добавяме импорт за useState

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pamu3dkov - 3D Принтиране и Моделиране',
  description: 'Предлагаме висококачествени услуги за 3D принтиране и моделиране по поръчка. Превърнете вашите идеи в реалност.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // <-- Ново състояние за мобилното меню

  return (
    <html lang="bg">
      <body className={inter.className}>
        {/* ---- Начало на "Бруталния" Header (Обновен) ---- */}
        <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 shadow-xl">
          <nav className="container mx-auto flex justify-between items-center py-2">
            {/* Лого/Име на бранда с поклащащ ефект и цветно "3D" */}
            <Link
              href="/"
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400
                         hover:from-blue-300 hover:to-cyan-300 transition duration-300 ease-in-out
                         hover:animate-shake tracking-wider"
            >
              Pamu
              <span className="text-blue-200">3D</span>
              kov
            </Link>

            {/* Хамбургер бутон за мобилни устройства */}
            <div className="md:hidden"> {/* Видим само на екрани по-малки от 'md' */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // При клик променя състоянието
                className="text-white focus:outline-none"
                aria-label="Toggle mobile menu" // Добавяме за достъпност
              >
                {/* Икона за хамбургер (три черти) или затваряне (Х) */}
                {isMobileMenuOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Десктоп навигационни линкове (скрити на малки екрани) */}
            <ul className="hidden md:flex space-x-8 text-lg"> {/* Скрити на екрани по-малки от 'md' */}
              <li>
                <Link href="/" className="relative group overflow-hidden">
                  <span className="relative z-10 hover:text-blue-300 transition duration-300 ease-in-out">Начало</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="relative group overflow-hidden">
                  <span className="relative z-10 hover:text-blue-300 transition duration-300 ease-in-out">Услуги</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="relative group overflow-hidden">
                  <span className="relative z-10 hover:text-blue-300 transition duration-300 ease-in-out">Портфолио</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="relative group overflow-hidden">
                  <span className="relative z-10 hover:text-blue-300 transition duration-300 ease-in-out">Контакти</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Мобилно меню (показва се/скрива се в зависимост от isMobileMenuOpen) */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Начало
              </Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Услуги
              </Link>
              <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Портфолио
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Контакти
              </Link>
            </div>
          )}
        </header>
        {/* ---- Край на "Бруталния" Header ---- */}

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Pamu3dkov. Всички права запазени.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}