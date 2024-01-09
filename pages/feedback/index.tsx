import { getFilePath, getData } from '../api/feedback';
import React, { useState } from 'react';

const Feedback = ({ feedbacks }: { feedbacks: any[] }) => {
  const [currentFeedback, setCurrentFeedback] = useState<any>(null);

  const loadFeedbackHandler = (id: string) => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentFeedback(data.feedback);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {currentFeedback && <p>{currentFeedback.feedback}</p>}
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}>
            {item.feedback}{' '}
            <button onClick={() => loadFeedbackHandler(item.id)}>
              Show Detail
            </button>
          </li>
        ))}
      </ul>
    </>
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
