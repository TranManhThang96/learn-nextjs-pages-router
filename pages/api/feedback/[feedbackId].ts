import type { NextApiRequest, NextApiResponse } from 'next';
import { getData, getFilePath } from '.';

type Data = {
  feedback: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const feedbackId = req.query.feedbackId;
  const filePath = getFilePath();
  const data: any[] = getData(filePath);
  const selectedFeedback = data.find((item) => (item.id === feedbackId));
  res.status(200).json({ feedback: selectedFeedback });
}
