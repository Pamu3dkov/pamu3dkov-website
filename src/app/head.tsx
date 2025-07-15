// src/app/head.tsx
// Този файл е Server Component по подразбиране
// и е предназначен за експортиране на метаданни

export const metadata = {
  title: 'Pamu3dkov - 3D Принтиране и Моделиране',
  description: 'Предлагаме висококачествени услуги за 3D принтиране и моделиране по поръчка. Превърнете вашите идеи в реалност.',
  // Можете да добавите и други мета тагове тук, ако имате
  // например:
  // viewport: 'width=device-width, initial-scale=1',
  // openGraph: {
  //   title: 'My Website',
  //   description: 'My website description',
  // },
};

// Този компонент може да бъде празен, защото Next.js търси само експорта на metadata.
export default function Head() {
  return (
    <>
      {/* Можете да добавите <link> тагове за favicon, шрифтове и т.н. тук, ако е необходимо */}
    </>
  );
}