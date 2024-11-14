import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Switch, Router, Route, useNavigate } from 'react-router-dom/dist';
import Poll from './Poll';

function PollList() {
  const [polls, setPolls] = useState([]);
  const [currentPollId, setCurrentPollId] = useState();
  const [showPoll, setShowPoll] = useState(false);
//   const navigate = useNavigate();

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await fetch('http://localhost:8080/poll/getPolls');
      const data = await response.json();
      setPolls(data);
    };

    fetchPolls();
  }, []);

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
            {/* <Link
            to={{
              pathname: "/poll",
              state: { pollId: poll.id }
            }}
          >{poll.question}</Link>
          </li> */}
          
         <button onClick={() => handlePollClick(poll.id)}>{poll.question}</button>
        </li>
        ))}
      </ul>
      {(() => {
                    if (showPoll) {
                        return (<Poll id={currentPollId}/>)
                    }
                })()}
      {/* <Switch> */}
          {/* <Route path="/poll">
            <Poll />
          </Route> */}
        {/* </Switch> */}
    </div>
  );
}

export default PollList;