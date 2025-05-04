'use server';

import db from '@/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';
/* eslint-disable */
export default async function registerAction(_prevState: any,formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  console.info('==== Server Action ====');
  console.log(data);

  // Aqui você pode adicionar sua lógica de validação, como verificar se os campos estão preenchidos, se o email é válido, etc.
  if (!data.name || !data.email || !data.password) {
    return {
      message: 'Todos os campos precisam ser preenchidos.',
      success: false,
    };
  }

  // Usuário existente
  const userExists = await db.user.findUnique({
    where: { email: data.email },
  });

  if (userExists) {
    return {
      message: 'Usuário já cadastrado.',
      success: false,
    };
  }

  // Usuário não existe, então crie um novo usuário
  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password), // Hash seguro para a senha
    }
  });

  return redirect('/');
}