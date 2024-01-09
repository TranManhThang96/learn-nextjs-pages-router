// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  message: string;
  data?: any;
};

function getFilePath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

function getData(filePath: string) {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData.toString());
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = getFilePath();
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    const data = getData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success', data: data });
  } else {
    const data = getData(filePath);
    res.status(200).json({ message: 'Success', data: data });
  }
}
