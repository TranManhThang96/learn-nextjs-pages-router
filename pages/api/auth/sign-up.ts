// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sql from 'better-sqlite3';
import { hashPassword } from '@/libs/auth';
const db = sql('auth.db');

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: 'Invalid email or password' });
    return;
  }

  const hashedPassword = await hashPassword(password);
  console.log(email, hashedPassword);
  const insertQuery = db.prepare(
    'INSERT INTO users (email, password) VALUES (?, ?)'
  );
  insertQuery.run(email, hashedPassword);
  res.status(201).json({ message: 'Created user' });
}
