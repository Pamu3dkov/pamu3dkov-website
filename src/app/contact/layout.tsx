// src/app/contact/layout.tsx
import type { Metadata } from 'next'; // <-- Импортирайте Metadata тук

// ПРЕМЕСТЕТЕ вашия metadata обект тук
export const metadata: Metadata = {
  title: 'Свържете се с нас - 3D Принтиране Услуги',
  description: 'Изпратете запитване за 3D принтиране или моделиране. Свържете се с нас по имейл или телефон за индивидуална оферта.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}