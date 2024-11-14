import logo from './logo.svg';
import './App.css';
import PollList from './PollList';
import { BrowserRouter } from 'react-router-dom/dist';
import { useState, useEffect } from 'react';

function App() {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    const fetchPolls = async () => {
      const response = await fetch('http://localhost:8080/poll/getPolls');
      const data = await response.json();
      setPolls(data);
    };

    fetchPolls();
  }, []);
  return (
    <div className="App">
      <BrowserRouter><PollList polls={polls} /></BrowserRouter>
    </div>
  );
}

export default App;
