import logo from './logo.svg';
import './App.css';
import PollList from './PollList';
import { BrowserRouter } from 'react-router-dom/dist';

function App() {
  return (
    <div className="App">
      <BrowserRouter><PollList/></BrowserRouter>
    </div>
  );
}

export default App;
