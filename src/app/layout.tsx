// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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

            {/* Навигационни линкове */}
            <ul className="flex space-x-8 text-lg">
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