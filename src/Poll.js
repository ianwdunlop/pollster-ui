import React, { useState, useEffect } from 'react';

function Poll({id}) {
  const [pollId, setPollId] = useState(id);
  const [poll, setPoll] = useState();

  useEffect(() => {
    const fetchPoll = async (id) => {
      const response = await fetch(`http://localhost:8080/poll/getPoll/${id}`);
      const data = await response.json();
      setPoll(data);
    };

    fetchPoll(id);
  }, [id]);

  const handleVote =  (optionId) => {
    console.log(optionId);
  }

  if (!poll) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map(option => (
          <li key={option.id}>
            <button onClick={() => handleVote(option.id)}>{option.text}</button>{option.votes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poll;