import { getFilePath, getData } from '../api/feedback';
import React from 'react';

const Feedback = ({ feedbacks }: { feedbacks: any[] }) => {
  return (
    <ul>
      {feedbacks.map((item) => (
        <li key={item.id}>{item.feedback}</li>
      ))}
    </ul>
  );
};

export default Feedback;

export async function getStaticProps() {
  const filePath = getFilePath();
  const data = getData(filePath);
  return {
    props: {
      feedbacks: data,
    },
  };
}
