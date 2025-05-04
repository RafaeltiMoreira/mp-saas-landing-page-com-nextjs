'use server';

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
/* eslint-disable */
export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: true,
      redirectTo: '/dashboard',
    });
  } catch (e: any) {
    if (isRedirectError(e)) {
      throw e;
    }

    if (e.type === 'CredentialsSignin') {
      return { success: false, message: 'Informações incorretas.' };
    }

    return { success: false, message: 'Erro ao fazer login!' };
  }
}