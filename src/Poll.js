import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Poll({id}) {
  const [poll, setPoll] = useState(null);

  useEffect(() => {
    const fetchPoll = async () => {
      const response = await fetch(`http://localhost:8080/poll/getPoll/${id}`);
      const data = await response.json();
      setPoll(data);
    };

    fetchPoll();
  }, []);

  if (!poll) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map(option => (
          <li key={option.id}>
            {option.text} {option.votes}
            {/* <Link to={`/poll/saveVote?id=${option.id}`}>{option.text} ({option.votes})</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poll;