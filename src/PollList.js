import {React, useState } from 'react';
import Poll from './Poll';

function PollList({ polls }) {
  const [currentPollId, setCurrentPollId] = useState();
  const [showPoll, setShowPoll] = useState(false);

  const handlePollClick = (pollId) => {
    setShowPoll(true);
    setCurrentPollId(pollId);
  };

  return (
    <div>
      <h1>Active Polls</h1>
      <ul>
        {polls.map(poll => (
          <li key={poll.id}>
            <button onClick={() => handlePollClick(poll.id)}>{poll.question}</button>
          </li>
        ))}
      </ul>
      {(() => {
        if (showPoll) {
          return (<Poll id={currentPollId} />)
        }
      })()}
    </div>
  );
}

export default PollList;