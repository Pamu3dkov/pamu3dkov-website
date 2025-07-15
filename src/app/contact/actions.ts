// src/app/contact/actions.ts
'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { success: false, message: 'Моля, попълнете всички задължителни полета.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // <-- Използвай този адрес!
      to: 'pamu3dkov@gmail.com', // <-- ТВОЯТ ИМЕЙЛ, на който искаш да получаваш поръчките
      subject: `Ново запитване за 3D принтиране от ${name}`,
      html: `
        <h1>Ново запитване от сайта</h1>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Съобщение/Описание на проекта:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Грешка при изпращане на имейл:', error);
      return { success: false, message: 'Възникна грешка при изпращането на имейла. Моля, опитайте по-късно.' };
    }

    console.log('Имейл изпратен успешно:', data);
    return { success: true, message: 'Вашето съобщение беше изпратено успешно!' };

  } catch (error) {
    console.error('Грешка при изпращане на имейл (външна):', error);
    return { success: false, message: 'Възникна неочаквана грешка при изпращането. Моля, опитайте по-късно.' };
  }
}