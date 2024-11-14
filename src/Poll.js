import React, { useState, useEffect } from 'react';

function Poll({id}) {
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
    const saveVote = async (optionId) => {
      const response = await fetch(`http://localhost:8080/poll/saveVote?id=${optionId}`, {method: "POST"});
    };

    saveVote(optionId);
    console.log(optionId);
  }

  if (!poll) {
    return <div>Loading...</div>;
  }

  const votePercent = (voteNumber) => {
    let totalVotes = 0;
    poll.options.forEach(option => {
      totalVotes += option.votes;
    });
    return Math.trunc(voteNumber/totalVotes * 100);
  }

  return (
    <div>
      <h2>{poll.question}</h2>
      <ul>
        {poll.options.map(option => (
          <li key={option.id}>
            <button onClick={() => handleVote(option.id)}>{option.text}</button> {votePercent(option.votes)}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Poll;