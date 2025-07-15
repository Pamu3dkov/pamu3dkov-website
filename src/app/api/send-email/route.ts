// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Взимане на данните от тялото на заявката
    const { name, email, message } = await request.json();

    // 1. Конфигуриране на Nodemailer транспорт
    // Използвайте вашия имейл доставчик и данни. Пример за Gmail:
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Можете да смените на 'outlook', 'yahoo' или да зададете host/port за други SMTP
      auth: {
        user: process.env.EMAIL_USER, // Вашият имейл адрес (от .env.local)
        pass: process.env.EMAIL_PASS, // Вашата App Password (от .env.local)
      },
    });

    // Проверка дали променливите на средата са зададени
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Липсват EMAIL_USER или EMAIL_PASS в .env.local');
      return NextResponse.json({ message: 'Сървърна грешка: Имейл конфигурацията не е пълна.' }, { status: 500 });
    }

    // 2. Дефиниране на опциите на имейла
    const mailOptions = {
      from: email, // Имейлът на изпращача от формата
      to: process.env.EMAIL_USER, // Имейлът, на който искате да получавате съобщенията (вашият)
      subject: `Ново запитване от Pamu3dkov Сайт от: ${name}`,
      html: `
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Съобщение:</strong></p>
        <p>${message}</p>
      `,
    };

    // 3. Изпратете имейла
    await transporter.sendMail(mailOptions);

    // Връщане на успешен JSON отговор
    return NextResponse.json({ message: 'Имейлът е изпратен успешно!' }, { status: 200 });

  } catch (error: any) {
    // Логване на грешката на сървъра
    console.error('Грешка при обработка на имейл в API рута:', error);
    // Връщане на грешка към клиента
    return NextResponse.json({ message: 'Грешка при изпращане на имейл.', error: error.message || 'Неизвестна сървърна грешка.' }, { status: 500 });
  }
}