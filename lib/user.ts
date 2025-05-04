import { compareSync } from "bcrypt-ts";
import db from "./db";

type User = {
  name: string;
  email: string;
  password?: string;
}

export async function findUserByCredentials(
  email: string, 
  password: string
): Promise<User | null> {
  const user = await db.user.findFirst({
    where: {
      email: email,
    }
  });

  if (!user) {
    return null;
  }

  const passwordMatch = compareSync(password, user.password);

  if (passwordMatch) {
    return {
      name: user.name,
      email: user.email,
    };
  }

  return null;
}