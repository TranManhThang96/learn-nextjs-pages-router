import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);
  function submitFormHandler(event: any) {
    event.preventDefault();

    const enteredEmail = emailInputRef?.current?.value;
    const enteredFeedback = feedbackInputRef?.current?.value;
    fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: enteredEmail,
        feedback: enteredFeedback,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea rows={5} id="feedback" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>

      <button onClick={loadFeedbackHandler} className="mt-5">
        Load Feedbacks
      </button>
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}>{item.feedback}</li>
        ))}
      </ul>
    </div>
  );
}
