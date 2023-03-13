import fs from 'fs';
import path from 'path';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  return (
    <div className={styles.main}>
      <h1>Feedback Page</h1>
      <ul>
        {feedbackData && <p>{feedbackData.email}</p>}
        {props.feedbackItems.map((item) => (
          <li>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'feedback.json');
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
