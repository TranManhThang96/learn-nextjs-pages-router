// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Res = {
  message: string;
  data?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
  const { email, name, message } = req.body;
  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    res.status(422).json({ message: 'Invalid input' });
    return;
  }

  // store it in a database
  const newMessage = { email, name, message };
  console.log(newMessage);
  res
    .status(201)
    .json({ message: 'Successfully stored message!', data: newMessage });
}
